import {
  uploadImageToS3,
  uploadFileToS3,
} from '../../../infrastructure/aws/utils';

export const processImage = async (
  imageBase64: string | undefined,
): Promise<string | undefined> => {
  if (!imageBase64) {
    return undefined;
  }
  try {
    const imageUrl = await uploadImageToS3('message-image', imageBase64);
    return imageUrl;
  } catch (error) {
    console.error('Error while uploading image to S3: ', error);
    return undefined;
  }
};

export const processFile = async (
  fileBase64?: string,
  fileName: string = 'message-file',
): Promise<string | undefined> => {
  if (!fileBase64) {
    return undefined;
  }
  try {
    const fileUrl = await uploadFileToS3(fileName, fileBase64);
    return fileUrl;
  } catch (error) {
    console.error('Error while uploading file to S3: ', error);
    return undefined;
  }
};
