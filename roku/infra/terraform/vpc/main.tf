provider "aws" {
  profile = "roku-msc-dev_mscdev-admin"
  region  = "us-west-2"
}

data "aws_vpc" "selected" {
  id = "${var.vpc_id}"
}

data "aws_subnet_ids" "subnet_ids" {
  vpc_id = var.vpc_id
}

data "aws_subnet" "subnet" {
  for_each = data.aws_subnet_ids.subnet_ids.ids
  id       = each.value
}
output "subnet_ids" {
  value = [for s in data.aws_subnet.subnet : s.id]
}
output "subnet_cidr_blocks" {
  value = [for s in data.aws_subnet.subnet : s.cidr_block]
}
output "vpc_id" {
  value = data.aws_vpc.selected.id
}


