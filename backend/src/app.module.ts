import { Module } from '@nestjs/common';
import { TranscriptionController } from './transcription/transcription.controller';
import { TranscriptionService } from './transcription/transcription.service';

@Module({
  controllers: [TranscriptionController],
  providers: [TranscriptionService],
})
export class AppModule {}
