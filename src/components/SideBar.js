import styled from 'styled-components'
import React from 'react'
import CreateIcon from '@material-ui/icons/Create'
import FiberManualIcon from '@material-ui/icons/FiberManualRecord'
import SidebarOptionContainer from './SidebarOption'
import AddIcon from '@material-ui/icons/Add'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import {useCollection} from 'react-firebase-hooks/firestore'
import {db} from '../firebase'
import AppsIcon from '@material-ui/icons/Apps';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import WebIcon from '@material-ui/icons/Web';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import TagFacesIcon from '@material-ui/icons/TagFaces';
function SideBar() {
    const [user]=useAuthState(auth);
    const [channels,loading,error]=useCollection(db.collection("rooms"));
    return (
        <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>{user?.email}</h2>
                    <h3>
                        <FiberManualIcon/>
                        {user?.displayName}
                    </h3>
                </SideBarInfo>
                <CreateIcon/>
            </SideBarHeader>
            <SidebarOptionContainer Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOptionContainer Icon={TagFacesIcon} title="Mentions & Reactions"/>
            <SidebarOptionContainer Icon={SaveAltIcon} title="Saved Items"/>
            <SidebarOptionContainer Icon={WebIcon} title="Channel Browser"/>
            <SidebarOptionContainer Icon={PeopleAltIcon} title="People $ User Groups"/>
            <SidebarOptionContainer Icon={AppsIcon} title="Apps"/>
            <hr/>
            <SidebarOptionContainer Icon={ExpandMoreIcon} title="Channels"/>
            <hr/>
            <SidebarOptionContainer Icon={AddIcon} title="Add Channel" addChannelOption/>
            {channels?.docs.map(doc=>(
                <SidebarOptionContainer key={doc.id} id={doc.id} title={doc.data().name}/>
            ))}
        </SideBarContainer>
    )
}

export default SideBar

const SideBarContainer=styled.div`
    background-color:var(--slack-color);
    color:white;
    
    flex:0.3;
    border-top:1px solid #49274b;
    max-width:260px;
    margin-top:60px;

    >hr{
        margin-top:10px;
        margin-bottom:10px;
        border:1px solid #49274b;
    }
`;
const SideBarHeader=styled.div`
    display:flex;
    padding:13px;
    border-bottom:1px solid #49274b;
    >.MuiSvgIcon-root{
        padding:8px;
        margin-left:10px;
        color:#49274b;
        font-size:18px;
        background-color:white;
        border-radius:999px;
    }
`;
const SideBarInfo=styled.div`
    flex:1;
    >h2{
        display:flex;
        justify-content:start;       
        font-size:15px;
        font-weight:900;
        margin-bottom:5px;
    }
    >h3{
        display:flex;
        font-size:13px;
        font-weight:400;
        align-items:center;
    }
    >h3 > .MuiSvgIcon-root{
        font-size:14px;
        margin-top:1px;
        margin-right:2px;
        color:green;
    }
`;