    import { Link, useMatch, useResolvedPath } from "react-router-dom";
    import PropTypes from "prop-types"; 
    import { useState } from "react";
    import { useEffect } from "react";
    export default function Navbar() {
        const [menuOpen,setMenuOpen] = useState(false)
        const [navVisible, setNavVisible] = useState(false)
        useEffect(() => {
            const handleResize = () => {
                const navUl = document.querySelector('nav ul');
                if (navUl) {
                if (window.innerWidth >= 768) {
                    navUl.classList.add('expanded');
                } else {
                    navUl.classList.remove('expanded');
                }
                }
            };
        
            window.addEventListener('resize', handleResize);
            handleResize(); 
        
            return () => {
                window.removeEventListener('resize', handleResize);
            };
            }, []);
        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
            setNavVisible(!navVisible);
            console.log(`Menu open state: ${!menuOpen}`);
        };
        return (
            <nav className={`nav ${navVisible ? "visible" : ""}`}>
                <Link to="/Home" className="logo">
                    <img src="/acm_logo.png" alt="ACM Logo" />
                </Link>
                <div className={`menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <CustomLink to="/Home">Home</CustomLink>
                    <CustomLink to="/Committee">Our Committee</CustomLink>
                    <CustomLink to="/Gallery">Gallery</CustomLink>
                    <CustomLink to="https://konfhub.com/checkout/upesacm-acmw-registration?ticketId=8618">Membership</CustomLink>
                    <CustomLink to="/Initiatives">Our Initiatives</CustomLink>
                    <CustomLink to="/team">Team</CustomLink>
                    <CustomLink to="/Contact">Contact</CustomLink>
                    {/* <CustomLink to="/Card">Card</CustomLink> */}
                </ul>
                {/* <CustomLink to="https://www.upesacmw.org/index.html"className="ACMW">Visit Upes ACM-W</CustomLink> */}
            </nav>
            // {[
            //             { to: "/Home", children: "Home" },
            //             { to: "/About", children: "About" },
            //             { to: "/Gallery", children: "Gallery" },
            //             { to: "https://konfhub.com/checkout/upesacm-acmw-registration?ticketId=8618", children: "Membership" },
            //             { to: "/Initiatives", children: "Our Initiatives" },
            //             { to: "/team", children: "Team" },
            //             { to: "/Contact", children: "Contact" },
            //         ].map((link, index) => (
            //             <CustomLink key={index} to={link.to}>{link.children}</CustomLink>
            //         ))}
            //     </ul>
            //     <CustomLink to="https://www.upesacmw.org/index.html" className="ACMW">Visit Upes ACM-W</CustomLink>
        );
    }

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({ path: resolvedPath.pathname, end: true });
        return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>{children}</Link>
            </li>
        );
    }

    CustomLink.propTypes = {
        to: PropTypes.string.isRequired, 
        children: PropTypes.node.isRequired, 
    };
