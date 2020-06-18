module "vpc" {
  source = "./vpc"
  vpc_id = "${var.vpc_id}"
}

module "eks_cluster" {
    source = "./eks_cluster"

    vpc_id = "${module.vpc.vpc_id}"
    subnet_ids = "${module.vpc.subnet_ids}"
    subnet_cidr_blocks = "${module.vpc.subnet_cidr_blocks}"
}

module "eks_nodegroup" {
    source = "./eks_nodegroup"

    aws_eks_cluster = "${module.eks_cluster.aws_eks_cluster}"
    vpc_id = "${module.vpc.vpc_id}"
    subnet_ids = "${module.vpc.subnet_ids}"
}