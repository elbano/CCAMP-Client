export enum EStatusMode
{
    sm_Inactive = 0,
    sm_Active = 1,
    sm_Suspended = 2,
}

export class User {
    guid: string;
    email: string;
    userName: string;
    status: EStatusMode;
    creationDate: Date;
}
