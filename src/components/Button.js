import { View, StyleSheet, Pressable, Text } from "react-native";

function Button({title, onPress}) {
    return(
        <View>
            <Pressable style={styles.button} onPress= {onPress}>
                <Text>{title}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 50,
        width: 329,
        marginTop: 40,
        backgroundColor: '#27ADFF',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})

export default Button;