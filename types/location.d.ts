export interface Location {
    name: string;
    url:  string;
}

export interface LocationComponent {
    location: LocationsResult
}

export interface LocationsResult {
    id:        number;
    name:      string;
    type:      string;
    dimension: string;
    residents: string[];
    url:       string;
    created:   Date;
}
