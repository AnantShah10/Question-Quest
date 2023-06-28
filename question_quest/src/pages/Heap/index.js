import "./index.scss";

import { NavBar, QuestionList } from "../../components";

export default function Heap(props) {
    return <div>
        <NavBar />
        <div className="title">Heap Questions</div>
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
                <QuestionList number = "1" name = "Implement a Maxheap/MinHeap using arrays and recursion" link = "" status = "Not Complete" />
                <QuestionList number = "2" name = "Sort an Array using heap [HeapSort]" link = "" status = "Not Complete" />
                <QuestionList number = "3" name = "Maximum of all subarrays of size k" link = "" status = "Not Complete" />
                <QuestionList number = "4" name = "“K” largest element in an array" link = "" status = "Not Complete" />
                <QuestionList number = "5" name = "Kth smallest and largest element in an unsorted array" link = "" status = "Not Complete" />
                <QuestionList number = "6" name = "Merge “K” sorted arrays [IMP]" link = "" status = "Not Complete" />
                <QuestionList number = "7" name = "Merge 2 Binary Max Heaps" link = "" status = "Not Complete" />
                <QuestionList number = "8" name = "Kth largest sum continuous subarrays" link = "" status = "Not Complete" />
                <QuestionList number = "9" name = "Leetcode - reorganize strings" link = "" status = "Not Complete" />
                <QuestionList number = "10" name = "Merge “K” Sorted Linked Lists [V. IMP]" link = "" status = "Not Complete" />
                <QuestionList number = "11" name = "Smallest range in “K” Lists" link = "" status = "Not Complete" />
                <QuestionList number = "12" name = "Median in a stream of Integers" link = "" status = "Not Complete" />
                <QuestionList number = "13" name = "Check if a Binary Tree is Heap" link = "" status = "Not Complete" />
                <QuestionList number = "14" name = "Connect “n” ropes with minimum cost" link = "" status = "Not Complete" />
                <QuestionList number = "15" name = "Convert BST to Min Heap" link = "" status = "Not Complete" />
                <QuestionList number = "16" name = "Convert min heap to max heap" link = "" status = "Not Complete" />
                <QuestionList number = "17" name = "Rearrange characters in a string such that no two adjacent are same" link = "" status = "Not Complete" />
                <QuestionList number = "18" name = "Minimum sum of two numbers formed from digits of an array" link = "" status = "Not Complete" />
            </tbody>
        </table>    
    </div>
}