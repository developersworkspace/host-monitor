import * as commander from 'commander';
import { MonitorCommandHandler } from './handlers/monitor-command';

commander
    .command('monitor <from> <to>')
    .action(MonitorCommandHandler.handle);

commander.parse(process.argv);
