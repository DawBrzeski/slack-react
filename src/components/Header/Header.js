import React from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import { HelpOutline as HelpMark } from '@mui/icons-material';
import {HeaderContainer, HeaderLeft, HeaderAvatar, HeaderTimeIcon, HeaderSearch, HeaderRight} from "./styled";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';


function Header() {

  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>

      <HeaderLeft>
        <HeaderAvatar 
        alt={user?.displayName}
        src={user?.photoURL}
        onClick={() => auth.signOut()}
        />
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

