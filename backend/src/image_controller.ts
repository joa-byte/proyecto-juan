// backend/src/image/image.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ImageService } from './image.service';

@Controller('generate-image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  async generate(@Body('prompt') prompt: string) {
    const image = await this.imageService.generate(prompt);
    return { image };
  }
}
