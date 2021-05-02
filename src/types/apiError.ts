export const LOCATION_NOT_FOUND = 'Location Not Found';
export const API_KEY_LIMIT = `The allowed number of requests has been exceeded for today`;

export interface ApiError {
    status: number,
    message: string | undefined,
    api: string,
}

export const defaultErrorMessage = {
    status: 0,
    message: undefined,
    api: '',
}

export const createApiErrorObject = (status: number, message: string, api: string): ApiError => {

    const apiError: ApiError = {
        status,
        message,
        api,
    }
    return apiError;
}
