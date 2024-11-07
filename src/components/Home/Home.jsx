import React, { useRef, useEffect } from 'react';
import './home.css';

export default function Home() {
  const videoRef = useRef(null); // Create a reference to the video element

  const handleVideoEnd = () => {
    if (videoRef.current) {
      // Start the reverse playback
      reverseVideo();
    }
  };

  const reverseVideo = () => {
    const video = videoRef.current;
    const duration = video.duration;
    let reverseTime = duration;

    const reverseInterval = setInterval(() => {
      if (reverseTime > 0) {
        reverseTime -= 0.05; // Adjust this to change the reverse speed
        video.currentTime = reverseTime;
      } else {
        clearInterval(reverseInterval);
        // After finishing reverse, restart the video normally
        video.currentTime = 0;
        video.play();
      }
    }, 16); // Run every 16ms (~60fps)
  };

  return (
    <section className="video-background-section">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="background-video"
        onEnded={handleVideoEnd} // Trigger reverse playback on video end
      >
        <source src="home_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlay">
        <img src="./acm_logo_white.png" alt="ACM Logo" />
        <h1>UPES ACM Chapter</h1>
        <p>Presenting to you the student chapter of Association for Computing Machinery</p>
      </div>
    </section>
  );
}
