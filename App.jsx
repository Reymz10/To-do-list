import React from 'react';
import Task from './components/Task';
import Add from './components/Add';
import Delete from './components/delete';

function App() {
  return (
    <>
    <div className="flex flex-col items-center justify-between">
      <h1  className='text-4xl font-bold mb-4 mt-10 text-center'>To-do list</h1>
      <Task label="Learn React" />
      <Task label="Build a To-Do List" />
      <Task label="Master JavacScript" />
      <Task label="Apply For Jobs" />
      <div className='flex gap-5 items-end justify-end w-250'>
       <Add/>
       <Delete/>
     </div>
    </div>
      
     </>
    
  );
}

export default App;
