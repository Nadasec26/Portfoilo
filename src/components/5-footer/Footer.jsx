import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <footer className='flex justify-between p-4'>
      <ul className='flex gap-4'>
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Speaking</a></li>
        <li><a href="">Uses</a></li>
      </ul>
      <p>© 2024 Spencer Sharp. All rights reserved.</p>
    </footer>
  )
}
