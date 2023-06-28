import "./index.scss";

import { NavBar, QuestionList } from "../../components";

export default function BitManipulation(props) {
    return <div>
        <NavBar />
        <div className="title">Bit Manipulation Questions</div>
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
                <QuestionList number = "1" name = "Count set bits in an integer" link = "" status = "Not Complete" />
                <QuestionList number = "2" name = "Find the two non-repeating elements in an array of repeating elements" link = "" status = "Not Complete" />
                <QuestionList number = "3" name = "Count number of bits to be flipped to convert A to B" link = "" status = "Not Complete" />
                <QuestionList number = "4" name = "Count total set bits in all numbers from 1 to n" link = "" status = "Not Complete" />
                <QuestionList number = "5" name = "Program to find whether a no is power of two" link = "" status = "Not Complete" />
                <QuestionList number = "6" name = "Find position of the only set bit" link = "" status = "Not Complete" />
                <QuestionList number = "7" name = "Copy set bits in a range" link = "" status = "Not Complete" />
                <QuestionList number = "8" name = "Divide two integers without using multiplication, division and mod operator" link = "" status = "Not Complete" />
                <QuestionList number = "9" name = "Calculate square of a number without using *, / and pow()" link = "" status = "Not Complete" />
                <QuestionList number = "10" name = "Power Set" link = "" status = "Not Complete" />
            </tbody>
        </table> 
    </div>
}