import "./index.scss";

import { useState } from 'react';

import { Link } from "react-router-dom";

export default function QuestionList(props) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const tdstyle = {
        backgroundColor: isHover ? "black" : "white",
    };

    const linkstyle = {
        color: isHover ? "white" : "black",
    }

    return <tr className="questionrow">
        <td>{props.number}</td>
        <td>{props.name}</td>
        <td style = {tdstyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link style = {linkstyle} to={props.link}>Link</Link>
        </td>
        <td>{props.status}</td>
    </tr>
}