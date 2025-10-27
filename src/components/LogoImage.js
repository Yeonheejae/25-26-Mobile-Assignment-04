import { Image, View, StyleSheet} from 'react-native';

function LogoImage(){
    return(
        <View>
            <Image
            source={require('../../assets/hjcompany.png')}
            resizeMode="cover"
            style={StyleSheet.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: 200,
        height: 300,
    }
});

export default LogoImage;