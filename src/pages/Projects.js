import React from 'react'
import ProjectItem from '../components/projectItem'
import todo from '../assets/todo.png'
import '../styles/Projects.css'

export default function Projects() {
  return (
    <div className='projects'>
      <h1>My personal projects</h1>
      <div className='projectList'>
      <ProjectItem name="To do List" image={todo}/>
      <ProjectItem name="Data Visualization"/>
      </div>
    </div>
  )
}
