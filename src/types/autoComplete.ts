export interface IAutoComplete {
    suggestion : ISuggestAutoComplete[],
}

export interface ISuggestAutoComplete {
    Version : number,
    Key: string,
    Type: string,
    Rank: number,
    LocalizedName:string,
    Country : CountryScheme,
    AdministrativeArea: AdministrativeAreaScheme,
}

type CountryScheme = {
    ID: string;
    LocalizedName:string;
}

type AdministrativeAreaScheme = {
    ID: string;
    LocalizedName: string;   
}