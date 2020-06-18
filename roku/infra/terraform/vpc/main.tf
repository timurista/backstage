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

data "aws_subnet_ids" "private" {
  vpc_id = var.vpc_id
  filter {
    name   = "tag:aws:cloudformation:logical-id"
    values = ["PrivateSubnet1", "PrivateSubnet2", "PrivateSubnet3"]
  }
}

data "aws_subnet" "subnet" {
  for_each = data.aws_subnet_ids.subnet_ids.ids
  id       = each.value
}

data "aws_subnet" "private" {
  for_each = data.aws_subnet_ids.private.ids
  id       = each.value
}

output "private_subnet_ids" {
  value = [for s in data.aws_subnet.private : s.id]
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


