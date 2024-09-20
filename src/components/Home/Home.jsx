import React, { useRef } from 'react';
import * as Ladda from 'ladda';
import 'ladda/dist/ladda.min.css'; 
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const DesignerButton = ({ text }) => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    const laddaInstance = Ladda.create(buttonRef.current);

    laddaInstance.start();

    setTimeout(() => {
      laddaInstance.stop(); 
      window.location.href = 'https://konfhub.com/checkout/upesacm-acmw-registration?ticketId=8618';
    }, 1500); 

  };

  return (
    <button
      ref={buttonRef}
      className="ladda-button"
      data-style="expand-left"
      data-color="blue" // Use predefined color
      size="Extra Large"
      onClick={handleClick}
    >
      <span className="ladda-label">{text}</span>
    </button>
  );
};

export default function Home() {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        width: '100vw', 
        margin: 0, 
        padding: 0, 
        backgroundColor: '#271549', // Example background color
      }}
    >
      <div 
        style={{
          display: 'flex',
          alignItems: 'center', 
          gap: '2rem', 
          textAlign :'start', // Center text inside the container
        }}
      >
        <div style={{ paddingRight: '20vw', paddingBottom: '29vh',paddingTop : '20vh' }}>
          <Typography variant='h1' sx={{ color: '#F5F5DC', fontSize: '3.7rem', fontFamily: 'Garamond' }}>
            Welcome To
          </Typography>
          <br />
          <Typography variant='h1' sx={{ color: '#AAAA84', fontSize: '4rem', fontFamily: 'Poppins',fontWeight: 'bold' }}>
            UPES ACM
          </Typography>
          <br /><br />
          <Typography variant='h4' sx={{ color: 'white', fontFamily: 'Libre Baskerville' }}>
            The BEST Student Chapter!!!
          </Typography>
          <br />
          <Typography variant='h4' sx={{ color: 'white', fontFamily: 'Libre Baskerville' }}>
            is now at UPES
          </Typography>
          <br />
          <DesignerButton text={"Join Now !!!"} />
          {/* <Button variant="text" size='large'>Join Now!!</Button> */}
        </div>
        <div>
          <img 
            src="src/assets/pankaj.jpg" 
            alt="UPES ACM"
            style={{
              height: '90vh', 
              width: '40vw', 
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </div>
  );
}