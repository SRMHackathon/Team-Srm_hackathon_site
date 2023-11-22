import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect, useRef } from "react";
function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    // useEffect(() => {
    //     const handleOutsideClick = (event) => {
    //         if(isMenuOpen){}
    //         setMenuOpen(true);
            
    //     };

    //     document.addEventListener('click', handleOutsideClick);

    //     return () => {
    //         document.removeEventListener('click', handleOutsideClick);
    //     };
    // }, [isMenuOpen]);

    return (
        <div className="navbar">
            <div className="logo-and-name">TEAM SRM HACKATHON</div>

            <div className="hamburger-menu">
                <GiHamburgerMenu onClick={toggleMenu} size={30} />
                <div className={isMenuOpen ? "show" : "hide"}>
                    <div>ABOUT US</div>
                    <div>OUR EVENTS</div>
                    <div>OUR TEAM</div>
                    <div>CONTACT US</div>
                </div>
            </div>

            <div className="section-links">
                <div className="aboutus-link">ABOUT US</div>
                <div className="events-link">OUR EVENTS</div>
                <div className="team-link">OUR TEAM</div>
                <div className="contact-link">CONTACT US</div>
            </div>
        </div>
    );
}
export default Navbar;
