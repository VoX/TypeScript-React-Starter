export interface NameDisplay {
    value: string;
    isEmphasized: boolean;
}

export interface Competition {
    competitionId: number;
    name: string;
    nameDisplay: NameDisplay[];
    startTime: Date;
}

export interface DraftStatAttribute {
    id: number;
    value: string;
    sortValue: string;
}

export interface PlayerAttribute {
    name: string;
    value: string;
}

export interface PlayerGameAttribute {
    id: number;
    value: string;
}

export interface Draftable {
    draftableId: number;
    firstName: string;
    lastName: string;
    displayName: string;
    shortName: string;
    playerId: number;
    position: string;
    rosterSlotId: number;
    salary: number;
    status: string;
    isSwappable: boolean;
    isDisabled: boolean;
    newsStatus: string;
    playerImageFull: string;
    playerImage50: string;
    playerImage65: string;
    playerImage160: string;
    competition: Competition;
    draftStatAttributes: DraftStatAttribute[];
    playerAttributes: PlayerAttribute[];
    playerGameAttributes: PlayerGameAttribute[];
    teamId: number;
    teamAbbreviation: string;
    draftAlerts: string[];
    playerGameHash: string;
}

export interface HomeTeam {
    teamId: number;
    teamName: string;
    abbreviation: string;
    city: string;
}

export interface AwayTeam {
    teamId: number;
    teamName: string;
    abbreviation: string;
    city: string;
}

export interface Weather {
    icon: string;
    isDome: boolean;
}

export interface Competition2 {
    competitionId: number;
    sport: string;
    homeTeam: HomeTeam;
    awayTeam: AwayTeam;
    startTime: Date;
    name: string;
    venue: string;
    weather: Weather;
    startingLineupsAvailable: boolean;
    depthChartsAvailable: boolean;
    competitionState: string;
}

export interface DraftStat {
    id: number;
    abbr: string;
    name: string;
    order: number;
}

export interface PlayerGameAttribute2 {
    id: number;
    name: string;
    type: string;
    filterable: boolean;
    filterRosterSlotIds: number[];
    prompt: string;
}

export interface ErrorStatus {
}

export interface DraftableResponse {
    draftables: Draftable[];
    competitions: Competition2[];
    draftAlerts: string[];
    draftStats: DraftStat[];
    playerGameAttributes: PlayerGameAttribute2[];
    errorStatus: ErrorStatus;
}
