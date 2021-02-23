import { Button } from '@material-ui/core'
import React, {useEffect,useState,useRef} from 'react'
import styled from 'styled-components'
import {useCollection} from 'react-firebase-hooks/firestore'
import {db} from '../firebase'
import firebase from 'firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
function ChatInput({channelName,channelId,chatRef}) {
    const inputRef=useRef(null);
    var [roomName,setroomName]=useState([]);
    const [user]=useAuthState(auth);
    const sendMessage=e=>{
        e.preventDefault();
        if(!channelId)
        {
            return false;
        }
        if(inputRef.current.value)
        {
            db.collection("rooms").doc(channelId).collection('messages')
            .add({
                message:inputRef.current.value,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                user:user?.displayName,
                userImage:user?.photoURL,
            });
            chatRef?.current?.scrollIntoView({behavior:"smooth",});
            inputRef.current.value="";
        }
       
    }
    return (
        <ChatInputContainer>
            <form>
                <input ref={inputRef} placeholder={`Message in ${channelName}`}/>
                <Button disabled={!inputRef}  type="submit" onClick={sendMessage}>
                    Send
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer=styled.div`
    border-radius:20px;
    >form{
        position:relative;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    >form >input{
        position:fixed;
        bottom:30px;
        width:60%;
        border:1px solid grey;
        border-radius:3px;
        padding:20px;
        outline:none;
    }
    >form >button{
        position:fixed;
        bottom:40px;
        width:6%;
        height:4%;
        border:1px solid grey;
        border-radius:3px;
        right:0;
        margin-right:30px;
        outline:none;
        transition:all 0.7s;
        :hover{
            background-color:var(--slack-color);
            color:white;
        }
        /* display:none !important; */
    }
`;
