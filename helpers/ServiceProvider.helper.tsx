import IMoviesService from "../interfaces/IMoviesService.interface";
import MoviesService from "../services/Movies.service";

const MOVIES_SERVICE : IMoviesService = new MoviesService();

export {
    MOVIES_SERVICE
}