import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] 1st useEffect')
    const timer = 
     setTimeout(() => {
      alert('Saved to cloud!')
    }, 1000)
    return (() => {
      clearTimeout(timer)
      console.log('[Cockpit.js] cleanup using 1st useEffect')
    })
  }, [])

  useEffect(()=>{
    console.log('[Cockpit.js] 2nd useEffect')
    console.log('[Cockpit.js] cleanup using 2nd useEffect')
  })

  let assignedClasses = [];

  let btnClass = null
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <p className={assignedClasses.join(' ')}>This is a sample text for practicing styling</p>
      <button className={btnClass} onClick={props.clicked}>Toggle persons</button>
    </div>
  );
}

export default React.memo(cockpit);