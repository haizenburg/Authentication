import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';

import Logo from '../../../assets/images/logo.jpg';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const SignInScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.log('sign in');
  };
  const onSignInFacebook = () => {
    console.log('sign in');
  };
  const onSignInGoogle = () => {
    console.log('sign in');
  };
  const onSignInApple = () => {
    console.log('sign in');
  };

  const oForgotPasswordPressed = () => {
    console.log('forgot pass');
  };
  const onSignUpPressed = () => {
    console.log('sign up');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode={'contain'}
        />

        <CustomInput
          placeholder={'Username'}
          value={username}
          setValue={setUsername}
          isPassword={false}
        />
        <CustomInput
          placeholder={'Password'}
          value={password}
          setValue={setPassword}
          isPassword
        />

        <CustomButton text={'Sign in'} onPress={onSignInPressed} />
        <CustomButton
          text={'Forgot password?'}
          onPress={oForgotPasswordPressed}
          type="TERTIARY"
        />
        <CustomButton
          text={'Sign in with Facebook'}
          onPress={onSignInFacebook}
          bgColor="#E7EAF4"
          fgColor={'#4765A9'}
        />
        <CustomButton
          text={'Sign in with Google'}
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          fgColor={'#DD4D44'}
        />
        <CustomButton
          text={'Sign in with Appke'}
          onPress={onSignInApple}
          bgColor="#e3e3e3"
          fgColor={'#363636'}
        />

        <CustomButton
          text={'Dont have an account? Create on'}
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
