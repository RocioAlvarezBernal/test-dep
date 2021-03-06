import React from 'react'
import InputField from "../InputField";
import JWT from '../JWT';
import LISbutton from "../LISbutton";
import UserStore from "./UserStore";
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react'; 
import URL from '../URL'
class SIForm extends React.Component {
constructor(props){
    super(props);

    this.state={
        username:'',
        password:'',
        buttonDisables: false,
        Token:''
    }
    this.onLogIn= this.onLogIn.bind(this)
    // this.setInputValue= this.setInputValue.bind(this)
}

setInputValue(property, val){
    val =val.trim();
    if (val.length  > 12){
        return;
    }
    this.setState({
        [property]:val
    })
}

resetForm(){
    this.setState({
        username:'',
        password: '',
        buttonDisables: false
    })
}

onLogIn(){
    // alert("You logged in and will be redirected to your homepage")
    // window.location = "/Home";
}

async doLogin(){
    if (!this.state.username){
        return;
    }
    if(!this.state.password){
        return;
    }
    this.setState({
        buttonDisables: false
        
    })

     let jsonbody = {
        userName: this.state.username,
        password: this.state.password
    }
    // console.log(jsonbody)

    // this.onLogIn();

    try{
        let res =await fetch (`${URL.url}/authenticate`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonbody)
        });
        let result = await res.json();
        console.log(result);

// if loginform is success set login to true 
// result && result.success
        if( res.status === 200){
        //   localStorage.JWTtest= res.jwt;  
          UserStore.isLoggedIn= true;
          UserStore.username= result.username; 
          JWT.jwt=res.jwt;
          window.location = "/Home"
        //  this.onLogIn();
        }
//else reset form 
        else if (result&&result.success === false){
            this.resetForm();
        }
    }
// incase error console log error and reset form 
    catch(e){
        console.log(e);
        this.resetForm();
    }
}

    render(){        
        return(
            <div className='signInForm'>
                Log In
                <InputField
                 type="text" 
                 placeholder="Username"
                 value = { this.state.username ? this.state.username: ''}
                 onChange = { (val) => this.setInputValue('username' , val)}
                 />   

                <InputField
                 type="password" 
                 placeholder="Password"
                 value = { this.state.password ? this.state.password : ''}
                 onChange = { (val) => this.setInputValue('password' , val)}
                 />   

                <LISbutton 
                    text= 'Sign in'
                    disabled={this.state.buttonDisables}
                    onClick ={ () => this.doLogin()}
                    className='lisb'
                />

            </div>
        )
    }
}

export default observer(SIForm)
