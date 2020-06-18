export REGION=us-west-2
export CLUSTER_NAME=backstage-cluster-eks
export AWS_PROFILE=roku-msc-dev_mscdev-admin
export TF_VAR_vpc_id=vpc-02ddf2f74612697e2

terraform apply --auto-approve