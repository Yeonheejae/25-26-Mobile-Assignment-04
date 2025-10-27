import {View, StyleSheet, TextInput, Text} from 'react-native';

export const KeyboardTypes = {
        DEFAULT : 'default',
        EMAIL: 'email-address',
    }

function CustomInput({title, placeholder, keyboardType}) {
    return(
        <View>
            <Text style={styles.label}>{title}</Text>
            <TextInput style={styles.input}
            placeholder = {placeholder ?? title}
            placeholderTextColor={"#A3A3A3"}
            autoCapitalize = 'none'
            autoCorrect = {false}
            keyboardType={keyboardType}
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

    input: {
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 42,
        width: 329,
        marginBottom: 10,
    },
    label: {
        marginLeft: 7,
        marginBottom: 2,
        fontSize: 12,
    }
});

export default CustomInput;