export default class MovieModel {

    /**
     * Create new instance
     */
    constructor(
        public id : number = 0, 
        public voteAverage : number = 0,
        public title : string | null = null,
        public posterPath : string | null = null,
        public originalTitle : string | null = null,
        public overview : string | null = null,
        public releaseDate : Date | null = null
    ) {

    }

}