import IMoviesService from "../interfaces/IMoviesService.interface";
import MovieModel from "../models/Movie.model";

export default class MoviesService implements IMoviesService {

    private _data : MovieModel[] =  [
                                        new MovieModel(
                                            181808, 
                                            7.2, 
                                            'Start wars III - Les derniers Jedi',
                                            '',
                                            'Start wars : the last Jedi',
                                            'Nouvel episode de la saga...',
                                            new Date(2017, 11, 13)
                                        ),
                                        new MovieModel(
                                            181809, 
                                            8.1, 
                                            'La guerre des etoiles',
                                            '',
                                            'Start wars',
                                            'Il y a bien longtemps dans la galaxy très lointaine...',
                                            new Date(1977, 5, 25)
                                        ),
                                    ];


    get(): MovieModel[] {
        return this._data;
    }

}