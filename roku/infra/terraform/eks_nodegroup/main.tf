variable "aws_eks_cluster" {}
variable "vpc_id" {}
variable "subnet_ids" {}
variable "spend_tag" {
    default = "CloudEng_ServiceMesh"
}

provider "aws" {
  version = ">= 2.28.1"
  profile = "roku-msc-dev_mscdev-admin"
  region  = "us-west-2"
}

resource "aws_iam_role" "backsatage_role" {
  name = "eks-node-group-backsatage-role"

  assume_role_policy = jsonencode({
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "ec2.amazonaws.com"
      }
    }]
    Version = "2012-10-17"
  })
}

resource "aws_iam_role_policy_attachment" "backstage-AmazonEKSWorkerNodePolicy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"
  role       = aws_iam_role.backsatage_role.name
}

resource "aws_iam_role_policy_attachment" "backstage-AmazonEKS_CNI_Policy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
  role       = aws_iam_role.backsatage_role.name
}

resource "aws_iam_role_policy_attachment" "backstage-AmazonEC2ContainerRegistryReadOnly" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
  role       = aws_iam_role.backsatage_role.name
}

resource "aws_eks_node_group" "backstage_ng" {
  cluster_name    = var.aws_eks_cluster.name
  node_group_name = "backsatage-ng"
  node_role_arn   = aws_iam_role.backsatage_role.arn
  subnet_ids      = var.subnet_ids

  scaling_config {
    desired_size = 2
    max_size     = 2
    min_size     = 2
  }

  # Ensure that IAM Role permissions are created before and deleted after EKS Node Group handling.
  # Otherwise, EKS will not be able to properly delete EC2 Instances and Elastic Network Interfaces.
  depends_on = [
    aws_iam_role_policy_attachment.backstage-AmazonEKSWorkerNodePolicy,
    aws_iam_role_policy_attachment.backstage-AmazonEKS_CNI_Policy,
    aws_iam_role_policy_attachment.backstage-AmazonEC2ContainerRegistryReadOnly,
  ]

  tags = {
    Spend_Category: "${var.spend_tag}"
  }
}