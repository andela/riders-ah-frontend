import React, {Component} from 'react';

class emailInUse extends Component {
    state = {  }
    componentDidMount(){
      document.body.style.backgroundImage =
      "url('../../assets/images/auth-background.jpg')";
    }
    render() { 
        return ( 
        <div >
            <div className='verify'>
              <h2>email already in use</h2>
              <strong>
                <a href='/signup' className='link right'>
                Create Account
                </a>
              </strong>
              <strong>
                <a href='/reset' className='link left'>
                Forgot Password?
                </a>
             </strong>
            </div>
        </div>
         );
    }
}

export default emailInUse;
