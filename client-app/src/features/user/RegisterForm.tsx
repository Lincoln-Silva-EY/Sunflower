import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Header, Image } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useStore } from "../../app/stores/store";
import * as Yup from 'yup';
import ValidationErrors from "../errors/ValidationErrors";
import modalStore from "../../app/stores/modalStore";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

export default observer(function RegisterForm() {
    const { userStore, modalStore } = useStore();
    return (
        <Formik
            initialValues={{ displayName: '', username: '', email: '', password: '', error: null }}
            onSubmit={(values, { setErrors }) => userStore.register(values).catch(error =>
                setErrors({ error }))}
            validationSchema={Yup.object({
                displayname: Yup.string().required(),
                username: Yup.string().required(),
                email: Yup.string().required().email(),
                password: Yup.string().required(),
            })}
        >
            {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (


                <Form className="ui form error" onSubmit={handleSubmit} autoComplete='off'>
                    <Header textAlign="center">
                        <Image src='/assets/logo.png' alt='logo'
                            style={{ width: '80px', height: "80px", marginTop: '2vh' }}
                        />
                        <Header as='h3' color="black" style={{ marginBottom: '3vh' }}>
                            Create a new Account
                        </Header>
                    </Header>
                    <MyTextInput name="displayname" placeholder="Display Name" />
                    <MyTextInput name="username" placeholder="Username" />
                    <MyTextInput name="email" placeholder="Email" />
                    <MyTextInput name="password" placeholder="Password" type='password' />
                    <ErrorMessage
                        name="error" render={() =>
                            <ValidationErrors errors={errors.error} />}
                    />
                    <Header align='center'>
                        <Button
                            style={{ marginTop: '4vh' }}
                            loading={isSubmitting}
                            positive
                            content='Register'
                            type="submit"
                            color="yellow"
                            size="large"
                            disabled={!isValid || !dirty || isSubmitting}
                            fluid
                        />
                        <Header
                            style={{ marginTop: '3.5vh', marginBotom: '4vh', cursor: 'pointer' }}
                            as='h5'
                            content='Already have an Account'
                            onClick={() => modalStore.openModal(<LoginForm />)}
                            textAlign="center"
                            color="yellow" />
                    </Header>
                </Form>
            )}
        </Formik>
    )
})