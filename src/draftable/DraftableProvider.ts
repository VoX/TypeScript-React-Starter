import { DraftableResponse } from './dto/DraftableResponse';

export class DraftableProvider {
    private connectionString: string;

    constructor(connectionString: string) {
        this.connectionString = connectionString;
    }

    public async getDraftables(draftgroupId: number): Promise<DraftableResponse> {
        const raw = await fetch(
            `${this.connectionString}/draftgroups/v1/draftgroups/${draftgroupId}/draftables?format=json`,
            { mode: 'cors' });
        const body = await raw.text();
        const response = JSON.parse(body) as DraftableResponse;
        return response;
    }
}
