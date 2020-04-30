import React from 'react';
import { StyleSheet, Button, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
    textInput: {
        marginLeft: 5, 
        marginRight: 5, 
        height: 50, 
        borderColor: '#000000', 
        borderWidth: 1, 
        paddingLeft: 5
    },
    view: {
        marginTop: 20
    },
    button: {
        height: 50
    }
});

const SearchView = () : JSX.Element => {

    return (
        <View 
            style={styles.view}>
            <TextInput 
                style={styles.textInput}
                placeholder="Title of movie" 
            />
            <Button 
                style={styles.button}
                title="Search" 
                onPress={() => {}} 
            />
        </View>
    );

}

export default SearchView;