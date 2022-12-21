import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about">
      <div className="aboutTitle">
        <h1>About Us</h1>
      </div>
      <div className="aboutItems">
        <div className="aboutImage">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>
        <div className="aboutContent">
          <p>
            Blogger is a content publishing platform where people can share
            their stories and insights. It is one of the best free blog
            platforms which allows users to post their original ideas and
            viewpoints and share them with member readers or with the broader
            public. This blogging platform also helps you find compelling ideas,
            knowledge, and perspectives
          </p>
          <br />
          <br />
          <br />
          The best ideas can change who we are. Blogger is where those ideas
          take shape, take off, and spark powerful conversations. We’re an open
          platform where over 100 million readers come to find insightful and
          dynamic thinking. Here, expert and undiscovered voices alike dive into
          the heart of any topic and bring new ideas to the surface. Our purpose
          is to spread these ideas and deepen understanding of the world. We’re
          creating a new model for digital publishing. One that supports nuance,
          complexity, and vital storytelling without giving in to the incentives
          of advertising. It’s an environment that’s open to everyone but
          promotes substance and authenticity. And it’s where deeper connections
          forged between readers and writers can lead to discovery and growth.
          Together with millions of collaborators, we’re building a trusted and
          vibrant ecosystem fueled by important ideas and the people who think
          about them.
        </div>
      </div>
    </div>
  );
}
