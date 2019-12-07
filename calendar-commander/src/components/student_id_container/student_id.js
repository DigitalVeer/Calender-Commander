import React from 'react';
import './student_id.css';
import submit_button from './submit_triangle.png';

function student_id() {
  return (
    <div className="student_id">
      <h2>Enter your Student ID</h2>
      <form action="/requirements-aquisiton.html">
        <input type="text" name="SID" placeholder="8 digits" pattern=".{8, 8}" maxlength="8"/>
        <button type="submit"><img src={submit_button} /></button>
      </form>
    </div>
  );
}

export default student_id;