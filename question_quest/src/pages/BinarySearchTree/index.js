import "./index.scss";

import { NavBar, QuestionList } from "../../components";

export default function BinarySearchTree(props) {
    return <div>
        <NavBar />
        <div className="title">Binary Search Tree Questions</div>
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
                <QuestionList number = "1" name = "Find a value in a BST" link = "" status = "Not Complete" />
                <QuestionList number = "2" name = "Deletion of a node in a BST" link = "" status = "Not Complete" />
                <QuestionList number = "3" name = "Find min and max value in a BST" link = "" status = "Not Complete" />
                <QuestionList number = "4" name = "Find inorder successor and inorder predecessor in a BST" link = "" status = "Not Complete" />
                <QuestionList number = "5" name = "Check if a tree is a BST or not" link = "" status = "Not Complete" />
                <QuestionList number = "6" name = "Populate Inorder successor of all nodes" link = "" status = "Not Complete" />
                <QuestionList number = "7" name = "Find LCA  of 2 nodes in a BST" link = "" status = "Not Complete" />
                <QuestionList number = "8" name = "Construct BST from preorder traversal" link = "" status = "Not Complete" />
                <QuestionList number = "9" name = "Convert Binary tree into BST" link = "" status = "Not Complete" />
                <QuestionList number = "10" name = "Convert a normal BST into a Balanced BST" link = "" status = "Not Complete" />
                <QuestionList number = "11" name = "Merge two BST [V.V.V. IMP]" link = "" status = "Not Complete" />
                <QuestionList number = "12" name = "Find Kth largest element in a BST" link = "" status = "Not Complete" />
                <QuestionList number = "13" name = "Find Kth smallest element in a BST" link = "" status = "Not Complete" />
                <QuestionList number = "14" name = "Count pairs from 2 BST whose sum is equal to given value “X”" link = "" status = "Not Complete" />
                <QuestionList number = "15" name = "Find the median of BST in O(n) time and O(1) space" link = "" status = "Not Complete" />
                <QuestionList number = "16" name = "Count BST nodes that lie in a given range" link = "" status = "Not Complete" />
                <QuestionList number = "17" name = "Replace every element with the least greater element on its right" link = "" status = "Not Complete" />
                <QuestionList number = "18" name = "Given “n” appointments, find the conflicting appointments" link = "" status = "Not Complete" />
                <QuestionList number = "19" name = "Check preorder is valid or not" link = "" status = "Not Complete" />
                <QuestionList number = "20" name = "Check whether BST contains Dead end" link = "" status = "Not Complete" />
                <QuestionList number = "21" name = "Largest BST in a Binary Tree [V.V.V.V.V. IMP]" link = "" status = "Not Complete" />
                <QuestionList number = "22" name = "Flatten BST to sorted list" link = "" status = "Not Complete" />
            </tbody>
        </table>
    </div>
}