import React from 'react'
import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../../public/animation/done.json'
import contactAnimation from '../../../public/animation/contact_us.json'

export default function Contact() {
  const [state, handleSubmit] = useForm("xkgggozd");
  return (
    <section className="contact-us">
      <h1 className='text-4xl mb-4'>
        <span className='icon-envelope mr-4 text-3xl' />
        Contact us
      </h1>
      <p className='mb-8 leading-7'>Contact us for more information and Get notified when I publish something new.</p>
      <div className="flex justify-between">
        <form onSubmit={handleSubmit}>
            <div className='flex items-center'>
            <label htmlFor="email" className="mb-2 text-sm font-medium">Email Address :</label>
            <input required type="email" name='email' id="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className='mt-6 flex items-center'>
            <label htmlFor="message" className="mb-2 text-sm font-medium">Your Message :</label>
            <textarea required name="message" id="message" ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button type="submit" disabled={state.submitting} className='submit py-3 px-8 text-center text-lg rounded mt-7'>
              {state.submitting ? "submitting..." : "submit"}
            </button>
            {state.succeeded && (<h1 className='flex text-3xl mt-10'>
              <Lottie style={{height:44}} loop={false}
                animationData={doneAnimation}
                aria-aria-labelledby="use lottie animation"
              />
              Your message has been sent successfully 👌</h1>)}
        </form>
        <div className='animation'>
        <Lottie style={{height:300}}
                animationData={contactAnimation}
                aria-aria-labelledby="use lottie animation"
              />
        </div>
      </div>
    </section>
  )
}
