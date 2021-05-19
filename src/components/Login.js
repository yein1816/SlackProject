import React from 'react'
import styled from 'styled-components';
import {auth,provider} from '../firebase';

function Login(props) {
    
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result)=>{
            const newUser = {
                name:result.user.displayName,
                photo: result.user.photoURL,
            }
            //구글에 이미 로그인 되어 있으면 자동 로그인
            //F12-어플리케이션에 로컬 스토리지에 user에 로그인한 유저 정보가 찍힘
            localStorage.setItem("user", JSON.stringify(newUser));  
            props.setUser(newUser);
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <Container>
           <Content>
               <SlackImg>
                  <img src="/images/logo.png"/> 
               </SlackImg>
                <h1>Sign in Slack</h1>
                <SignInButton onClick={()=>signIn()}>
                    Sign in With Google
                </SignInButton>
           </Content>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    background: #fff;
    padding: 100px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SlackImg = styled.div`
    height: 100px;
    img {
        width: 80px;
    }
`;

const SignInButton = styled.button`
    margin-top: 50px; 
    border:none;
    background-color: #0a8d48;
    color: #fff;
    height: 40px;
    padding: 5px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
`;