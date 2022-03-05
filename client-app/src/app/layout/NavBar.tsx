import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt="logo" />
                   
                </Menu.Item>
                <Menu.Item name='Sunflower' />
                <Menu.Item>
                    <Button positive content='Crete Activity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}