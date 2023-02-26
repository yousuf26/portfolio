import React from 'react'
import { VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';

export default function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2012-2014'
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}>

        <h3 className='Vertical-timeline-element-title'>
          HighSchool,Place,Country
        </h3>
    <p>High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2016-2021'
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}>

        <h3 className='Vertical-timeline-element-title'>
          Siena College,NewYork,United States
        </h3>
    <p>Bachelor's Degree in Computer Science</p>
        </VerticalTimelineElement>


      </VerticalTimeline>
    </div>
  )
}
