variable "aws_eks_cluster" {}
variable "vpc_id" {}
variable "private_subnet_ids" {}
variable "region" {}

provider "aws" {
  version = ">= 2.28.1"
  profile = "roku-msc-dev_mscdev-admin"
  region  = var.region
}

resource "aws_iam_role" "fg_role" {
  name = "backstage-eks-fargate-profile"

  assume_role_policy = jsonencode({
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "eks-fargate-pods.amazonaws.com"
      }
    }]
    Version = "2012-10-17"
  })
}

resource "aws_iam_role_policy_attachment" "backstage-AmazonEKSFargatePodExecutionRolePolicy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSFargatePodExecutionRolePolicy"
  role       = aws_iam_role.fg_role.name
}

# TODO: fg profile needs only private subnets, so just adding those
# need a way to filter from vpc
resource "aws_eks_fargate_profile" "backstage_fg_profile" {
  cluster_name           = var.aws_eks_cluster.name
  fargate_profile_name   = "backstage_fg_profile"
  pod_execution_role_arn = aws_iam_role.fg_role.arn
  subnet_ids             = var.private_subnet_ids
  selector {
    # kubernetes namespace for 
    namespace = "default"
  }
}