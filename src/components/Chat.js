import React,{useRef,useEffect} from 'react'
import styled from 'styled-components'
import StarborderOutlineIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import {useSelector} from 'react-redux'
import {selectRoomId} from '../features/appSlice'
import ChatInput from './ChatInput'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import Message from './Message'
function Chat() {
    const room=useSelector(selectRoomId);
    const chatRef=useRef(null);
    const [roomDetails]=useDocument(
        room && db.collection("rooms").doc(room)
    );
    const [roomMessages,loading]=useCollection(
        room && db.collection("rooms").doc(room).collection("messages").orderBy("timestamp","asc")
    );

    useEffect(() => {
        chatRef?.current?.scrollIntoView({behavior:"smooth",});
    }, [room,loading])
    console.log(roomDetails?.data())
    return (
        <>
        {room?(
            <ChatContainer>
           
            <Header>
                <HeaderLeft>
                    <h4><strong>{roomDetails?.data().name}</strong></h4>
                    <StarborderOutlineIcon/>
                </HeaderLeft>
                <h1>Social Network</h1>
                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon/>Details
                    </p>
                </HeaderRight>
            </Header>
            <ChatMessages>
                {
                    roomMessages?.docs.map((doc)=>{
                        const {message,timestamp,user,userImage}=doc.data();
                        return (
                            <Message
                            key={doc.id}
                            message={message}
                            timestamp={timestamp}
                            user={user}
                            userImage={userImage}
                            />
                        )
                    })
                }
                <ChatBottom ref={chatRef}/>
            </ChatMessages>
            <ChatInput chatRef={chatRef} channelName={roomDetails?.data().name} channelId={room}/>
        </ChatContainer>
        ):<img src="https://previews.123rf.com/images/rrraven/rrraven1804/rrraven180400004/98887663-men-and-women-with-smartphone-chatting-illustration-.jpg" style={{paddingLeft:"250px",objectFit:"contain",margin:"50px"}}/>}
        </>
        
    )
}

export default Chat

const ChatBottom=styled.div`
    padding-bottom:200px;
`;

const ChatMessages=styled.div``;
const Header=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
    border-bottom:1px solid lightgrey;
`;
const HeaderLeft=styled.div`
    display:flex;
    align-items:center;
    >h4{
        display:flex;
        text-transform:capitalize;
        margin-right:10px;
    }
    >h4> .MuiSvgIcon-root{
        margin-left:10px;
        font-size:18px;
    }
`;
const HeaderRight=styled.div`
    >p{
    display:flex;
    align-items:center;
    font-size:14px;
    }
    >p > .MuiSvgIcon-root{
        margin-right:5px !important;
        font-size:16px;
    }
`;
const ChatContainer=styled.div`
    flex:0.7;
    margin-top:60px; 
    flex-grow:1;
    overflow-y:scroll;
    >h1{
        /* margin-top:50px */
    }
`;