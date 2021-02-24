import React from 'react';

export default function Project({ data }) {
  const { description, title, image, link } = data;
  return (
    <div className="project-container">
      <div className="col one-third px2">
        {image}
      </div>
      <div className="col two-third px2">
        <a href={link} className="no-decor">
          <h2 className="project-title">
            {title}
          </h2>
        </a>
      </div>
    </div>
  );
}
