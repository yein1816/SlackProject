import React, { useState } from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';

function ChatInput({sendMessage}) {

    const [input, setInput] = useState('');

    const send = (e) => {
        e.preventDefault();
        if(!input) return;
        sendMessage(input)
        setInput("")
    }
    return (
        <>
        <Container>
            <InputContainer>
                <form>
                    <input 
                        onChange={(e) => setInput(e.target.value)}
                        type="text" 
                        value= {input}
                        placeholder="Message here..."/>
                    <SendButton 
                        type="submit"
                        onClick={send}>
                        <SendIcon style={{width:"18px",
                        color:"#d9d9d9"
                        }}/>
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
        </>
    )
}

export default ChatInput;

const Container = styled.div`
    padding: 0 20px 24px 20px;
`;

const InputContainer = styled.div`
    border: 1px solid #BDBD8E;
    border-radius: 4px;

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding: 0 10px 0 10px;

        input {
            flex: 1;
            border-style:none;
            font-size: 13px;
        }
        input:focus {
            outline: none;
        }
    }
`;

const SendButton = styled.button`
    background: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    :hover {
        background: #148567;
    }
`;