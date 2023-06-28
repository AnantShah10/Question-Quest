import "./index.scss";

import { NavBar, QuestionList } from "../../components";

export default function Backtracking(props) {
    return <div>
        <NavBar />
        <div className="title">Backtracking Questions</div>
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
                <QuestionList number = "1" name = "Rat in a maze Problem" link = "" status = "Not Complete" />
                <QuestionList number = "2" name = "Printing all solutions in N-Queen " link = "" status = "Not Complete" />
                <QuestionList number = "3" name = "Word Break Problem using Backtracking" link = "" status = "Not Complete" />
                <QuestionList number = "4" name = "Remove Invalid Parentheses" link = "" status = "Not Complete" />
                <QuestionList number = "5" name = "Sudoku Solver" link = "" status = "Not Complete" />
                <QuestionList number = "6" name = "M Coloring Problem" link = "" status = "Not Complete" />
                <QuestionList number = "7" name = "Print all palindromic partitions of a string" link = "" status = "Not Complete" />
                <QuestionList number = "8" name = "Subset Sum Problem" link = "" status = "Not Complete" />
                <QuestionList number = "9" name = "The Knight’s tour problem" link = "" status = "Not Complete" />
                <QuestionList number = "10" name = "Tug of War" link = "" status = "Not Complete" />
                <QuestionList number = "11" name = "Find shortest safe route in a path with landmines" link = "" status = "Not Complete" />
                <QuestionList number = "12" name = "Combinational Sum" link = "" status = "Not Complete" />
                <QuestionList number = "13" name = "Find Maximum number possible by doing at-most K swaps" link = "" status = "Not Complete" />
                <QuestionList number = "14" name = "Print all permutations of a string" link = "" status = "Not Complete" />
                <QuestionList number = "15" name = "Find if there is a path of more than k length from a source" link = "" status = "Not Complete" />
                <QuestionList number = "16" name = "Longest Possible Route in a Matrix with Hurdles" link = "" status = "Not Complete" />
                <QuestionList number = "17" name = "Print all possible paths from top left to bottom right of a mXn matrix	" link = "" status = "Not Complete" />
                <QuestionList number = "18" name = "Partition of a set into K subsets with equal sum" link = "" status = "Not Complete" />
                <QuestionList number = "19" name = "Find the K-th Permutation Sequence of first N natural numbers" link = "" status = "Not Complete" />
            </tbody>
        </table>   
    </div>
}