import React from 'react'
import '../../pages/style.css'
import { Container } from 'react-bootstrap'
import ContactForm from './ContactForm'

function Contactpage(): JSX.Element {
  return (
    <div className='contactbackground'>
      <Container>
        <ContactForm />
      </Container>
    </div>
  )
}

export default Contactpage
