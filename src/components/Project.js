import React from 'react';

export default function Project({ data }) {
  const { description, title, github, tech_stack: tech } = data;
  return (
    <div className="col two-third px2 project-container desc">
      <h2 className="project-title">
        {title}
      </h2>
      <p>Tech Stack - {tech}</p>
      <p>{description}</p>
      <a href={github}>Github</a>
    </div>
  );
}
