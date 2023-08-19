import React from "react";

import image from "../images/geisel.jpg";
const imageAltText = "UCSD's Geisel Library";

const description =
  "I'm studying for my bachelor's in Computer Science at UC San Diego.";

const skillsList = [
  "2nd year CS student",
  "Regents Scholar",
  "IDEA Scholar",
  "ServiceNow Scholar",
  "Researching under Prof. Michael Coblenz",
];

const Education = () => {
    return(
        <section className="padding" id="about">
            <img className="background" src={image} alt={imageAltText} />
            <div
                style={{
                backgroundColor: "white",
                width: "50%",
                padding: "4rem",
                margin: "3rem auto",
                textAlign: "center",
                }}
            >
                <h2>Education</h2>
                <p className="large">{description}</p>
                <hr />
                <ul
                style={{
                    textAlign: "left",
                    columns: 2,
                    fontSize: "1.25rem",
                    margin: "2rem 3rem",
                    gap: "3rem",
                }}
                >
                {skillsList.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
                </ul>
            </div>
        </section>
    )
}

export default Education;