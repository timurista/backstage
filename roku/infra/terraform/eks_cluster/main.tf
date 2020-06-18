terraform {
  required_version = ">= 0.12.0"
}

variable "vpc_id" {}
variable "subnet_ids" {}
variable "subnet_cidr_blocks" {}

provider "aws" {
  version = ">= 2.28.1"
  profile = "roku-msc-dev_mscdev-admin"
  region  = "us-west-2"
}


resource "aws_iam_role" "backstage-cluster" {
  name = "eks-backstage-cluster"

  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "eks.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
POLICY
}

resource "aws_iam_role_policy_attachment" "backstage-cluster-AmazonEKSClusterPolicy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
  role       = aws_iam_role.backstage-cluster.name
}

resource "aws_iam_role_policy_attachment" "backstage-cluster-AmazonEKSServicePolicy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSServicePolicy"
  role       = aws_iam_role.backstage-cluster.name
}

resource "aws_security_group" "backstage-cluster" {
  name        = "eks-backstage-cluster"
  description = "Cluster communication with worker nodes"
  vpc_id      = var.vpc_id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "eks-backstage"
    Spend_Category: "${var.spend_tag}"
  }
}

resource "aws_security_group_rule" "backstage-cluster-ingress-workstation-https" {
  cidr_blocks       = var.subnet_cidr_blocks
  description       = "Allow workstation to communicate with the cluster API Server"
  from_port         = 443
  protocol          = "tcp"
  security_group_id = aws_security_group.backstage-cluster.id
  to_port           = 443
  type              = "ingress"
}

resource "aws_security_group_rule" "backstage-cluster-internal" {
  cidr_blocks       = var.subnet_cidr_blocks
  description       = "Allow workstation to communicate with the cluster API Server"
  from_port         = 80
  protocol          = "tcp"
  security_group_id = aws_security_group.backstage-cluster.id
  to_port           = 80
  type              = "ingress"
}

resource "aws_eks_cluster" "backstage" {
  name     = var.cluster-name
  role_arn = aws_iam_role.backstage-cluster.arn

  vpc_config {
    security_group_ids = [aws_security_group.backstage-cluster.id]
    subnet_ids         = var.subnet_ids
  }

  depends_on = [
    aws_iam_role_policy_attachment.backstage-cluster-AmazonEKSClusterPolicy,
    aws_iam_role_policy_attachment.backstage-cluster-AmazonEKSServicePolicy,
  ]
  
  tags = {
    Spend_Category: "${var.spend_tag}"
  }
}

output "aws_eks_cluster" {
    value = aws_eks_cluster.backstage
}