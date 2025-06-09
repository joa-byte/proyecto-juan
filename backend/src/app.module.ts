import { Module } from '@nestjs/common';
import { TranscriptionController } from './transcription/transcription.controller';
import { TranscriptionService } from './transcription/transcription.service';
import { ImageController } from './image_controller';
import { ImageService } from './image.service';

@Module({
  controllers: [TranscriptionController, ImageController],
  providers: [TranscriptionService, ImageService],
})
export class AppModule {}
