import React, { useRef, useEffect } from 'react';
import './home.css';

function BigButton({ text, onClick }) {
  return (
      <button
          onClick={onClick}
          style={{
              padding: '20px 40px',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#333',              // Black text color initially
              backgroundColor: '#ffffff',  // White background initially
              border: '2px solid #ccc',    // Light grey border
              borderRadius: '10px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease',
          }}
          onMouseOver={(e) => {
              e.target.style.backgroundColor = '#333'; // Dark grey background on hover
              e.target.style.color = '#ffffff';         // White text on hover
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0px 6px 15px rgba(0, 0, 0, 0.3)';
          }}
          onMouseOut={(e) => {
              e.target.style.backgroundColor = '#ffffff'; 
              e.target.style.color = '#333';               
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
          }}
      >
          {text}
      </button>
  );
}

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      reverseVideo();
    }
  };

  const reverseVideo = () => {
    const video = videoRef.current;
    const duration = video.duration;
    let reverseTime = duration;

    const reverseInterval = setInterval(() => {
      if (reverseTime > 0) {
        reverseTime -= 0.05;
        video.currentTime = reverseTime;
      } else {
        clearInterval(reverseInterval);
        video.currentTime = 0;
        video.play();
      }
    }, 16);
  };

  return (
    <section className="video-background-section">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="background-video"
        onEnded={handleVideoEnd} 
      >
        <source src="home_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlay">
        <div className="left-section">
          <img src="./acm_logo_white.png" alt="ACM Logo" />
          <h1>UPES ACM Chapter</h1>
          <p>Presenting to you the student chapter of Association for Computing Machinery</p>
          <br />
          <br />
          <BigButton 
            text="JOIN NOW ->" 
            onClick={() => window.open('https://konfhub.com/checkout/upesacm-acmw-registration?ticketId=8618', '_blank')}
          />
        </div>
        <div className="right-section">
          <img src="Group2.png" alt="Valo" className="right-image" />
        </div>
      </div>
    </section>
  );
}
