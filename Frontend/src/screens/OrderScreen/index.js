import React, { useState } from 'react'
import FormField from '../../components/FormField'
import classes from './OrderScreen.module.css'
import axios from 'axios'

const OrderScreen = () => {
  const [infoMessage, setInfoMessage] = useState('Submit')
  const [loadingSubmit, setLoadingSubmit] = useState(false)

  const [formState, setFormState] = useState({
    Name: '',
    Phone: '',
    Email: '',
    Message: '',
  })

  const formConfig = {
    Name: {
      type: 'input',
      config: { type: 'text', placeholder: 'Name' },
    },
    Phone: {
      type: 'input',
      config: { type: 'text', placeholder: 'Phone' },
    },
    Email: {
      type: 'input',
      config: { type: 'text', placeholder: 'Email' },
    },
    Message: {
      type: 'input',
      config: { type: 'textare', placeholder: 'Message' },
    },
  }
  const formElements = []
  for (let key in formState) {
    formElements.push({
      id: key,
      setup: formConfig[key],
      value: formState[key],
    })
  }

  const inputChangedHandler = (event, inputIdentifier) => {
    formElements.forEach((formElement) => {
      if (inputIdentifier === formElement.id) {
        setFormState({
          ...formState,
          [inputIdentifier]: event.target.value,
        })
      }
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoadingSubmit(true)

    const { name, email, phone, message } = formState

    if (
      email === undefined ||
      email === null ||
      email === '' ||
      email.length < 1
    ) {
      setInfoMessage('Please enter your Email')
      setLoadingSubmit(false)
      return
    }
    setInfoMessage(null)

    try {
      await axios.post('/api/send', {
        name,
        email,
        phone,
        message,
      })
      console.log('Message sent')
    } catch (error) {
      console.log('Message failed to send')
    }
  }
  return (
    <div className={classes.orderScreenContainer}>
      <div className={classes.formContainer}>
        <form onSubmit={(event) => submitHandler(event)}>
          <h3>Order</h3>
          {formElements.map((formElement) => (
            <FormField
              key={formElement.id}
              type={formElement.setup.type}
              config={formElement.setup.config}
              value={formElement.value}
              changed={(event) => inputChangedHandler(event, formElement.id)}
            />
          ))}

          <div>
            <button className={classes.submitButton} type='submit'>
              Order Now
            </button>
          </div>
        </form>
      </div>
      <div className={classes.columnTwo}>
        <div className={classes.orderContent}>
          <h3>Get Out THere</h3>
          <p>Start exploring, be daring.</p>
        </div>
        <div className={classes.orderContent}>
          <h3>Time to Cruise</h3>
          <p>Order now and have it shipped within thirty days.</p>
        </div>
      </div>
    </div>
  )
}

export default OrderScreen
