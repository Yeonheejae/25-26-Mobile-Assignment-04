import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogoImage from '../components/LogoImage';
import CustomInput from '../components/CustomInput';
import { KeyboardTypes } from '../components/CustomInput';
import Button from '../components/Button';



const SignInScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <LogoImage/>
            <CustomInput
                title = {"아이디"}
                placeholder={"your@email.com"}
                keyboardType={KeyboardTypes.EMAIL}
            />
            <CustomInput
                title = {"비밀번호"}
                placeholder={"비밀번호"}
                keyboardType={KeyboardTypes.DEFAULT}
            />
            <Button
                title = {"로그인"}
            />
            <Button onPress={() => navigation.navigate("SignUp")}
                title = {"회원가입"}
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
});

export default SignInScreen;