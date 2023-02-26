import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../../styles/Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <LinkedInIcon/>
      <GitHubIcon/>
        </div>
      <p> &copy; 2022 yb26.com</p>
      
    </div>
  )
}
