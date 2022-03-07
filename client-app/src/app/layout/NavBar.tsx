import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header style={{marginLeft: '-6vw'}}>
                    <img src='/assets/logo.png' alt="logo" style={{marginRight: '1vw'}}/>
                    Sunflower
                </Menu.Item>
                <Menu.Item name='Activities' />
                <Menu.Item>
                    <Button positive content='Crete Activity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}