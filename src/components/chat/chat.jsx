import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import avatar from '../../assets/images/default.png';
import { connect } from 'react-redux';
import NavBar from '../common/navBar';
import Input from '../common/input';
import sendingIcon from '../../assets/images/sending-icon.png';
import  socketIOClient from '../../helpers/socket';
import {getChatMessages} from '../../actions/chat';
import Notify from '../../helpers/helpers';
class Chat extends Component {
    state = {
      textfield: {
        inputMessage: ''
      }, messages:[]
    };

    handleChange = (e) => {
      const data = { ...this.state.textfield };
      data.inputMessage = e.target.value;
      this.setState({ textfield: data });
    };
    scrollChatThreadToBottom = () => {
      const chatModal = document.querySelector('#message-list');
      const scrollChatThreadToBottom = chatModal && chatModal.scrollTo(0, 100000000000);
      return scrollChatThreadToBottom;
    };
    handleSubmit = (e) => {
      e.preventDefault();
      const { token } = localStorage;
      const { inputMessage } = this.state.textfield;
      if (inputMessage) {
        this.setState({ textfield:{ inputMessage: '' } });
        socketIOClient.emit('new_message', { message: inputMessage, token });
      } else {
        Notify.setAlertError('Enter a message please!');
      }
    };
    getUserName=()=>{
      const { username } = JSON.parse(localStorage.getItem('user'));
      return username;
    }
    componentDidMount = () => {
      this.props.getChat();
      socketIOClient.on('message_created', (newMessage)=>{
      const dataMessages = this.state.messages;
      this.setState({messages: [...dataMessages, newMessage]})  
      })
    };
    componentWillReceiveProps(chat){
         this.setState({messages: chat.message})
         this.scrollChatThreadToBottom();
    }
    componentDidUpdate(){
      this.scrollChatThreadToBottom();
    }
    render() {
      const { messages } = this.state
        return ( 
            <div id="component-chat">
              <ToastContainer />
              <NavBar/>
              <div className="chat-container">
                <h2>Chat Messages</h2>
              <div className="message-list" id="message-list">
                {messages.map(({ message, createdAt, User}, key) => (
                <div key={key} className={`chat-card ${User.username === this.getUserName() ? 'darker' : 'left-card'}`}>
                  <caption><b>{User.username === this.getUserName() ? 'Me' : User.username}</b></caption>
                  <img src={User.image !== null ? User.image : avatar} className="avatar" />
                    <p>{message}</p>
                    <span className="time-left">{new Date(createdAt).toDateString()}</span>
                    <span className="time-right">
                      {`${new Date(createdAt).getHours()}:${new Date(createdAt).getMinutes()}`}
                    </span>
                  </div>))}
              </div>
              <input
                type="text"
                id='input-message'
                name="title"
                placeholder="Enter a message"
                className="textForm titleText"
                autoComplete="off"
                onChange={this.handleChange}
                value={this.state.textfield.inputMessage}
              />
              <img
                src={sendingIcon}
                alt="upload"
                className="upload-button"
                onClick={this.handleSubmit}
              />
              </div>
            </div>
         );
    }
}

const mapStateToChat= ({chat}) =>{
  return chat
}
const mapDispatchToProps = (dispatch)=>{
  return {
    getChat:()=>dispatch(getChatMessages())
  }
}
export default connect(mapStateToChat,mapDispatchToProps)(Chat)