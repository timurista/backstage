## updates your config
export REGION=us-west-2
export CLUSTER_NAME=backstage-cluster-eks
export AWS_PROFILE=roku-msc-dev_mscdev-admin

# load the profile
aws eks --region ${REGION} update-kubeconfig --name $CLUSTER_NAME --profile $AWS_PROFILE

# update the config
aws --profile=$AWS_PROFILE eks update-kubeconfig --name $CLUSTER_NAME 

# FYI
# might need to run aws-iam-authenticator to get the token
# so you update the ~/.kube/config
# example:
# - name: arn:aws:eks:us-west-2:824163854805:cluster/backstage-cluster-eks
#   user:
#     exec:
#       apiVersion: client.authentication.k8s.io/v1alpha1
#       args:
#       - token
#       - -i
#       - backstage-cluster-eks
#       command: aws-iam-authenticator
#       env:
#       - name: AWS_STS_REGIONAL_ENDPOINTS
#         value: regional
#       - name: AWS_DEFAULT_REGION
#         value: us-west-2
#       - name: AWS_PROFILE
#         value: roku-msc-dev_mscdev-admin
