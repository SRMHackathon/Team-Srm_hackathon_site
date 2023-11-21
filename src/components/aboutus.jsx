import image2 from "../assets/Artboard1a3.png"
import "../about.css"
import {useEffect, useState} from "react";
import CountUp from "react-countup";
function Aboutus() {

    const [experienceNumber,setExperienceNumber]= useState(0);
   

    return (
        <div className="About-section">
            <div className="about_section_title">ABOUT US</div>
            <img className="about_background_image"  src={image2} alt="" />
            <div className="about_section_content">
                SRM Hackathon, which was earlier known as IT Association is one
                of the most active associations under School of Computing. SRM
                Hackathon aims to upskill all students and ultimately make them
                have successful careers. We work on establishing a system of
                technical and competitive practices in the college, to set up a
                healthy coding environment for the students. At SRM Hackathon,
                we aim to build and structure your tech career, for the dream
                companies worldwide based on your skills, preferences, and work
                hard with you, until we achieve your end goal together, as a
                team. We aim to provide the best platform to code, collaborate
                and have fun.
            </div>
            <div className="achievement_cards">
                <div className="years_of_service">
                    <div className="experience_number"><CountUp end={11} duration={6} enableScrollSpy={true} scrollSpyOnce={true}/>+</div>
                    <div className="card_content">years of experience</div>
                </div>
                <div className="number_of_events">
                    <div className="experience_number"><CountUp end={50} duration={7} enableScrollSpy={true} scrollSpyOnce={true}/>+</div>
                    <div className="card_content">events organized</div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
