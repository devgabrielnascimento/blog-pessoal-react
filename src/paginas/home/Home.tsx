import './Home.css';
import React, { useState, useEffect } from 'react';

interface propsHome {
  taskTitle: string;
  taskDescription: string;
  taskID: number;
}



function Home(props: propsHome) {
  const [completed, setCompleted] = useState(false);
  const [task, setTask]= useState('');

  useEffect(() => {
    if (completed) {
      setTask('Congratulations! You finish the task!');
    }
  }, [completed]);

  return (
<>
      <h2>{props.taskTitle}</h2>
      <p>{props.taskDescription}</p>
      <p>{props.taskID}</p>
      <button onClick={() => setCompleted(true)}>Finish</button>
      <h3>{task}</h3>
</>    
  );
}

export default Home;