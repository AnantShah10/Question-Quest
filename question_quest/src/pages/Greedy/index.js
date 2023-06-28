import "./index.scss";

import { NavBar, QuestionList } from "../../components";

export default function Greedy(props) {
    return <div>
        <NavBar />
        <div className="title">Greedy Questions</div>
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
                <QuestionList number = "1" name = "Activity Selection Problem" link = "" status = "Not Complete" />
                <QuestionList number = "2" name = "Job Sequencing Problem" link = "" status = "Not Complete" />
                <QuestionList number = "3" name = "Huffman Coding" link = "" status = "Not Complete" />
                <QuestionList number = "4" name = "Water Connection Problem" link = "" status = "Not Complete" />
                <QuestionList number = "5" name = "Fractional Knapsack Problem" link = "" status = "Not Complete" />
                <QuestionList number = "6" name = "Greedy Algorithm to find Minimum number of Coins" link = "" status = "Not Complete" />
                <QuestionList number = "7" name = "Maximum trains for which stoppage can be provided" link = "" status = "Not Complete" />
                <QuestionList number = "8" name = "Minimum Platforms Problem" link = "" status = "Not Complete" />
                <QuestionList number = "9" name = "Buy Maximum Stocks if i stocks can be bought on i-th day" link = "" status = "Not Complete" />
                <QuestionList number = "10" name = "Find the minimum and maximum amount to buy all N candies" link = "" status = "Not Complete" />
                <QuestionList number = "11" name = "Minimize Cash Flow among a given set of friends who have borrowed money from each other" link = "" status = "Not Complete" />
                <QuestionList number = "12" name = "Minimum Cost to cut a board into squares" link = "" status = "Not Complete" />
                <QuestionList number = "13" name = "Check if it is possible to survive on Island" link = "" status = "Not Complete" />
                <QuestionList number = "14" name = "Find maximum meetings in one room" link = "" status = "Not Complete" />
                <QuestionList number = "15" name = "Maximum product subset of an array" link = "" status = "Not Complete" />
                <QuestionList number = "16" name = "Maximize array sum after K negations" link = "" status = "Not Complete" />
                <QuestionList number = "17" name = "Maximize the sum of arr[i]*i" link = "" status = "Not Complete" />
                <QuestionList number = "18" name = "Maximum sum of absolute difference of an array" link = "" status = "Not Complete" />
                <QuestionList number = "19" name = "Maximize sum of consecutive differences in a circular array" link = "" status = "Not Complete" />
                <QuestionList number = "20" name = "Minimum sum of absolute difference of pairs of two arrays" link = "" status = "Not Complete" />
                <QuestionList number = "21" name = "Program for Shortest Job First (or SJF) CPU Scheduling" link = "" status = "Not Complete" />
                <QuestionList number = "22" name = "Program for Least Recently Used (LRU) Page Replacement algorithm" link = "" status = "Not Complete" />
                <QuestionList number = "23" name = "Smallest subset with sum greater than all other elements" link = "" status = "Not Complete" />
                <QuestionList number = "24" name = "Chocolate Distribution Problem" link = "" status = "Not Complete" />
                <QuestionList number = "25" name = "DEFKIN - Defense of a Kingdom" link = "" status = "Not Complete" />
                <QuestionList number = "26" name = "DIEHARD - DIE HARD" link = "" status = "Not Complete" />
                <QuestionList number = "27" name = "GERGOVIA - Wine trading in Gergovia" link = "" status = "Not Complete" />
                <QuestionList number = "28" name = "Picking Up Chicks" link = "" status = "Not Complete" />
                <QuestionList number = "29" name = "CHOCOLA - Chocolate" link = "" status = "Not Complete" />
                <QuestionList number = "30" name = "ARRANGE - Arranging Amplifiers" link = "" status = "Not Complete" />
                <QuestionList number = "31" name = "K Centers Problem" link = "" status = "Not Complete" />
                <QuestionList number = "32" name = "Minimum Cost of ropes" link = "" status = "Not Complete" />
                <QuestionList number = "33" name = "Find smallest number with given number of digits and sum of digits" link = "" status = "Not Complete" />
                <QuestionList number = "34" name = "Rearrange characters in a string such that no two adjacent are same" link = "" status = "Not Complete" />
                <QuestionList number = "35" name = "Find maximum sum possible equal sum of three stacks" link = "" status = "Not Complete" />
            </tbody>
        </table>
    </div>
}