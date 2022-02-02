import React from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import { HelpOutline as HelpMark } from '@mui/icons-material';
import {HeaderContainer, HeaderLeft, HeaderAvatar, HeaderTimeIcon, HeaderSearch, HeaderRight} from "./styled";


function Header() {
  return (
    <HeaderContainer>

      <HeaderLeft>
        <HeaderAvatar />
        <HeaderTimeIcon />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search" />
      </HeaderSearch>

      <HeaderRight>
        <HelpMark />
      </HeaderRight>

    </HeaderContainer>
  )
}

export default Header;

