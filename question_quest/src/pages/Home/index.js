import "./index.scss";

import { NavBar, CrackerCard } from "../../components";

import dsa_image from "../../images/dsa_image.png";
import comingsoon_image from "../../images/comingsoon_image.png";

export default function Home(props) {
    return <div className="home">
        <NavBar />
        <div className="hrow">
            <CrackerCard name = "DSA Cracker" img= { dsa_image } alt = "dsa_image" link = "dsa_cracker"/>
            <CrackerCard name = "Coming Soon (LeetCode)" img= { comingsoon_image } alt = "comingsoon_image" link = ""/>
            <CrackerCard name = "Coming Soon (HackerRank)" img= { comingsoon_image } alt = "comingsoon_image" link = ""/>
        </div>
    </div>
}