import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const result = await axios.get('http://localhost:5000/api/projects');
      setProjects(result.data);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Available Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            {project.title}: {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;