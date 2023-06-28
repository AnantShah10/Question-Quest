import "./index.scss";

import { Link } from "react-router-dom";

export default function Code(props) {
    return <div className="code">
        <textarea type="text" className="codeeditor" placeholder="Paste Your Code Here" />
        <Link>Save</Link>
    </div>
}