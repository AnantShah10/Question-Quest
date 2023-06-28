import "./index.scss";

import { Link } from "react-router-dom";

import { ProgressBar } from "../../components";

import party_image from "../../images/party_image.png";

export default function QuestionCard(props) {
    return <div className="questioncard">
        <Link to={props.link}>
            <div className="card_top">
                <div className="card_left"><img src = {props.img} alt = {props.name}/></div>
                <div className="card_right">
                    <div style={{textAlign: "center"}}><span style={{fontWeight: "bold"}}>{props.name}</span></div>
                    <div><span style={{fontWeight: "bold"}}>Total Questions: </span>{props.totalquestions}</div>
                    <div>{props.remainingquestions} more to go! <img src = {party_image} alt = "party_image" /></div>
                </div>
            </div>
            <div className = "hr" />
            <div className="card_bottom">
                <ProgressBar completed={5}/>
            </div>
        </Link>
    </div>
}