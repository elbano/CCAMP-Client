export enum EStatusMode
{
    sm_Inactive = 0,
    sm_Active = 1,
    sm_Suspended = 2,
}

export class User {
    Guid: string;
    Email: string;
    UserName: string;
    Status: EStatusMode;
    CreationDate: Date;
}
