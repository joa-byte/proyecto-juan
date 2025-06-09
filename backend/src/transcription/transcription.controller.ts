import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { TranscriptionService } from './transcription.service';

@Controller('transcribe')
export class TranscriptionController {
  constructor(private readonly transcriptionService: TranscriptionService) {}

  @Post()
  @UseInterceptors(FileInterceptor('audio', {
    storage: diskStorage({
      destination: '/tmp',
      filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
      },
    }),
  }))
  async transcribe(@UploadedFile() file: Express.Multer.File) {
    return this.transcriptionService.transcribe(file.path);
  }
}