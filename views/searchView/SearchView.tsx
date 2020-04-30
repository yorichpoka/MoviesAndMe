import React from 'react';
import { 
    Button, 
    TextInput, 
    View, 
    FlatList,
} from 'react-native';
import { MOVIES_SERVICE } from '../../helpers/ServiceProvider';
import MovieItemComponent from '../components/movieItemComponent/MovieItemComponent';
import { STYLES } from './SearchView.styles';

const SearchView = () : JSX.Element => {

    return (
        <View 
            style={STYLES.view}>
            <TextInput 
                style={STYLES.textInput}
                placeholder="Title of movie" 
            />
            <Button 
                style={STYLES.button}
                title="Search" 
                onPress={() => {}} 
            />
            <FlatList 
                data={MOVIES_SERVICE.get()}
                keyExtractor={(item) => item.id.toString()}
                renderItem={
                    ({item}) => <MovieItemComponent data={item} />
                }
            />
        </View>
    );

}

export default SearchView;