import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Button } from 'react-native'
import Input from '../components/Input'
import { colors } from '../global/colors'
import { useEffect, useState } from 'react'
import { useSignUpMutation } from '../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import { signupSchema } from '../validations/signupSchema'

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const [triggerSignup, result] = useSignUpMutation()

    const onSubmit = () => {
        setEmailError("")
        setPasswordError("")
        setConfirmPasswordError("")
        try {
            signupSchema.validateSync({ email, password, confirmPassword }, { abortEarly: false })
        } catch (error) {
            error.errors.map(e => {
            const customError = Object.values(e)[0]
            switch (Object.keys(e)[0]) {
                case "empty_email":
                setEmailError(customError)
                case "invalid_email":
                setEmailError(customError)
                case "empty_password":
                setPasswordError(customError)
                case "invalid_password":
                setPasswordError(customError)
                case "invalid_confirm_password":
                setConfirmPasswordError(customError)
                case "invalid_match_password":
                setConfirmPasswordError(customError)
                default:
                    break
            }
        });
        }
        triggerSignup({ email, password })
}

    const dispatch = useDispatch()

    useEffect(()=>{
        if(result.data){
            dispatch(setUser(result.data))
        }
    }, [result])

    return (
        <KeyboardAvoidingView style={styles.container} behavior='height'>
            <Input
                placeholder={"Email"}
                onChange={setEmail}
                error={emailError}
            />
            <Input
                placeholder={"Contraseña"}
                onChange={setPassword}
                isSecureEntry={true}
                error={passwordError}
            />
            <Input
                placeholder={"Repetir contraseña"}
                onChange={setConfirmPassword}
                isSecureEntry={true}
                error={confirmPasswordError}
            />
            <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                <Text style={styles.btnText}>Registrarme</Text>
            </TouchableOpacity>
            <View style={styles.altContainer}>
                <Text style={styles.subtitle}>¿Ya tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                    <Text style={styles.subtitleLink}>Ingresar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        gap: 25,
    },
    btn: {
        padding: 10,
        backgroundColor: colors.primaryBack,
        borderRadius: 8,
        margin: 5,

    },
    btnText: {
        color: colors.primary,
        fontFamily: "Poppins-Bold"
    },  
    altContainer: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    subtitle: {
        color: "#fff",
        fontFamily: "Poppins-Bold",
        fontSize: 12,
    },
    subtitleLink: {
        fontFamily: "Poppins-Light",
        color: "#fff",
        fontSize: 11,
        textDecorationLine: 'underline'
    }
})