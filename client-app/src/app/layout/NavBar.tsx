import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Container, Dropdown, Image, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default observer(function NavBar() {
    const { userStore: { user, logout } } = useStore();

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src='/assets/icon.png' alt="logo" style={{ marginRight: '1vw' }} />
                    Sunflower
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name='Activities' />
                <Menu.Item as={NavLink} to='/errors' name='Errors' />
                <Menu.Item>
                    <Button as={NavLink} to='/createActivity' positive content='Crete Activity' />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Image src={user?.image || '/assets/user.png'} avatar spaced='right' />
                    <Dropdown pointing='top left' text={user?.displayName} style={{fontWeight:'900'}}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profile/${user?.username}`} text='My Profile' icon='user circle' />
                            <Dropdown.Item onClick={logout} text='Logout' icon='frown outline' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
    )
})