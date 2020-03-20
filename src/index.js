const log4js = require('log4js');

const CronJob = require('cron').CronJob;
logger = log4js.getLogger('CRON');
logger.level = 'debug';
let isRunning = false;
logger.info('Before job instantiation');
const job = new CronJob('* * * * * *', function() {
	logger.info('Check every second:', 'isRunning: ', isRunning);

	if (!isRunning) {
		isRunning = true;

		setTimeout(function() {
			logger.debug('Long running onTick complete:');
			isRunning = false;
		}, 3000);
		logger.debug('setTimeout triggered.');
	}
});
logger.info('After job instantiation');
job.start();

