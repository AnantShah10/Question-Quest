import "./index.scss";

import { NavBar, QuestionList } from "../../components";

export default function Trie(props) {
    return <div>
        <NavBar />
        <div className="title">Trie Questions</div>
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
                <QuestionList number = "1" name = "Construct a trie from scratch" link = "" status = "Not Complete" />
                <QuestionList number = "2" name = "Find shortest unique prefix for every word in a given list" link = "" status = "Not Complete" />
                <QuestionList number = "3" name = "Word Break Problem | [Trie solution]" link = "" status = "Not Complete" />
                <QuestionList number = "4" name = "Given a sequence of words, print all anagrams together" link = "" status = "Not Complete" />
                <QuestionList number = "5" name = "Implement a Phone Directory" link = "" status = "Not Complete" />
                <QuestionList number = "6" name = "Print unique rows in a given boolean matrix" link = "" status = "Not Complete" />
            </tbody>
        </table>   
    </div>
}