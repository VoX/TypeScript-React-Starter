import { DisplayDraftable } from './DisplayDraftable';

import { DraftableResponse } from './dto/DraftableResponse';
import Enumerable from 'typescript-dotnet-commonjs/System.Linq/Linq';

export class DraftableProvider {
    private connectionString: string;

    constructor(connectionString: string) {
        this.connectionString = connectionString;
    }

    public async getDraftables(draftgroupId: number): Promise<Array<DisplayDraftable>> {
        const raw = await fetch(
            `${this.connectionString}/draftgroups/v1/draftgroups/${draftgroupId}/draftables?format=json`,
            { mode: 'cors' });
        const body = await raw.text();
        const response = JSON.parse(body) as DraftableResponse;
        const mapped = Enumerable.from(response.draftables).where(x => x.isDisabled === false).select(x => {
            const display: DisplayDraftable = {
                ImageUrl: x.playerImageFull,
                DraftableId: x.draftableId,
                Name: x.displayName,
                Position: x.position,
                Salary: x.salary,
            };
            return display;
        });
        return mapped.toArray();
    }
}
