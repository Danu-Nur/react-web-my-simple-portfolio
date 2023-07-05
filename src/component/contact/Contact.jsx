/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './Contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiWhatsappLine } from 'react-icons/ri';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const data = [
  {
    id: 1,
    iconn: <MdOutlineMail className="contact__option-icon" />,
    judul: 'Email',
    isi: 'danudirwan@gmail.com',
    alamat: 'mailto:danudirwan@gmail.com'
  },
  {
    id: 2,
    iconn: <RiWhatsappLine className="contact__option-icon" />,
    judul: 'Whatsapp',
    isi: '+6283856764585',
    alamat: 'https://api.whatsapp.com/send?phone=+6283856764585'
  }
]

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eeshrtn', 'template_ikpms2g', form.current, 'dgvZqxGhwWtWfODAG')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {
            data.map(({ id, iconn, judul, isi, alamat }) => {
              return (
                <article key={id} className="contact__option">
                  {iconn}
                  <h4>{judul}</h4>
                  <h5>{isi}</h5>
                  <a href={alamat} target="_blank" >Send a Massege</a>
                </article>
              )
            })
          }


        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />

          <input type="email" name='email' placeholder='Your Email' required />

          <textarea name="message" rows="7" placeholder='Your Massage' required></textarea>

          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact