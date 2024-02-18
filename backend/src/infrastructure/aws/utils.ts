import { PutObjectCommand, PutObjectCommandOutput } from '@aws-sdk/client-s3';
import { clientS3 } from './s3-client';
import crypto from 'crypto';
import { fromBase64 } from '@aws-sdk/util-base64-node';

export const uploadFileToS3 = async (fileName: string, base64File: string) => {
  const [meta, data] = base64File.split(',');
  const contentType = meta.split(';')[0].split(':')[1];
  const fileData = fromBase64(data);

  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: createRandomName(16, fileName),
    Body: fileData,
    ContentType: contentType,
  };

  try {
    await clientS3.send(new PutObjectCommand(params));
    return `https://${params.Bucket}.s3.${process.env.BUCKET_REGION}.amazonaws.com/${params.Key}`;
  } catch (error) {
    console.error('Error during file upload to S3:', error);
  }
};

export const uploadImageToS3 = async (fileName: string, base64File: string) => {
  const imageName = createRandomName(16, fileName);
  const [meta, data] = base64File.split(',');
  const contentType = meta.split(';')[0].split(':')[1];
  const imageData = fromBase64(data);

  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: imageName,
    Body: imageData,
    ContentType: contentType,
  };

  try {
    await clientS3.send(new PutObjectCommand(params));
    return `https://${process.env.BUCKET_NAME}.s3.${process.env.BUCKET_REGION}.amazonaws.com/${imageName}`;
  } catch (error) {
    console.error(error);
  }
};

export const createRandomName = (
  length: number = 16,
  originalName: string = 'image',
) => {
  const date = Date.now();
  const randomString = crypto.randomBytes(length).toString('hex');

  return `${originalName}-${date}-${randomString}`;
};
