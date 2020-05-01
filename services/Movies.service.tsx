import IMoviesService from "../interfaces/IMoviesService.interface";
import { ENV_ApiUrl } from "../helpers/Environment.helper";
import { MovieType } from "../models/Movie.type";

export default class MoviesService implements IMoviesService {

    getSearchedQuery(query : string): Promise<MovieType[]> {

        return  new Promise<MovieType[]>(
                    (resolve, reject) => {
                        // Request on api.
                        fetch(`${ENV_ApiUrl}${query}`)
                            .then(
                                (response : Response) => {
                                    // Get object of response.
                                    response.json()
                                            .then(
                                                (responseData : any) => {
                                                    // Result.
                                                    let dataResults : MovieType[] = [];
                                                    dataResults.push(responseData);
                                                    // Resolve.
                                                    resolve(dataResults);
                                                },
                                                (error : any) => {
                                                    // Reject.
                                                    reject(error);
                                                }
                                            );
                                },
                                (error : any) => {
                                    // Reject
                                    reject(JSON.stringify(error));
                                }
                            );
                    }
                );
                
    }

}