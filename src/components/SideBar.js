import styled from 'styled-components'
import React from 'react'
import CreateIcon from '@material-ui/icons/Create'
import FiberManualIcon from '@material-ui/icons/FiberManualRecord'
import SidebarOptionContainer from './SidebarOption'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
function SideBar() {
    return (
        <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>Green Grocers</h2>
                    <h3>
                        <FiberManualIcon/>
                        Raj Kale
                    </h3>
                </SideBarInfo>
                <CreateIcon/>
            </SideBarHeader>
            <SidebarOptionContainer Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOptionContainer Icon={InsertCommentIcon} title="Mentions & Reactions"/>
            <SidebarOptionContainer Icon={InsertCommentIcon} title="Saved Items"/>
            <SidebarOptionContainer Icon={InsertCommentIcon} title="Channel Browser"/>
            <SidebarOptionContainer Icon={InsertCommentIcon} title="People $ User Groups"/>
            <SidebarOptionContainer Icon={InsertCommentIcon} title="Apps"/>
            <hr/>
            <SidebarOptionContainer Icon={ExpandMoreIcon} title="Channels"/>
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
`;
const SideBarHeader=styled.div`
    display:flex;
    padding:13px;
    border-bottom:1px solid #49274b;
    >.MuiSvgIcon-root{
        padding:8px;
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