import { Identity } from './SelectList';

export interface DisplayDraftable extends Identity {
    ImageUrl: string;
    Name: string;
    DraftableId: number;
    Salary: number;
    Position: string;
}