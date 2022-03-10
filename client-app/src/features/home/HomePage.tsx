import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store';

export default function HomePage() {
    const { userStore } = useStore();
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image src='/assets/logo.png' alt='logo' style={{ marginBottom: 12, width: '110px', height: "110px" }} />
                    Sunflower
                </Header>
                {userStore.IsLoggedIn ? (
                    <>
                        <Header inverted as='h2' content='Welcome to Sunflower' />
                        <Button as={Link} to='/activities' size='huge' style={{ marginTop: "3vh" }} inverted>
                            Go to Activities
                        </Button>
                    </>
                ) : (
                    <>
                        <Button as={Link} to='/login' size='huge' style={{ width: '10vw', marginTop: "3vh" }} inverted>
                            Login
                        </Button>
                        <Button size='huge' style={{ width: '10vw' }} inverted>
                            Register
                        </Button>
                    </>
                )}
            </Container>
        </Segment>
    )
}