import React, { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'


import { useMediaQuery } from '../../hooks/mediaQuery'

import mail from '../../static/mail.png'

import contactUsSchema from '../validation/contactUsSchema'
import { useStyles } from '../../style/style'

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
    const isHidden = useMediaQuery('(min-width: 1023px)');
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(true);
    const classes = useStyles()

    //////////////// HELPERS ////////////////
    const postNewMessage = message => {
        axios.post('https://kwcsd-mail-util.herokuapp.com/api/sendJF', message)
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

    const shadowBox = {
        display: 'flex',
        justifyContent:'center',
        width: '420px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 5px 10px 15px',
        borderRadius: '6px',
        padding: '10px',
    
    }
    return (
        <div className={classes.contentWrapper}>
            <div className={classes.flexCol} >
                <div style={{alignItems:'center'}} className={classes.flexRow}>
                    <div style={shadowBox}>
                        <form className={classes.contactUs} style={rowStyles.container(isHidden)} onSubmit={onSubmitHandler}>
                            <label>Full Name</label>
                            <input
                                value={formValues.name}
                                onChange={onInputChange}
                                type='text'
                                placeholder='  full name'
                                name='name'
                            />

                            <label>Email Address</label>
                            <input
                                value={formValues.email}
                                onChange={onInputChange}
                                type='email'
                                placeholder='  email address'
                                name='email'
                            />

                            <label>Phone Number</label>
                            <input
                                value={formValues.phone}
                                onChange={onInputChange}
                                type='tel'
                                placeholder='  phone'
                                name='phone'
                            />

                            <label> Message</label>
                            <textarea
                                value={formValues.message}
                                onChange={onInputChange}
                                type='text'
                                placeholder=' type your message here'
                                name="message"
                            />

                            <button disabled={disabled} onSubmit={onSubmitHandler}> Send</button>
                        </form>
                    </div>
                    <img style={styles.container(isHidden)} className={classes.contactImg} alt="generic team working together" src={mail} />
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    )
}

const styles = {
    container: isHidden => ({
        display: isHidden ? 'flex' : 'none',
    })

};
const rowStyles = {
    container: isHidden => ({
        // minWidth: isHidden ? '100%':'200px',
        // maxWidth: isHidden ? '1024':'100%'
    })
};
