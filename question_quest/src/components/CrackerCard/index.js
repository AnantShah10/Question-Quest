import "./index.scss";

import { Link } from "react-router-dom";

export default function CrackerCard(props) {
    return <div className="card">
        <Link to={props.link}>
            <img src = {props.img} alt = {props.name}/>
            <div className="cracker_name">{props.name}</div>
        </Link>
    </div>
}