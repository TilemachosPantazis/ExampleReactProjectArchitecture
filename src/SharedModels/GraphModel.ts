export interface IGraphData {
    SessionName: string;
    SessionUID: string;
    Pupil: IPupil;
    Score: IScore;
}

export interface IPupil {
    PupilName: string;
    PupilUID: string;
}

export interface IScore {
    Leadership: number;
    Recilience: number;
    TeamWork: number;
    SelfAwareness: number;
    Collaboration: number;
    Communication: number;
}

export interface IUsedSentences {
    UsedSentences: string[];
    Tag: Tag
}

export enum Tag {
    Leadership,
    Recilience,
    TeamWork,
    SelfAwareness,
    Collaboration,
    Communication
}