import chalk from 'chalk';
import { HostScannner } from '..';
import { TableWriter } from '../console-writers/table';

export class MonitorCommandHandler {

    public static async handle(from: string, to: string, command: any): Promise<void> {
        console.log(`Scanning...`);
        const hostScanner: HostScannner = new HostScannner(5, null, null, 1000);

        let result: Array<{ hostname: string, ipAddress: string }> = await hostScanner.scanRange(from, to);

        result = result.filter((x) => x.hostname);

        TableWriter.write([
            ['', ''],
        ].concat(result.map((x) => [`${x.ipAddress}`, `${x.hostname}`])));

        console.log(`${result.length} Hosts`);
    }

}
