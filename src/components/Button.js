import { View, StyleSheet, Pressable, Text } from "react-native";

function Button({title, onPress, marginTop}) {
    return(
        <View style={styles.container}>
            <Pressable style={[styles.button, marginTop={marginTop}]} onPress= {onPress}>
                <Text>{title}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
    },
    button: {
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 50,
        backgroundColor: '#27ADFF',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})

export default Button;