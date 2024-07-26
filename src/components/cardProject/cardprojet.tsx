'use client'
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import "./index.style.css"

interface ProjectCardProps {
  name: string;
  description: string;
  thumbnail: string | StaticImageData;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, thumbnail, onClick }) => {

  const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleLoad = () => {
      setIsLoading(false);
    };

  const isStaticImage = (image: string | StaticImageData): image is StaticImageData => {
    return (image as StaticImageData).src !== undefined;
  };

  return (
    <>
      <div className="project-card" onClick={onClick}>
        {isStaticImage(thumbnail) ? (
          <Image src={thumbnail} alt={name} className="thumbnail" width={300} height={200} />
        ) : (
          <Image src={thumbnail} alt={name} className="thumbnail" />
        )}
        <div className="section-text-box">
          <h3 className='h-tt'>{name}</h3>
          <p className='p-tt'>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
