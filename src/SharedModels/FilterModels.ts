
export interface IFilterOptions {
    Leadership: boolean;
    Recilience: boolean;
    TeamWork: boolean;
    SelfAwareness: boolean;
    Collaboration: boolean;
    Communication: boolean;
}

export class FilterOptions implements IFilterOptions {
    Leadership = false;
    Recilience = false;
    TeamWork = false;
    SelfAwareness = false;
    Collaboration = false;
    Communication = false;
}