import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Label, Image, Segment, SegmentGroup, ButtonGroup } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInput";
import modalStore from "../../app/stores/modalStore";
import { useStore } from "../../app/stores/store";
import RegisterForm from "./RegisterForm";

export default observer(function LoginForm() {
    const { userStore, modalStore } = useStore();
    return (
        <Formik
            initialValues={{ email: '', password: '', error: null }}
            onSubmit={(values, { setErrors }) => userStore.login(values).catch(error =>
                setErrors({ error: 'Invalid email or password' }))}
        >
            {({ handleSubmit, isSubmitting, errors }) => (


                <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h3' color="black" textAlign="center">
                        <Image src='/assets/logo.png' alt='logo'
                            style={{ marginBottom: '2vh', width: '80px', height: "80px", marginTop: '2vh' }} />
                        <br />
                        Login in Activities
                    </Header>
                    <MyTextInput name="email" placeholder="Email" />
                    <MyTextInput name="password" placeholder="Password" type='password' />
                    <Header align='center'>
                        <ErrorMessage
                            name="error" render={() =>
                                <Label
                                    size="medium"
                                    style={{ marginTop: '0.5vh', marginBottom: '0.5vh', textAlign: 'center', width: '80%' }}
                                    basic color="red"
                                    content={errors.error} />}
                        />
                    </Header>
                    <Header align='center'>
                        <Button
                            style={{ marginTop: '3vh' }}
                            loading={isSubmitting}
                            positive
                            content='Login'
                            type="submit"
                            color="yellow"
                            size="large"
                            fluid />

                        <Header style={{ marginTop: '3.5vh', cursor: 'pointer'}}
                            as='h5'
                            textAlign="center"
                            content='Forget your Password'
                            color="yellow"
                        />

                        <Button
                            onClick={() => modalStore.openModal(<RegisterForm />)}
                            style={{ marginTop: '2vh', marginBottom: '2vh', width: '12vw' }}
                            content='Register'
                            size="large" />
                    </Header>
                </Form>
            )}
        </Formik>
    )
})