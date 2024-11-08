import React, { useRef, useEffect } from 'react';
import './home.css';

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
        </div>
        <div className="right-section">
          <img src="group.png" alt="Valo" className="right-image" />
        </div>
      </div>
    </section>
  );
}
