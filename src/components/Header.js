import React from 'react';
import styled from "styled-components";
import { Avatar } from "@mui/material";
import { AccessTime } from '@mui/icons-material';
import { Search as SearchIcon } from '@mui/icons-material';
import { HelpOutline as HelpMark } from '@mui/icons-material';

function Header() {
  return (
    <HeaderContainer>

      <HeaderLeft>
        <HeaderAvatar />
        <HeaderTimeIcon />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon/>
        <input placeholder="Search" />
      </HeaderSearch>

      <HeaderRight>
      <HelpMark/>
      </HeaderRight>

    </HeaderContainer>
  )
}

export default Header;

const HeaderRight = styled.div`

`;

const HeaderSearch = styled.div`
flex: 0.4; 
opacity: 1;
border-radius: 6px;
background-color: #421f44;
text-align: center;
display: flex;
padding: 0 50px; 
color: gray; 
border: 1px gray solid; 

> input {
  background-color: transparent;
  border: none;
  text-align: center; 
  min-width: 30vw; 
  outline: 0;
  color: white; 
}
`;


const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color:white; 
`;

const HeaderLeft = styled.div`
flex: 0.3; 
display: flex; 
align-items: center;
margin-left: 20px; 
`;
const HeaderAvatar = styled(Avatar)`
cursor: pointer; 

:hover {
  opacity: 0.8;
}
`;

const HeaderTimeIcon = styled(AccessTime)`
margin-left: auto;
margin-right: 30px; 
`;