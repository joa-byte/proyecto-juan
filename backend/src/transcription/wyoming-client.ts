import * as net from 'net';
import * as msgpack from '@msgpack/msgpack';

export function sendToWyoming(host: string, port: number, audioBuffer: Buffer): Promise<string> {
  return new Promise((resolve, reject) => {
    const client = new net.Socket();
    let received = '';

    console.log('[Wyoming] Codificando metadatos...');
    const metadata = msgpack.encode({
      type: 'audio',
      language: 'en',
      encoding: 'wav',
      sample_rate: 16000,
    });

    const audioHeader = Buffer.from('WYRM');
    const metadataLength = Buffer.alloc(4);
    const audioLength = Buffer.alloc(4);

    metadataLength.writeUInt32BE(metadata.length, 0);
    audioLength.writeUInt32BE(audioBuffer.length, 0);

    const fullPayload = Buffer.concat([
      audioHeader,
      metadataLength,
      metadata,
      audioLength,
      audioBuffer,
    ]);

    console.log('[Wyoming] Conectando al socket...');
    client.connect(port, host, () => {
      console.log('[Wyoming] Enviando datos...');
      client.end(fullPayload);
    });

    client.on('data', (data) => {
      console.log('[Wyoming] Recibido:', data.toString());
      received += data.toString();
    });

    client.on('end', () => {
      console.log('[Wyoming] Fin de conexión');
      resolve(received.trim());
    });

    client.on('error', (err) => {
      console.error('[Wyoming] Error:', err);
      reject(err);
    });
  });
}
