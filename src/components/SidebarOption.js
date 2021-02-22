import React from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components';
import {db} from '../firebase'
import {enterRoom} from '../features/appSlice'
import {useSelector} from 'react-redux'
import {selectRoomId} from '../features/appSlice'

function SidebarOption({Icon,title,addChannelOption,id}) {
        const dispatch=useDispatch();
        const room=useSelector(selectRoomId);
        const addChannel=()=>{
        const channelName=prompt("Please Enter the Channel Name");
        if(channelName)
        {
            db.collection('rooms').add({
                name:channelName
            })
        }
    }
    const selectChannel=()=>{
        if(id)
        {
            console.log("Inside")
            dispatch(enterRoom({
                roomId:id
            }))
        }
        console.log(room);   
    }
    return (
        <SidebarOptionContainer
            onClick={addChannelOption?addChannel:selectChannel}
        >
            {Icon && <Icon fontSize='small' style={{padding:10}}/>}
            {Icon?(
                <h3>{title}</h3>
            ):(
                <SidebarOptionChannel>
                    <span>#</span>{title}
                </SidebarOptionChannel>
            )}
        </SidebarOptionContainer>
    )
}

export default SidebarOption

const SidebarOptionContainer=styled.div`
display:flex;
font-size:12px;
cursor:pointer;
padding-left:2px;
align-items:center;
    :hover{
        opacity:0.8;
        background-color:#340e36;
    }
    >h3{
        font-weight:500;
    }
    >span{
        padding:15px;
    }
`;
const SidebarOptionChannel=styled.div`
    display:flex;
    align-items:center;
    cursor:pointer;
    padding-left:10px;
    font-weight:900;
    >span{
        /* font-weight:900; */
        font-size:20px;
        padding:5px;
        padding-right:15px;
    }

`;