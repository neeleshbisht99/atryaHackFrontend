BUCKET_NAME="atreya-web"
DISTRIBUTION_ID="EZOUBK67EE8B9"

echo "-- Install --"
# Install dependencies
npm install

echo "-- Build --"
# Build
npm run build

echo "-- Deploy --"
# Sync build with our S3 bucket
aws s3 sync build s3://$BUCKET_NAME
# Invalidate cache
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*" --no-cli-pager