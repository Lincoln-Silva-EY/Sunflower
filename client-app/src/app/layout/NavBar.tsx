import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

interface Props {
    openForm: () => void;
}

export default function NavBar({openForm}: Props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header style={{marginLeft: '-6vw'}}>
                    <img src='/assets/icon.png' alt="logo" style={{marginRight: '1vw'}}/>
                    Sunflower
                </Menu.Item>
                <Menu.Item name='Activities' />
                <Menu.Item>
                    <Button onClick={openForm} positive content='Crete Activity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}