
# tags for msc-dev
export AWS_ACCOUNT_ID=824163854805
export AWS_REGION=us-west-2
export CLUSTER_NAME=backstage-cluster-eks
export AWS_PROFILE=roku-msc-dev_mscdev-admin
export REP_NAME=spotify/backstage

# build from the main backstage location
# yarn docker-build

# login to ecr
$(aws ecr get-login --profile=$AWS_PROFILE --region=$AWS_REGION --no-include-email)

# todo create but need permission in role to create
# aws ecr create-repository --repository-name=$REP_NAME

docker tag spotify/backstage:latest $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/spotify/backstage:latest
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/spotify/backstage:latest