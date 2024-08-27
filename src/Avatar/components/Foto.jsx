import React from "react";
import img from '../../img/file.jpeg';
import { Avatar } from 'primereact/avatar';  
import '../css/Foto.css';

export const Foto = () => {
    return (
    <div className="avatar-container">
        <Avatar image={img} shape="circle" className="avatar-image" />
    </div>
    );
}