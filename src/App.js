import React from 'react';
import './App.css';

function App() {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  let clone=course.parts
  return (
  <>
<div className="app m-auto my-5">

    <h1 className='text text-center'>{course.name}</h1>
    <ul>
        {clone.map(part => 
          <li key={part.id}>
            {part.name+' '+part.exercises} 
          </li>
        )}
      </ul>

      <h4>
        <strong>Total of {
            clone.reduce((sum,exercise)=>{
           return sum+=exercise.exercises
            },0)
          } exercises
        </strong>
        </h4>

  


</div>

  </>)
}

export default App;
