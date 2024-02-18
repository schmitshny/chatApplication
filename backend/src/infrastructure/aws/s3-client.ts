import { S3Client } from '@aws-sdk/client-s3';
import 'dotenv/config.js';

export const clientS3 = new S3Client({
  region: process.env.BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.BUCKET_KEY ?? '',
    secretAccessKey: process.env.BUCKET_SECRET ?? '',
  },
});
