import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';


export default function NavBar() {

    const {activityStore} = useStore();

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header style={{marginLeft: '-6vw'}}>
                    <img src='/assets/icon.png' alt="logo" style={{marginRight: '1vw'}}/>
                    Sunflower
                </Menu.Item>
                <Menu.Item name='Activities' />
                <Menu.Item>
                    <Button onClick={() => activityStore.openForm()} positive content='Crete Activity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}