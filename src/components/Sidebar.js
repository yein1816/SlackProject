import React from 'react'
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { sidebarItemData } from '../data/SidebarData';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';
import {useHistory} from 'react-router-dom';

function Sidebar(props) {
    console.log(props);

    const history = useHistory();
    
    const goToChannel = (id) => {
        if(id) {
            history.push(`/room/${id}`)
        }
    }

    const addChannel = () => {
        const prompName = prompt("Enter channel name");
        console.log(prompName);
        if(prompName) {
            db.collection('rooms').add({
                name:prompName
            })
        }
    }
 

    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    FrontAndDeveloper
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon/>
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItemData.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon 
                    onClick={addChannel} 
                    style={{cursor:"pointer"}}
                    />
                </NewChannelContainer>
                <ChannelsList>
                    {
                        props.rooms.map(item => (
                            <Channel onClick={()=>goToChannel(item.id)}>
                               # {item.name}
                            </Channel>
                        ))
                    }
                </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar;

const Container = styled.div`
  background: #271427;

`;

const WorkspaceContainer = styled.div`
  color: #fff;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 0 0 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;

const Name = styled.div`
`;

const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: #fff;
    border-radius: 50%;
    color: #3f0e40;
    fill: #3f0e40;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;

const MainChannels = styled.div`
    padding-top: 20px;
`;

const MainChannelItem = styled.div`
    color: rgb(188,171,188);
    display: grid;
    grid-template-columns: 15% auto; 
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    margin-top: 10px;
    :hover {
        background: #350d36;
    }
`;

const ChannelsContainer = styled.div`
    padding-top: 20px;
    padding-left: 19px;
    color: rgb(188,171,188);
`;

const NewChannelContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 20px;
   padding-right: 12px;
`;

const ChannelsList = styled.div`

`;

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-left: -19px;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #350d36;
    }
`;