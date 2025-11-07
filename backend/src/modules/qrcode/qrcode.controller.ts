import { Controller, Get, Query } from '@nestjs/common';
import { QrcodeService } from './qrcode.service';

@Controller('qrcode')
export class QrcodeController {
    constructor(private readonly qrCodeservice: QrcodeService) { };

    @Get('generar')
    async generarQrCode(@Query('url') url: string) {
        return this.qrCodeservice.generateQrCode(url);
    }
}
