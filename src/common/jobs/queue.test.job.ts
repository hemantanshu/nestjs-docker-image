import { Injectable } from '@nestjs/common';
import { CommonJob, QueueService } from '@servicelabsco/nestjs-utility-services';
import { hostname } from 'os';

@Injectable()
export class QueueTestJob extends CommonJob {
    constructor(protected readonly queueService: QueueService) {
        super('3f6affb24d28eefdea9d8a308037ea18');
    }

    async handle(data: any): Promise<any> {
        const h = hostname();

        console.log(`hostname ${hostname} ${data}`);
        // for (let i = 0; i < 10; ++i) {
        //     const rand = PlatformUtility.generateRandomNumber(4);
        //     this.delayedDispatch(1, { delay: rand });
        // }
    }
}
