import React from "react"
import { Helmet } from "react-helmet";
import Nav from "../components/Nav"
import "../styles/main.css";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Erik Higginbotham</title>
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
      <header className="splash border-bottom">
        <div className="center">
          <a href="/">
            <img alt="avatar" className="avatar" src="images/me.jpg" />
          </a>
          <div>
            <a className="no-decor" href="/">
              <h1 className="name-header">
                Erik Higginbotham
              </h1>
            </a>
          </div>
          <h2 className="subtitle">
            Software Engineer living in Atlanta, Georgia
          </h2>
        </div>
      </header>
      <main className="container">
			<div className="content">
				<div className="col about-me">
					<h3>
						About me
					</h3>
					<p className="desc">
						Erik Higginbotham loves programming, sports (especially college football and golf),
						cooking and trying new foods. He currently works at
						The Home Depot in Atlanta, GA as a Sr. Software Engineer. He is passionate
						about writing clean, performant code with lots of tests. Although web development is his day job,
						he is interested in low-level systems programming, frequently dabbling in Rust and Go. Explore some
						of his projects <a href="https://github.com/erikhiggy">here</a>.
					</p>
				</div>
				<div className="col contact">
					<h3>
						Contact
					</h3>
					<div className="icons">
						<a className="no-decor" href="https://github.com/erikhiggy">
							<i className="fab fa-fw fa-2x fa-github"></i>
							<span className="contact-links">GitHub</span>
						</a>
						<a className="no-decor" href="https://linkedin/in/erikhigginbotham">
							<i className="fab fa-fw fa-2x fa-linkedin-in"></i>
							<span className="contact-links">LinkedIn</span>
						</a>
						<a className="no-decor" href="mailto:erik96@me.com">
							<i className="fas fa-fw fa-2x fa-envelope-square"></i>
							<span className="contact-links">Email</span>
						</a>
					</div>
				</div>
			</div>
		</main>
    </>
  )
}
