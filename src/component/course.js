import React from 'react'

const Header=(props)=>{
    return <h5 className='my-3'>{props.course.name}</h5>
}

const CourseType=({course})=>{
 return course.parts.map(part=>
 <li key={part.id}>{part.name} {part.exercises}</li>   
)
}

const TotalCourse=({course})=>{
const sum=course.parts.reduce((sum, exerciseNum)=>{
  return sum+exerciseNum.exercises; 
},0);

   return <h4 className='py-4git '>Total exercises {sum}</h4>
}



export default function Course({course}) {
    console.log(course.parts);

  return (
    <>
    <Header course={course}/>
    <CourseType course={course}/>
    <TotalCourse course={course}/>
    </>
  )
}
