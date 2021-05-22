
export interface Iforecasts {
    DailyForecasts: IdailyForecasts[],
    Headline: Iheadline,
}

export interface IdailyForecasts {
    Date: Date;
    EpochDate: number;
    Temperature: Temperature;
    Day: DayNight;
    Night: DayNight;
    Sources: string[],
    MobileLink: string,
    Link: string,


}
export interface Iheadline {
    Category: string;
    EffectiveDate: string
    EffectiveEpochDate: number;
    EndDate: string;
    EndEpochDate: number;
    Link: string;
    MobileLink: string;
    Severity: number;
    Text: string;
}
type Temperature = {
    Minimum: MinMax,
    Maximum: MinMax,
}

type MinMax = {
    Value: number;
    Unit: Unit;
    UnitType: number;
}

type DayNight = {
    Icon: Number;
    IconPhrase: string;
    HasPrecipitation: boolean;
}

type Unit = 'C' | 'F';

export type CityForecast = {
    cityKey: string;
    city: string;
    forecasts: Iforecasts,
}

export const defaultCityForecast: CityForecast = {
    cityKey: '0',
    city: '',
    forecasts: {
        DailyForecasts: [],
        Headline: {
            Category: '',
            EffectiveDate: '',
            EffectiveEpochDate: 0,
            EndDate: '',
            EndEpochDate: 0,
            Link: '',
            MobileLink: '',
            Severity: 0,
            Text: '',
        }
    },
}
