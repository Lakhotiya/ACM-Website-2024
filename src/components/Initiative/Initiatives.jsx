import React from 'react';
import SimpleCard from './initiative_card.jsx';
import './SimpleCard.css';

const imagez = ["src/components/Initiative/21days.jpeg", "src/components/Initiative/img1.jpg", "src/components/Initiative/img3.jpg"]

export default function Initiatives() {
    return (
        <div
            style={{
              display: 'grid',
              gridTemplateRows: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '40px',
              justifyContent: 'center',
              padding: '20px',
              maxWidth: '1200px', // Set maximum width for the grid
              margin: '0 auto', // Center the grid horizontally
              overflow: 'auto',
                 
            }}
        >
            <SimpleCard
                title="21 Days of Code"
                description="We launched 21 Days of Code to promote the environment for competitive programming and instil coding as second nature and a daily habit for 21 regular days."
                images={imagez}
                
            />
            <SimpleCard
                title="21 Days of Code"
                description="We launched 21 Days of Code to promote the environment for competitive programming and instil coding as second nature and a daily habit for 21 regular days."
                images={imagez}
                
            />
            <SimpleCard
                title="21 Days of Code"
                description="We launched 21 Days of Code to promote the environment for competitive programming and instil coding as second nature and a daily habit for 21 regular days."
                images={imagez}
                
            />
            <SimpleCard
                title="21 Days of Code"
                description="We launched 21 Days of Code to promote the environment for competitive programming and instil coding as second nature and a daily habit for 21 regular days."
                images={imagez}
                
            />

        </div>
    );
}
