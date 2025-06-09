// backend/src/app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): string {
    return 'Backend funcionando ✅';
  }
}
