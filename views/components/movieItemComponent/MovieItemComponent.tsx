import React from 'react';
import { View, Text, Image } from 'react-native';
import { IProps } from './MovieItemComponent.iprops';
import { STYLES } from './MovieItemComponent.styles';

const MovieItemComponent = (props : IProps) : JSX.Element => {

    return (
        <View style={STYLES.main_container}>
            <Image 
                style={STYLES.images} 
                source={{uri: 'image'}} 
            />
            <View style={STYLES.content_container}>
                <View style={STYLES.header_container}>
                    <Text style={STYLES.title_text}>
                        {props.data.title}
                    </Text>
                    <Text style={STYLES.vote_text}>
                        {props.data.voteAverage}
                    </Text>
                </View>
                <View style={STYLES.description_container}>
                    <Text style={STYLES.description_text} numberOfLines={6}>
                        {props.data.overview}
                    </Text>
                </View>
                <View style={STYLES.date_container}>
                    <Text style={STYLES.date_text}>
                        {props.data.releaseDate?.toString()}
                    </Text>
                </View>
            </View>
        </View>
    );

}

export default MovieItemComponent;