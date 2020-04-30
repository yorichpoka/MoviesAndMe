import MovieModel from "../models/Movie.model";

export default interface IMoviesService {

    get() : MovieModel[];

}