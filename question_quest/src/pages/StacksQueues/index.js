import "./index.scss";

import { NavBar, QuestionList } from "../../components";

export default function StacksQueues(props) {
    return <div>
        <NavBar />
        <div className="title">Stacks And Queues Questions</div>
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
                <QuestionList number = "1" name = "Implement Stack from Scratch" link = "" status = "Not Complete" />
                <QuestionList number = "2" name = "Implement Queue from Scratch" link = "" status = "Not Complete" />
                <QuestionList number = "3" name = "Implement 2 stack in an array" link = "" status = "Not Complete" />
                <QuestionList number = "4" name = "Find the middle element of a stack" link = "" status = "Not Complete" />
                <QuestionList number = "5" name = "Implement “N” stacks in an Array" link = "" status = "Not Complete" />
                <QuestionList number = "6" name = "Check the expression has valid or Balanced parenthesis or not" link = "" status = "Not Complete" />
                <QuestionList number = "7" name = "Reverse a String using Stack" link = "" status = "Not Complete" />
                <QuestionList number = "8" name = "Design a Stack that supports getMin() in O(1) time and O(1) extra space" link = "" status = "Not Complete" />
                <QuestionList number = "9" name = "Find the next Greater element" link = "" status = "Not Complete" />
                <QuestionList number = "10" name = "The celebrity Problem" link = "" status = "Not Complete" />
                <QuestionList number = "11" name = "Arithmetic Expression evaluation" link = "" status = "Not Complete" />
                <QuestionList number = "12" name = "Evaluation of Postfix expression" link = "" status = "Not Complete" />
                <QuestionList number = "13" name = "Implement a method to insert an element at its bottom without using any other data structure" link = "" status = "Not Complete" />
                <QuestionList number = "14" name = "Reverse a stack using recursion" link = "" status = "Not Complete" />
                <QuestionList number = "15" name = "Sort a Stack using recursion" link = "" status = "Not Complete" />
                <QuestionList number = "16" name = "Merge Overlapping Intervals" link = "" status = "Not Complete" />
                <QuestionList number = "17" name = "Largest rectangular Area in Histogram" link = "" status = "Not Complete" />
                <QuestionList number = "18" name = "Length of the Longest Valid Substring" link = "" status = "Not Complete" />
                <QuestionList number = "19" name = "Expression contains redundant bracket or not" link = "" status = "Not Complete" />
                <QuestionList number = "20" name = "Implement Stack using Queue" link = "" status = "Not Complete" />
                <QuestionList number = "21" name = "Implement Stack using Deque" link = "" status = "Not Complete" />
                <QuestionList number = "22" name = "Stack Permutations [Check if an array is stack permutation of other]" link = "" status = "Not Complete" />
                <QuestionList number = "23" name = "Implement Queue using Stack" link = "" status = "Not Complete" />
                <QuestionList number = "24" name = "Implement “n” queue in an array" link = "" status = "Not Complete" />
                <QuestionList number = "25" name = "Implement a Circular queue" link = "" status = "Not Complete" />
                <QuestionList number = "26" name = "LRU Cache Implementation" link = "" status = "Not Complete" />
                <QuestionList number = "27" name = "Reverse a Queue using recursion" link = "" status = "Not Complete" />
                <QuestionList number = "28" name = "Reverse the first “K” elements of a queue" link = "" status = "Not Complete" />
                <QuestionList number = "29" name = "Interleave the first half of the queue with second half" link = "" status = "Not Complete" />
                <QuestionList number = "30" name = "Find the first circular tour that visits all Petrol Pumps" link = "" status = "Not Complete" />
                <QuestionList number = "31" name = "Minimum time required to rot all oranges" link = "" status = "Not Complete" />
                <QuestionList number = "32" name = "Distance of nearest cell having 1 in a binary matrix" link = "" status = "Not Complete" />
                <QuestionList number = "33" name = "First negative integer in every window of size “k”" link = "" status = "Not Complete" />
                <QuestionList number = "34" name = "Check if all levels of two trees are anagrams or not" link = "" status = "Not Complete" />
                <QuestionList number = "35" name = "Sum of minimum and maximum elements of all subarrays of size “k”" link = "" status = "Not Complete" />
                <QuestionList number = "36" name = "Minimum sum of squares of character counts in a given string after removing “k” characters" link = "" status = "Not Complete" />
                <QuestionList number = "37" name = "Queue based approach or first non-repeating character in a stream" link = "" status = "Not Complete" />
                <QuestionList number = "38" name = "Next Smaller Element" link = "" status = "Not Complete" />
            </tbody>
        </table>
    </div>
}