import "./index.scss";

import { NavBar, QuestionList } from "../../components";

export default function LinkedList(props) {
    return <div>
        <NavBar />
        <div className="title">Linked List Questions</div>
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
                <QuestionList number = "1" name = "Write a Program to reverse the Linked List [Both Iterative and recursive]" link = "" status = "Not Complete" />
                <QuestionList number = "2" name = "Reverse a Linked List in group of Given Size [V. IMP]" link = "" status = "Not Complete" />
                <QuestionList number = "3" name = "Write a program to Detect loop in a linked list" link = "" status = "Not Complete" />
                <QuestionList number = "4" name = "Write a program to Delete loop in a linked list" link = "" status = "Not Complete" />
                <QuestionList number = "5" name = "Find the starting point of the loop" link = "" status = "Not Complete" />
                <QuestionList number = "6" name = "Remove Duplicates in a sorted Linked List" link = "" status = "Not Complete" />
                <QuestionList number = "7" name = "Remove Duplicates in a Un-sorted Linked List" link = "" status = "Not Complete" />
                <QuestionList number = "8" name = "Write a Program to Move the last element to Front in a Linked List" link = "" status = "Not Complete" />
                <QuestionList number = "9" name = "Add “1” to a number represented as a Linked List" link = "" status = "Not Complete" />
                <QuestionList number = "10" name = "Add two numbers represented by linked lists" link = "" status = "Not Complete" />
                <QuestionList number = "11" name = "Intersection of two Sorted Linked List" link = "" status = "Not Complete" />
                <QuestionList number = "12" name = "Intersection Point of two Linked Lists" link = "" status = "Not Complete" />
                <QuestionList number = "13" name = "Merge Sort For Linked lists [V. IMP]" link = "" status = "Not Complete" />
                <QuestionList number = "14" name = "Quicksort for Linked Lists [V. IMP]" link = "" status = "Not Complete" />
                <QuestionList number = "15" name = "Find the middle Element of a linked list" link = "" status = "Not Complete" />
                <QuestionList number = "16" name = "Check if a linked list is a circular linked list" link = "" status = "Not Complete" />
                <QuestionList number = "17" name = "Split a Circular linked list into two halves" link = "" status = "Not Complete" />
                <QuestionList number = "18" name = "Write a Program to check whether the Singly Linked list is a palindrome or not" link = "" status = "Not Complete" />
                <QuestionList number = "19" name = "Deletion from a Circular Linked List" link = "" status = "Not Complete" />
                <QuestionList number = "20" name = "Reverse a Doubly Linked list" link = "" status = "Not Complete" />
                <QuestionList number = "21" name = "Find pairs with a given sum in a DLL" link = "" status = "Not Complete" />
                <QuestionList number = "22" name = "Count triplets in a sorted DLL whose sum is equal to given value “X”" link = "" status = "Not Complete" />
                <QuestionList number = "23" name = "Sort a “k”sorted Doubly Linked list [V. IMP]" link = "" status = "Not Complete" />
                <QuestionList number = "24" name = "Rotate Doubly Linked list by N nodes" link = "" status = "Not Complete" />
                <QuestionList number = "25" name = "Rotate a Doubly Linked list in group of Given Size [V. IMP]" link = "" status = "Not Complete" />
                <QuestionList number = "26" name = "Can we reverse a linked list in less than O(n)?" link = "" status = "Not Complete" />
                <QuestionList number = "27" name = "Why Quicksort is preferred for Arrays and Merge Sort for Linked Lists?" link = "" status = "Not Complete" />
                <QuestionList number = "28" name = "Flatten a Linked List" link = "" status = "Not Complete" />
                <QuestionList number = "29" name = "Sort a LL of 0’s, 1’s and 2’s" link = "" status = "Not Complete" />
                <QuestionList number = "30" name = "Clone a linked list with next and random pointer" link = "" status = "Not Complete" />
                <QuestionList number = "31" name = "Merge K sorted Linked list" link = "" status = "Not Complete" />
                <QuestionList number = "32" name = "Multiply 2 no. represented by LL" link = "" status = "Not Complete" />
                <QuestionList number = "33" name = "Delete nodes which have a greater value on right side" link = "" status = "Not Complete" />
                <QuestionList number = "34" name = "Segregate even and odd nodes in a Linked List" link = "" status = "Not Complete" />
                <QuestionList number = "35" name = "Program for n’th node from the end of a Linked List" link = "" status = "Not Complete" />
                <QuestionList number = "36" name = "Find the first non-repeating character from a stream of characters" link = "" status = "Not Complete" />
            </tbody>
        </table>
    </div>
}