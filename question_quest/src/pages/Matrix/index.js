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
                <QuestionList number = "1" name = "Spiral traversal on a Matrix" link = "matrix_01" status = "Not Complete" />
                <QuestionList number = "2" name = "Search an element in a Matrix" link = "matrix_02" status = "Not Complete" />
                <QuestionList number = "3" name = "Find median in a row wise sorted matrix" link = "matrix_03" status = "Not Complete" />
                <QuestionList number = "4" name = "Find row with maximum no. of 1’s" link = "matrix_04" status = "Not Complete" />
                <QuestionList number = "5" name = "Print elements in sorted order using row-column wise sorted matrix" link = "matrix_05" status = "Not Complete" />
                <QuestionList number = "6" name = "Maximum size rectangle" link = "matrix_06" status = "Not Complete" />
                <QuestionList number = "7" name = "Find a specific pair in matrix" link = "matrix_07" status = "Not Complete" />
                <QuestionList number = "8" name = "Rotate matrix by 90 degrees" link = "matrix_08" status = "Not Complete" />
                <QuestionList number = "9" name = "Kth smallest element in a row-column wise sorted matrix" link = "matrix_09" status = "Not Complete" />
                <QuestionList number = "10" name = "Common elements in all rows of a given matrix" link = "matrix_10" status = "Not Complete" />
            </tbody>
        </table>
    </div>
}