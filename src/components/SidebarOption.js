import React from 'react'
import styled from 'styled-components';
function SidebarOption({Icon,title}) {
    return (
        <SidebarOptionContainer>
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
    >h3 > span{
        padding:15px;
    }
`;
const SidebarOptionChannel=styled.div``;