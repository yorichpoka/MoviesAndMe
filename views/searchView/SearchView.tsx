import React, { useState } from 'react';
import { 
    Button, 
    TextInput, 
    View, 
    FlatList,
} from 'react-native';
import { MOVIES_SERVICE } from '../../helpers/ServiceProvider.helper';
import MovieItemComponent from '../components/movieItemComponent/MovieItem.component';
import { STYLES } from './SearchView.styles';
import { MovieType } from '../../models/Movie.type';
import { IFetchState } from '../../interfaces/IFetchState';

const SearchView = () : JSX.Element => {

    //#region States
    const [movies, setMovies] = useState<IFetchState<MovieType[]>>({
        data: [],
        isLoading: false
    });
    const [searchedText, setSearchedText] = useState<IFetchState<string>>({
        data: '',
        isLoading: false
    });
    //#endregion

    //#region Functions
    const handleOnPress = () => {
        setMovies(l => ({...l, isLoading: true }));

        MOVIES_SERVICE.getSearchedQuery(searchedText.data as string)
                      .then(
                        (data) => {
                            setMovies(l => ({...l, isLoading: false, data: data }));
                        },
                        (error) => {
                            setMovies(l => ({...l, isLoading: false }));
                        }
                      );
    }

    const handleOnChangeText = (text : string) => {
        setSearchedText(l => ({...l, data: text}))
    }
    //#endregion

    //#region Render
    return (
        <View 
            style={STYLES.view}>
            <TextInput 
                style={STYLES.textInput}
                placeholder="Title of movie"
                value={searchedText.data as string}
                onChangeText={handleOnChangeText}
            />
            <Button 
                style={STYLES.button}
                title={movies.isLoading ? "Loading..." 
                                        : "Search"}
                onPress={handleOnPress}
            />
            <FlatList 
                data={movies.data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={
                    ({item}) => <MovieItemComponent data={item} />
                }
            />
        </View>
    );
    //#endregion

}

export default SearchView;