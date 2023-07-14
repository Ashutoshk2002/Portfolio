import React from 'react'
import './experience.css'
import { useContext } from 'react'
import { themeContext } from '../../Context'
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='experience' id='Experience'>
      <div className="achievement">
        <div className="circle"  style={{color: darkMode?'var(--orange)':''}}>2+</div>
        <span style={{color: darkMode?'white':''}}>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle"  style={{color: darkMode?'var(--orange)':''}}>15+</div>
        <span style={{color: darkMode?'white':''}}>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle"  style={{color: darkMode?'var(--orange)':''}}>5+</div>
        <span style={{color: darkMode?'white':''}}>Deployed</span>
        <span>Projects</span>
      </div>
    </div>
  )
}

export default Experience
