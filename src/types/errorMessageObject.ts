// Api Error Messages : 
export const LOCATION_NOT_FOUND = 'Location Not Found';
export const API_KEY_LIMIT = `The allowed number of requests has been exceeded for today`;

// User Intercation Error mesassages :
export const EMPTY_INPUT = 'Enter City name';
export const INVALID_INPUT = 'INVALID INPUT - NO API' 
export interface IerrorObject {
    status: number,
    message: string | undefined,
    api: string,
}

export const defaultErrorMessage = {
    status: 0,
    message: undefined,
    api: '',
}

export const createErrorObject = (status: number, message: string, api: string): IerrorObject => {

    const errorObject: IerrorObject = {
        status,
        message,
        api,
    }
    return errorObject;
}
