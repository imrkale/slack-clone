import React from 'react'
import styled from 'styled-components'
import {Avatar} from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
function Header() {
    return (
        <HeaderContainer>
           {/* Header Left */}
           <HeaderLeft>
               <HeaderAvatar/>
               <AccessTimeIcon/>
           </HeaderLeft>
           <HeaderSearch>
                <SearchIcon/>
                <input placeholder="Search in chat"/>
           </HeaderSearch>
           <HeaderRight>
                <HelpOutlineIcon/>
           </HeaderRight>
           {/* Header Search */}
           {/* Header Right */}
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer= styled.div`
    display:flex;
    position:fixed;
    width:100%;
    align-items:center;
    justify-content:space-between;
    padding:10px 0;
    background-color:var(--slack-color);
    color:white;
`;
const HeaderLeft=styled.div`
    flex:0.3;
    display:flex;
    align-items:center;
    margin-left:20px;
    
    > .MuiSvgIcon-root {
        margin-left:auto;
        margin-right:30px;
    }
`;
const HeaderAvatar=styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity:0.8;
    }
`;
const HeaderSearch=styled.div`
    flex:0.4;
    display:flex;
    align-items:center;
    padding:5px 50px;
    opacity:1.4;
    background-color:#421f44;
    /* 340e36 */
    border-radius:6px;
    /* border:2px grey solid; */
    >input{
        border:none;
        color:white;
        background-color:transparent;
        text-align:flex-start;
        padding-left:10px;
        min-width:30px;
        outline:none;
    }
`;
const HeaderRight=styled.div`
    display:flex;
    flex:0.3;
    align-items:flex-end;
    >.MuiSvgIcon-root{
        margin-left:auto;
        margin-right:20px;
    }
`;
