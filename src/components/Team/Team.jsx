import React from "react";
import Card from "./Card";
import './Team.css'
import TextSpan from "./TextSpan";
const BoardofExecutives = [
  {
    name: "Sarthak Rathore",
    position: "Member",
    image: "src/assets/Sarthak.jpg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Vaishnavi Srivastava",
    position: "Member",
    image: "src/assets/vaishnavi.jpg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Rishika Bhalla",
    position: "Member",
    image: "src/assets/RishikaImg.jpeg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Aditya Pilani",
    position: "Member",
    image: "src/assets/adityapilani.jpg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Bharat Anand",
    position: "Member",
    image: "src/assets/bharat.jpeg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Rohit Gupta",
    position: "Member",
    image: "src/assets/rohit.jpg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Chetany Bhardwaj",
    position: "Member",
    image: "src/assets/chetany.jpg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Aadish Bansal",
    position: "Member",
    image: "src/assets/adish.jpg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Dhroov Sharma",
    position: "Member",
    image: "src/assets/dhroov.jpg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Ayush Pradhan",
    position: "Member",
    image: "src/assets/ayush.jpg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
];
const OfficeBearers = [
  {
    name: "Mr.Pankaj Badoni",
    position: "Faculty Coordinator",
    image: "src/assets/pankaj.jpg",
    variable: "",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Utkarsh Rastogi",
    position: "Chairperson",
    image: "src/assets/utkarsh.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Siddhant Kwatra",
    position: "Vice-Chairperson",
    image: "src/assets/siddhant.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Kavya Chugh",
    position: "Treasurer",
    image: "src/assets/Kavya.jpeg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Sahil Bathla",
    position: "Secretary",
    image: "src/assets/sahil.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Shradha Mudgil",
    position: "Joint Secretary",
    image: "src/assets/shradha.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Md Arslan",
    position: "Technical Head",
    image: "src/assets/arslan.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Aarohi Sharma",
    position: "Event Head",
    image: "src/assets/aarohisharma.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },

  {
    name: "Lavanya Arora",
    position: "PR & Sponsorship Head",
    image: "src/assets/lavanya.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },

  {
    name: "Gurmehr Singh Gulati",
    position: "Joint PR & Sponsorship Head",
    image: "src/assets/gurmehr.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Aarohi Saxena",
    position: "Social Media Head",
    image: "src/assets/aarohisaxena.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Diya Rana",
    position: "Editorial Head",
    image: "src/assets/harvijay.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Harvijay Singh Virk",
    position: "CSR Head",
    image: "src/assets/harvijay.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Rajdeep Singh Sidhu",
    position: "Logistics Head",
    image: "src/assets/rajdeep.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Supragya Gandotra",
    position: "Design Head",
    image: "src/assets/supragya.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Milan Singhal",
    position: "Joint Design Head",
    image: "src/assets/milan.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Anchit Das",
    position: "VFX Head",
    image: "src/assets/anchit.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
];

function Team() {
  const sentence  = "Meet our team".split("");

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="heading">
           <h1>{sentence.map((letter,ind)=>{
              return(
                <TextSpan className ="bumpy" key={ind} >
                {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              )
            })}
            </h1>
            {/* <h2>XYZ</h2> */}
          </div>

          <div className="card-container">
            <h2>Board of Executives</h2>

            <div className="wrapper-div">
              {BoardofExecutives.map((executive) => (
                <Card
                name={executive.name.split("").map((letter,ind1)=>{
                  return(
                    <TextSpan className ="bumpy" key={ind1}>
                    {letter === " " ? "\u00A0" : letter}
                    </TextSpan>
                  )
                  })}
                  // name={executive.name}
                  position={executive.position}
                  image={executive.image}
                  variable={executive.variable}
                  linkedin={executive.linkedin}
                  github={executive.github}
                  instagram={executive.instagram}
                />
              ))}
            </div>

            <h2>Office Bearers</h2>

            <div className="wrapper-div">
              {OfficeBearers.map((bearer,ind) => (
                <Card
                  name = {bearer.name.split("").map((letter,ind2)=>{
                    return(
                      <TextSpan className ="bumpy" key={ind2}>
                      {letter === " " ? "\u00A0" : letter}
                      </TextSpan>
                    )
                    })}
                  // name={bearer.name}
                  position={bearer.position}
                  image={bearer.image}
                  variable={bearer.variable}
                  linkedin={bearer.linkedin}
                  github={bearer.github}
                  instagram={bearer.instagram}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
