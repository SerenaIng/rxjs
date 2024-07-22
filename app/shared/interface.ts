import { Subsystems } from 'src/app/shared/enum';

export interface SearchParams {
    subsystem: Array<Subsystems>;
    name: string;
}

export interface SearchState extends SearchParams{};

export interface SearchResult extends SearchParams{
    timeline: string;
};


export interface ServerResponse {
    response: Array<SearchResult>;
}