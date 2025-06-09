import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as wav from 'node-wav';
import { sendToWyoming } from './wyoming-client';

@Injectable()
export class TranscriptionService {
  async transcribe(filePath: string): Promise<{ text: string }> {
    const wavBuffer = fs.readFileSync(filePath);
    
    console.log('Enviando audio al servicio whisper via Wyoming...');

    const text = await sendToWyoming('whisper', 10300, wavBuffer);
    return { text };
  }
}
