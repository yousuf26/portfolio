import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Home.css'

export default function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, I am Yousuf</h2>
        <div className='prompt'>
            <p>A Salesforce/FullStack Developer</p>
            <a href='https://github.com/yousuf26' target="_blank"><GitHubIcon/></a>
            <EmailIcon/>
            <a href='https://www.linkedin.com/in/yousuf-borna/' target="_blank"><LinkedInIcon/></a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
            <li className='item'>
                <h2>Front-End</h2>
                <span>HTML5, CSS3, JavaScript, React, Material UI, Bootstrap 3</span>
            </li>
            <li className='item'>
                <h2>Back-End</h2>
                <span>Node.js, FastAPI, Linux, Git&Github, Restful API Development</span>
            </li>
            <li className='item'>
                <h2>Salesforce</h2>
                <span>Apex, SOQL, SOSL, Lightning Web Component(LWC), Apex Trigger, Salesforce Flow, Data Loader, Salesforce Integration </span>
            </li>
            <li className='item'>
                <h2>Professional Certifications</h2>
                <span>
                Salesforce Certified Administrator, Salesforce Certified App Builder, Apex Specialist SuperBadge
                  </span>
            </li>
        </ol>
      </div>
    </div>
  )
}
