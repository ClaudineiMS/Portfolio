import { Dock } from 'primereact/dock';
import '../css/Dock.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 
import { BiLogoGmail } from "react-icons/bi"; 

export default function BasicDemo() {
    
    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/claudinei-moreira-cm/', '_blank');
    };

    const handleGithubClick = () => {
        window.open('https://github.com/ClaudineiMS', '_blank');
    };
    const handleEmailClick = () => {
        const email = 'claudineimoreirax7l@gmail.com';
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`, '_blank');
    };
    const items = [
        {
            label: 'LinkedIn',
            icon: () => (
                <div onClick={handleLinkedInClick} className="dock-icon">
                    <FaLinkedin size={50} color="white" />
                </div>
            ),
        },
        {
            label: 'GitHub',
            icon: () => (
                <div onClick={handleGithubClick} className="dock-icon">
                    <FaGithub size={50} color="white" />
                </div>
            ),
        },
        {
            label: 'Email',
            icon: () => (
                <div onClick={handleEmailClick} className="dock-icon">
                    <BiLogoGmail size={50} color="white" />
                </div>
            ),
        }
    ];

    return (
        <div className="dock-demo">
            <div className="dock-window">
                <Dock model={items} position="left" />
            </div>
        </div>
    );
}
