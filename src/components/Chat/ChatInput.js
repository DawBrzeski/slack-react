import React from 'react';
import styled from "styled-components"
import { Button } from '@mui/material';

function ChatInput({ channelName, chanelId}) {

const sendMessage = (e ) => {
    e.preventDefault(); 
}


  return (
<ChatInputContainer>
    <form>
        <input placeholder={`Message #ROOM`}/>
        <Button hidden type="submit" onClick={sendMessage}>
            SEND
        </Button>
    </form>
</ChatInputContainer>

  )
  
  ;
}

export default ChatInput;


const ChatInputContainer = styled.div`


`;