export interface IErrorPayload {
    Error?: {
      Message: string;
      Title: string;
      Type: ErrorTypes;
      ErrorCode?: number;
      UID?: string;
    };
  }
  
  export class ErrorPayload implements IErrorPayload {
    Error?: {
      Message: string;
      Title: string;
      Type: ErrorTypes;
      ErrorCode: number;
      UID?: string;
    };
  }
  
  export enum ErrorTypes {
    Basic = 10,
    ApiCall = 20,
  }
  