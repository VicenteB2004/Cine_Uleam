import { Injectable } from '@nestjs/common';
import { url } from 'inspector';
import * as QRcode from 'qrcode';

@Injectable()
export class QrcodeService {
    async generateQrCode(text: string): Promise<string>{
        try {
            const qrCodeDataUrl = await QRcode.toDataURL(text);
            return qrCodeDataUrl;
        }catch(err){
            console.error(err);
            throw err;
        }
    }
}
