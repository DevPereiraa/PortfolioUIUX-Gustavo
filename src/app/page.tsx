"use client"
import React, { useState, useEffect } from 'react';
import { projects } from '@/utils/project';
import ProjectCard from '@/components/cardProject/cardprojet';
import "./index.style.css"
import Image from 'next/image';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);
    const handleImageLoad = () => {
      setIsLoading(false);
    };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850) {
        setSelectedProject(projects[0].id);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
  };
  const handleCloseImage = () => {
    setSelectedProject(null);
  };
  
  const selectedProjectData = projects.find(project => project.id === selectedProject);

  return (

    <div className='section-1'>
      <div className='list-name'>
        <div className='genesis--'>
          <div className='genesis-box'>
            <span className='name'>Gustavo Pereira</span>
          </div>
        </div>

        <div className='genesis--'>
          <div className='genesis-box'>
            <a href="https://www.linkedin.com/in/gustavopereira-dev/" target="_blank" rel="noopener noreferrer">
              <span className='name'>Linkedin</span>
            </a>
          </div>
        </div>

        <h1 className='h1'>Projects - Gustavo Pereira</h1>
        <div className="project-card">
          <div className="section-text-box">
            <h3 className='h-tt'>Sobre</h3>
            <p className='p-tt'>Desde a concepção até a implementação, um compromisso em entregar soluções que não apenas atendem, mas também superam as expectativas.</p>
          </div>
        </div>
        <div className="portfolio">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              thumbnail={project.thumbnail}
              onClick={() => handleProjectClick(project.id)}
            />
          ))}
        </div>
      </div>
      {selectedProjectData && (
        <div className="project-images">
          <div className='fechar-button' onClick={handleCloseImage}>Close Project</div>
          <div className="images">
            {isLoading && <p>Loading project...</p>}
            {selectedProjectData.images.map((image, index) => (
              typeof image === 'string' ? (
                <Image onLoad={handleImageLoad} key={index} src={image} className='image-project' alt={`Imagem ${index + 1} do ${selectedProjectData.name}`} />
              ) : (
                <Image onLoad={handleImageLoad} key={index} src={image} className='image-project' alt={`Imagem ${index + 1} do ${selectedProjectData.name}`} />
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
