import { Injectable } from '@nestjs/common';
import { QueueTestJob } from '../jobs/queue.test.job';
import { PlatformUtility } from '@servicelabsco/nestjs-utility-services';

/**
 * this would get all the jobs which is part of the given module
 * @export
 * @class Es6JobsService
 */
@Injectable()
export class Es6JobsService {
    private jobs = {};

    constructor(private readonly queueTestJob: QueueTestJob) {
        this.alignJobs();
        this.setJobs();
    }

    /**
     * this would assign all the jobs which is defined
     * @memberof Es6JobsService
     */
    alignJobs() {
        this.jobs = {
            '3f6affb24d28eefdea9d8a308037ea18': this.queueTestJob,
        };
    }

    /**
     * assign the jobs service to the local property
     * @memberof Es6JobsService
     */
    setJobs() {
        PlatformUtility.setJobs(this.jobs);
    }
}
