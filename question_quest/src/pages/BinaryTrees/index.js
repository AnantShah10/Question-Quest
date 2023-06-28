import "./index.scss";

import { NavBar, QuestionList } from "../../components";

export default function BinaryTrees(props) {
    return <div>
        <NavBar />
        <div className="title">Binary Trees Questions</div>
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
                <QuestionList number = "1" name = "Level order traversal" link = "" status = "Not Complete" />
                <QuestionList number = "2" name = "Reverse Level Order traversal" link = "" status = "Not Complete" />
                <QuestionList number = "3" name = "Height of a tree" link = "" status = "Not Complete" />
                <QuestionList number = "4" name = "Diameter of a tree" link = "" status = "Not Complete" />
                <QuestionList number = "5" name = "Mirror of a tree" link = "" status = "Not Complete" />
                <QuestionList number = "6" name = "Inorder Traversal of a tree both using recursion and Iteration" link = "" status = "Not Complete" />
                <QuestionList number = "7" name = "Preorder Traversal of a tree both using recursion and Iteration" link = "" status = "Not Complete" />
                <QuestionList number = "8" name = "Postorder Traversal of a tree both using recursion and Iteration" link = "" status = "Not Complete" />
                <QuestionList number = "9" name = "Left View of a tree" link = "" status = "Not Complete" />
                <QuestionList number = "10" name = "Right View of Tree" link = "" status = "Not Complete" />
                <QuestionList number = "11" name = "Top View of a tree" link = "" status = "Not Complete" />
                <QuestionList number = "12" name = "Bottom View of a tree" link = "" status = "Not Complete" />
                <QuestionList number = "13" name = "Zig-Zag traversal of a binary tree" link = "" status = "Not Complete" />
                <QuestionList number = "14" name = "Check if a tree is balanced or not" link = "" status = "Not Complete" />
                <QuestionList number = "15" name = "Diagonal Traversal of a Binary tree" link = "" status = "Not Complete" />
                <QuestionList number = "16" name = "Boundary traversal of a Binary tree" link = "" status = "Not Complete" />
                <QuestionList number = "17" name = "Construct Binary Tree from String with Bracket Representation" link = "" status = "Not Complete" />
                <QuestionList number = "18" name = "Convert Binary tree into Doubly Linked List" link = "" status = "Not Complete" />
                <QuestionList number = "19" name = "Convert Binary tree into Sum tree" link = "" status = "Not Complete" />
                <QuestionList number = "20" name = "Construct Binary tree from Inorder and preorder traversal" link = "" status = "Not Complete" />
                <QuestionList number = "21" name = "Find minimum swaps required to convert a Binary tree into BST" link = "" status = "Not Complete" />
                <QuestionList number = "22" name = "Check if Binary tree is Sum tree or not" link = "" status = "Not Complete" />
                <QuestionList number = "23" name = "Check if all leaf nodes are at same level or not" link = "" status = "Not Complete" />
                <QuestionList number = "24" name = "Check if a Binary Tree contains duplicate subtrees of size 2 or more [IMP]" link = "" status = "Not Complete" />
                <QuestionList number = "25" name = "Check if 2 trees are mirror or not" link = "" status = "Not Complete" />
                <QuestionList number = "26" name = "Sum of Nodes on the Longest path from root to leaf node" link = "" status = "Not Complete" />
                <QuestionList number = "27" name = "Check if given graph is tree or not [IMP]" link = "" status = "Not Complete" />
                <QuestionList number = "28" name = "Find Largest subtree sum in a tree" link = "" status = "Not Complete" />
                <QuestionList number = "29" name = "Maximum Sum of nodes in Binary tree such that no two are adjacent" link = "" status = "Not Complete" />
                <QuestionList number = "30" name = "Print all “K” Sum paths in a Binary tree" link = "" status = "Not Complete" />
                <QuestionList number = "31" name = "Find LCA in a Binary tree" link = "" status = "Not Complete" />
                <QuestionList number = "32" name = "Find distance between 2 nodes in a Binary tree" link = "" status = "Not Complete" />
                <QuestionList number = "33" name = "Kth Ancestor of node in a Binary tree" link = "" status = "Not Complete" />
                <QuestionList number = "34" name = "Find all Duplicate subtrees in a Binary tree [IMP]" link = "" status = "Not Complete" />
                <QuestionList number = "35" name = "Tree Isomorphism Problem" link = "" status = "Not Complete" />
            </tbody>
        </table>
    </div>
}