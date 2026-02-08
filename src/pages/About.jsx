import React from 'react'
import { appConfig } from '../components/config/appConfig'

const About = () => {
  return (
    <section>
      <h1 className='text-green-400'>About us </h1>
      <title>{appConfig.company + "  om os"}

      </title>
    </section>
  )
}

export default About