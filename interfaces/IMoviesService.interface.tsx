import { MovieType } from "../models/Movie.type";

export default interface IMoviesService {

    getSearchedQuery(query : string) : Promise<MovieType[]>;

}