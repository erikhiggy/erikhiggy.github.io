import React from 'react';

export default function Project({ data }) {
  const { description, title, links, tech } = data;
  const renderLinks = ({ links }) => {
    if (links.length > 1) {
      return (
        <>
          <a style={{ paddingRight: 5 }} href={links[0]}>Frontend Code</a>
          <a href={links[1]}>Backend Code</a>
        </>
      )
    }
    return (
      <a href={links[0]}>Code</a>
    )
  };
  return (
    <div className="col two-third px2 project-container">
      <h2 className="project-title">
        {title}
      </h2>
      <p>Tech Stack - {tech}</p>
      <p>{description}</p>
      {renderLinks({ links })}
    </div>
  );
}
