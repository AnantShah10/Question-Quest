import "./index.scss";

import { NavBar, QuestionList } from "../../components";

export default function Matrix(props) {
    return <div>
        <NavBar />
        <div className="title">Matrix Questions</div>
        <table>
            <thead>
                <tr>
                    <th style = {{width: "10%"}} >Number</th>
                    <th style = {{width: "40%"}}>Question</th>
                    <th style = {{width: "10%"}}>Link</th>
                    <th style = {{width: "15%"}}>Status</th>
                </tr>
            </thead>
            <tbody>
                <QuestionList number = "1" name = "Spiral traversal on a Matrix" link = "" status = "Not Complete" />
                <QuestionList number = "2" name = "Search an element in a Matrix" link = "" status = "Not Complete" />
                <QuestionList number = "3" name = "Find median in a row wise sorted matrix" link = "" status = "Not Complete" />
                <QuestionList number = "4" name = "Find row with maximum no. of 1’s" link = "" status = "Not Complete" />
                <QuestionList number = "5" name = "Print elements in sorted order using row-column wise sorted matrix" link = "" status = "Not Complete" />
                <QuestionList number = "6" name = "Maximum size rectangle" link = "" status = "Not Complete" />
                <QuestionList number = "7" name = "Find a specific pair in matrix" link = "" status = "Not Complete" />
                <QuestionList number = "8" name = "Rotate matrix by 90 degrees" link = "" status = "Not Complete" />
                <QuestionList number = "9" name = "Kth smallest element in a row-column wise sorted matrix" link = "" status = "Not Complete" />
                <QuestionList number = "10" name = "Common elements in all rows of a given matrix" link = "" status = "Not Complete" />
            </tbody>
        </table>
    </div>
}