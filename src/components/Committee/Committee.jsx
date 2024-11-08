import React, { useState } from 'react';
import './Committee.css';

const Committee = () => {
  const [activeCommittee, setActiveCommittee] = useState('content1');

  const handleMouseOver = (id) => {
    setActiveCommittee(id);
  };

  const committees = [
    {
      id: 1,
      name: 'Technical',
      description:
        "The Chapter's backbone, the Technical Team not only designs the websites and apps for the Chapter, but also propagates the culture of coding across entire UPES and works on projects that help students learn.",
    },
    {
      id: 2,
      name: 'Events',
      description:
        'The brain of the chapter, organizes a variety of events, our vivacious team. Through creative concepts and flawless event execution, the Events team makes sure that attendees enjoy every minute from conception to conclusion.',
    },
    {
      id: 3,
      name: 'Public Relations and Sponsorships',
      description:
        'This committee is the face of the chapter. The PR and Sponsorship team puts in immeasurable efforts to secure sponsorships for the events, responds to inquiries, and tries to increase the chapter’s presence.',
    },
    {
      id: 4,
      name: 'Design and VFX',
      description:
        'This distinguished committee is the creative house of the chapter. This team always leads the forefront by making breathtaking videos and developing visually appealing graphic material.',
    },
    {
      id: 5,
      name: 'Logistics',
      description:
        'The Logistics committee works behind the scenes to ensure the smooth functioning of every event or activity of the chapter. This team provides back-end support to every other committee by managing all the arrangements flawlessly.',
    },
    {
      id: 6,
      name: 'Corporate Social Responsibility',
      description:
        'Being the reflection of the chapter’s ethics and deeds, the CSR committee curates activities that help contribute to the upliftment of society. It promotes education and vocational skills among young children.',
    },
    {
      id: 7,
      name: 'Editorial',
      description:
        "The Editorial Committee is the brainchild behind the Chapter's all formal communications, blogs, social media content, and documents all the daily proceedings. This team gives life to everything you see or read about UPES ACM.",
    },
    {
      id: 8,
      name: 'Social Media',
      description:
        'The Social Media Committee is responsible for innovatively using social media platforms to connect and engage members, grow the membership base, and come up with strategies to increase the chapter’s social media presence.',
    },
  ];

  return (
    <main>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <div className="container3">
          <div className="icon">
            {committees.map((committee) => (
              <div
                key={committee.id}
                className={`imgBx ${activeCommittee === `content${committee.id}` ? 'active' : ''}`}
                style={{ '--i': committee.id }}
                onMouseOver={() => handleMouseOver(`content${committee.id}`)}
              >
                <img
                  src={`Committees/${committee.id}.png`}
                  alt={`Committee ${committee.name}`}
                />
              </div>
            ))}
          </div>



          <div className="content">
            {committees.map((committee) => (
              <div
                key={committee.id}
                className={`contentBx ${activeCommittee === `content${committee.id}` ? 'active' : ''}`}
                id={`content${committee.id}`}
              >
                <div className="card">
                  <div className="textBx">
                    <h2>
                      {committee.name}
                      <br />
                      <span>{committee.description}</span>
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Committee;
