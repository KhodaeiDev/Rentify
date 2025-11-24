import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import * as path from 'path';
@Injectable()
export class LiaraStorageService {
  private client: S3Client;

  constructor() {
    this.client = new S3Client({
      region: 'default',
      endpoint: process.env.LIARA_ENDPOINT,
      credentials: {
        accessKeyId: process.env.LIARA_ACCESS_KEY,
        secretAccessKey: process.env.LIARA_SECRET_KEY,
      },
    });
  }

  async upload(file: Express.Multer.File) {
    const ext = path.extname(file.originalname);
    const safeName = `${Date.now()}-${Math.floor(Math.random() * 9e10)}${ext}`;
    const key = `rentify/${safeName}`;

    const params = {
      Bucket: process.env.LIARA_BUCKET_NAME,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    };
    console.log(params);

    await this.client.send(new PutObjectCommand(params));

    return {
      url: `${process.env.LIARA_ENDPOINT}/${process.env.LIARA_BUCKET_NAME}/${key}`,
      key,
    };
  }
}
