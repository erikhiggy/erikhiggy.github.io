import React from 'react';
import Project from "../components/Project"
import Nav from "../components/Nav"
import { Helmet } from "react-helmet"
import projects from "../staticData/projectData";

export default function Projects() {
    return (
      <>
        <Helmet>
          <title>Erik Higginbotham: Projects</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="font-awesome/css/all.css" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Play&display=swap" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&family=Montserrat:wght@700;800&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap" rel="stylesheet" />
        </Helmet>
        <Nav />
        <header className="splash-sm border-bottom">
          <div className="projects-container">
            <div>
              <h1 className="page-title">
                Projects
              </h1>
              <h4 className="projects-subtitle">
                What I work on in my free time
              </h4>
            </div>
          </div>
        </header>
        <main className="container">
          {projects.data.map((datum) => {
            return (
              <Project data={datum} />
            )
          })}
        </main>
      </>
    );
}
