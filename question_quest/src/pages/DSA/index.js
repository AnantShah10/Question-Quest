import "./index.scss";

import { NavBar, QuestionCard } from "../../components";

import array_image from "../../images/array_image.png";
import matrix_image from "../../images/matrix_image.png";
import strings_image from "../../images/strings_image.png";
import searching_and_sorting_image from "../../images/searching_and_sorting_image.png";
import linked_list_image from "../../images/linked_list_image.png";
import bit_manipulation_image from "../../images/bit_manipulation_image.png";
import greedy_image from "../../images/greedy_image.png";
import backtracking_image from "../../images/backtracking_image.png";
import dynamic_programming_image from "../../images/dynamic_programming_image.png";
import stacks_and_queues_image from "../../images/stacks_and_queues_image.png";
import binary_trees_image from "../../images/binary_trees_image.jpg";
import binary_search_tree_image from "../../images/binary_search_tree_image.png";
import graphs_image from "../../images/graphs_image.png";
import heap_image from "../../images/heap_image.png";
import trie_image from "../../images/trie_image.png";

export default function DSA(props) {
    return <div>
        <NavBar />
        <div className="title">Data Structures and Algorithms CrackSheet</div>
        <div className="hrow">
            <QuestionCard img= { array_image } alt = "array_image" name = "Array" totalquestions = "36" remainingquestions = "36" link = "array"/>
            <QuestionCard img= { matrix_image } alt = "matrix_image" name = "Matrix" totalquestions = "10" remainingquestions = "10" link = "matrix"/>
            <QuestionCard img= { strings_image } alt = "strings_image" name = "Strings" totalquestions = "43" remainingquestions = "43" link = "strings"/>
            <QuestionCard img= { searching_and_sorting_image } alt = "searching_and_sorting_image" name = "Searching And Sorting" totalquestions = "36" remainingquestions = "36" link = "searching_and_sorting"/>
            <QuestionCard img= { linked_list_image } alt = "linked_list_image" name = "Linked List" totalquestions = "36" remainingquestions = "36" link = "linked_list"/>
            <QuestionCard img= { bit_manipulation_image } alt = "bit_manipulation_image" name = "Bit Manipulation" totalquestions = "10" remainingquestions = "10" link = "bit_manipulation"/>
            <QuestionCard img= { greedy_image } alt = "greedy_image" name = "Greedy" totalquestions = "35" remainingquestions = "35" link = "greedy"/>
            <QuestionCard img= { backtracking_image } alt = "backtracking_image" name = "Backtracking" totalquestions = "19" remainingquestions = "19" link = "backtracking"/>
            <QuestionCard img= { dynamic_programming_image } alt = "dynamic_programming_image" name = "Dynamic Programming" totalquestions = "60" remainingquestions = "60" link = "dynamic_programming"/>
            <QuestionCard img= { stacks_and_queues_image } alt = "stacks_and_queues_image" name = "Stacks And Queues" totalquestions = "38" remainingquestions = "38" link = "stacks_and_queues"/>
            <QuestionCard img= { binary_trees_image } alt = "binary_trees_image" name = "Binary Trees" totalquestions = "35" remainingquestions = "35" link = "binary_trees"/>
            <QuestionCard img= { binary_search_tree_image } alt = "binary_search_tree_image" name = "Binary Search Tree" totalquestions = "22" remainingquestions = "22" link = "binary_search_tree"/>
            <QuestionCard img= { graphs_image } alt = "graphs_image" name = "Graphs" totalquestions = "44" remainingquestions = "44" link = "graphs"/>
            <QuestionCard img= { heap_image } alt = "heap_image" name = "Heap" totalquestions = "18" remainingquestions = "18" link = "heap"/>
            <QuestionCard img= { trie_image } alt = "trie_image" name = "Trie" totalquestions = "6" remainingquestions = "6" link = "trie"/>
        </div>
    </div>
}