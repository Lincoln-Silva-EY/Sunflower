import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextAreaInput from "../../../app/common/form/MyTextAreaInput";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryOptions } from "../../../app/common/options/categoryOptions";
import MyDateInput from "../../../app/common/form/MyDateInput";
import { Activity } from "../../../app/models/activity";
import { v4 as uuid } from 'uuid';

export default observer(function ActivityForm() {
    const history = useHistory();
    const { activityStore } = useStore();
    const { selectedActivity, createActivity, updateActivity, loading, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams<{ id: string }>();

    const [activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        category: '',
        description: '',
        date: null,
        city: '',
        venue: ''
    });

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required'),
        category: Yup.string().required('Category is required'),
        date: Yup.string().required('Date is required').nullable(),
        city: Yup.string().required('City is required'),
        venue: Yup.string().required('Venue is required')
    })

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity]);

    function handleFormSubmit(activity: Activity) {
        if (activity.id.length === 0) {
            let newActivity = {
                ...activity,
                id: uuid()
            };
            createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`))
        } else {
            updateActivity(activity).then(() => history.push(`/activities/${activity.id}`))
        }
    }

    return (
        <div style={{ marginTop: "10vh" }}>
            <Segment clearing>
                <Header content='Activity Details' sub color="teal" />
                <Formik
                    validationSchema={validationSchema}
                    enableReinitialize
                    initialValues={activity}
                    onSubmit={values => handleFormSubmit(values)}>
                    {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                        <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                            <MyTextInput placeholder='Title' name='title' />
                            <MyTextAreaInput rows={3} placeholder='Description' name='description' />
                            <MySelectInput options={categoryOptions} placeholder='Category' name='category' />
                            <MyDateInput
                                placeholderText='Date'
                                name='date'
                                showTimeSelect
                                timeCaption="time"
                                dateFormat={'d MMMM, yyyy  h: mm aa'} />
                            <Header content='Location Details' sub color="teal" />
                            <MyTextInput placeholder='City' name='city' />
                            <MyTextInput placeholder='Venue' name='venue' />
                            <Button 
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading} floated='right' 
                            positive type='submit' content='Submit' />
                            <Button as={Link} to='/activities' floated='right' type='button' content='Cancel' />
                        </Form>
                    )}
                </Formik>
            </Segment>
        </div>
    )
})

