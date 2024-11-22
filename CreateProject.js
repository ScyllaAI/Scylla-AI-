import React, { useState } from 'react';
import axios from 'axios';

const CreateProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');
  const [paymentSchedule, setPaymentSchedule] = useState('');
  const [numeration, setNumeration] = useState('');

  const createProject = async () => {
    try {
      await axios.post('http://localhost:5000/api/projects', {
        title,
        description,
        category,
        duration,
        paymentSchedule,
        numeration
      });
      alert('Project created successfully!');
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <div>
      <h2>Create New Project</h2>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Project Title" 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Project Description"
      />
      <input 
        type="text" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        placeholder="Category" 
      />
      <input 
        type="text" 
        value={duration} 
        onChange={(e) => setDuration(e.target.value)} 
        placeholder="Duration"
      />
      <input 
        type="text" 
        value={paymentSchedule} 
        onChange={(e) => setPaymentSchedule(e.target.value)} 
        placeholder="Payment Schedule"
      />
      <input 
        type="number" 
        value={numeration} 
        onChange={(e) => setNumeration(e.target.value)} 
        placeholder="Numeration"
      />
      <button onClick={createProject}>Create Project</button>
    </div>
  );
};

export default CreateProject;