import React , { Fragment } from 'react';
import {View, Text} from 'react-native';
import  { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

//make a const(so everytime we pass it won't look messy) of url that we done in firebase funcitons.
const ROOT_URL = 'https://us-central1-one-time-password-8e25d.cloudfunctions.net';

class SignInForm extends Component {
	state = { phone: '', code: ''};

	handleSubmit = async () => {
		try {
		//we directy take data object and that data contain key  
		//we take let specificly because accessing specificly datas. 
		let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
				phone: this.state.phone, code: this.state.code
		});
		
		firebase.auth().singInWithCustomToken(data.token);
	}
		catch(err)
		{
			console.log(err);
		}
	}

	render()
	{

		return(
			<View>	

				<View style= {{ marginBottom: 10 }}>
					<FormLabel> Enter phone number </FormLabel>
					<FormInput
						value = {this.state.phone}
						onChangeText = {phone => this.setState({ phone })}
					 />
				</View>

				<View style= {{ marginBottom: 10 }}>
					<FormLabel> Enter Code </FormLabel>
					<FormInput
						value = {this.state.code}
						onChangeText = {code => this.setState({ code })}
					 />
				</View>

				<Button onPress = {this.handleSubmit} title="Submit"/>
			</View>
		);
	}
}

export default SignInForm; 