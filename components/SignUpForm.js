import React from 'react';
import {View, Text} from 'react-native';
import  { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

//make a const(so everytime we pass it won't look messy) of url that we done in firebase funcitons.
const ROOT_URL = 'https://us-central1-one-time-password-8e25d.cloudfunctions.net';

class SignUpForm extends Component {
	state = { phone: '' };

	// handleSubmit = () => {
	// 	//using axios library to post and get datas.
	// 	axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone })

	// 	//once phone number is taken request for one time password.
	// 	.then(() => {
	// 		axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone })
	// 	})
	// } 


	//upper code is also good but messy. so we use ES7 stuff used async and await.
	//async is a asynchronus method and await is wait until request isn't succesfully completed(like wait for this **********axios.post(`${ROOT_URL}/createUser` , { phone: this.state.phone )********* until go to next line of code) .
	handleSubmit = async () => {
		try{
			//using axios library to post and get datas. and down  there taking functions from firebase that we made prvious project(one-time-password).
			await axios.post(`${ROOT_URL}/createUser` , { phone: this.state.phone });
			// once phone number is taken request for one time password.
			await axios.post(`${ROOT_URL}/requestOneTimePassword`, {phone: this.state.phone});
		}
		catch(err)
		{
			console.log(err);
		}
	}

	render()
	{
		return (
			<View>	
				<View style= {{ marginBottom: 10 }}>
					<FormLabel> Enter phone number </FormLabel>
					<FormInput
						value = {this.state.phone}
						onChangeText = {phone => this.setState({ phone })}
					 />
				</View>					
				<Button onPress = {this.handleSubmit} title="Submit"/>
			</View>
		);
	}
}

export default SignUpForm;