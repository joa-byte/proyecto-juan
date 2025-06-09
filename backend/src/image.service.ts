// image.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ImageService {
  async generate(prompt: string): Promise<string> {
    const response = await axios.post(
      'https://api.replicate.com/v1/predictions',
      {
        version: "a9758cbf6d591e1fc6dc9f66eae4b8abdc3bd161c1c2d0496f724b038b6f62a0", // SD 1.5
        input: { prompt }
      },
      {
        headers: {
          Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const prediction = response.data;
    return prediction.urls.get; // esto es un polling URL
  }
}
