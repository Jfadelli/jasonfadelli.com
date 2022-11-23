import React, { useState, useEffect } from 'react'
import { useStyles } from './contactStyle'
import { useMediaQuery } from '../../hooks/mediaQuery'
import axios from 'axios'
import * as Yup from 'yup'

import Nav from '../nav/Nav'
import mail from '../../static/mail.png'
import contactUsSchema from '../validation/contactUsSchema'

const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
}
const initialFormErrors = {
    name: '',
    email: '',
    phone: '',
    message: ''
}
export default function Contact() {
    const isHidden = useMediaQuery('(min-width: 769px)');
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(true);
    const classes = useStyles()
    //////////////// HELPERS ////////////////
    const postNewMessage = message => {
        axios.post('https://kwcsd-mail-util.herokuapp.com/api/send/jasonfadelli', message)
            .then(res => {
                if (res.data.status === 'success') {
                    alert('Message Sent.');
                } else if (res.data.status === 'fail') {
                    alert('Message failed to send.')
                }
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setFormValues(initialValues)
            })
    }
    //////////////// EVENT HANDLERS ////////////////
    const onInputChange = evt => {
        const { name, value } = evt.target
        Yup
            .reach(contactUsSchema, name)
            .validate(value)
            .then(valid => {
                setFormErrors({
                    ...formErrors,
                    [name]: ""
                })
            })
            .catch(err => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                })
            })
        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    const onSubmitHandler = evt => {
        evt.preventDefault();
        const newMessage = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            phone: formValues.phone.trim(),
            message: formValues.message.trim()
        };
        console.log('here is the message... ', newMessage)
        postNewMessage(newMessage);
    }
    //////////////// SIDE EFFECTS //////////////// 
    useEffect(() => {
        contactUsSchema.isValid(formValues).then(valid => {
            setDisabled(!valid);
        })
    }, [formValues])

    return (
        <div className={classes.contactRoot}>
            <Nav />
            <div className={classes.contactContentWrapper}>

                    <form className={classes.contactUs} onSubmit={onSubmitHandler}>
                        <label>Full Name</label>
                        <input
                            value={formValues.name}
                            onChange={onInputChange}
                            type='text'
                            // placeholder='  full name'
                            name='name'
                        />

                        <label>Email Address</label>
                        <input
                            value={formValues.email}
                            onChange={onInputChange}
                            type='email'
                            // placeholder='  email address'
                            name='email'
                        />

                        <label>Phone Number</label>
                        <input
                            value={formValues.phone}
                            onChange={onInputChange}
                            type='tel'
                            // placeholder='  phone'
                            name='phone'
                            maxLength='10'
                        />

                        <label> Message</label>
                        <textarea
                            value={formValues.message}
                            onChange={onInputChange}
                            type='text'
                            placeholder=' Type your message here'
                            name="message"
                        />
                        <button disabled={disabled} onSubmit={onSubmitHandler}> Send</button>
                        <div style={{ color: 'red' }}>{formErrors.email}</div>
                        <div style={{ color: 'red' }}>{formErrors.phone}</div>
                    </form>
                <img style={styles.container(isHidden)} className={classes.contactImg} alt="generic team working together" src={mail} />
                </div>
            </div>

    )
}
const styles = {
    container: isHidden => ({
        display: isHidden ? 'flex' : 'none',
    })
};