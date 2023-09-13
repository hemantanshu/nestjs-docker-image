import { RedisIoAdapter } from './adapters/redis.io.adapter';
import { QueueTestJob } from './jobs/queue.test.job';
import { Es6JobsService } from './services/es6.jobs.service';
import { ShutdownService } from './services/shutdown.service';

const es6Classes = {
    adapters: [RedisIoAdapter],
    jobs: [QueueTestJob],
    services: [Es6JobsService, ShutdownService],
};

export default es6Classes;
