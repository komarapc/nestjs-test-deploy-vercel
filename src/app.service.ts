import * as os from 'os';

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getApp() {
    return {
      statusCode: 200,
      statusMessage: 'OK',
      data: {
        appVersion: '1.0.0',
        appDescription: 'First Deploy',
        system: {
          platform: os.platform(),
          type: os.type(),
          release: os.release(),
          version: os.version(),
          cpus: os.cpus(),
        },
      },
    };
  }
}
