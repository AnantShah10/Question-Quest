import "./index.scss";

import { NavBar, QuestionList } from "../../components";

export default function SearchingSorting(props) {
    return <div>
        <NavBar />
        <div className="title">Searching And Sorting Questions</div>
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
                <QuestionList number = "1" name = "Find first and last positions of an element in a sorted array" link = "" status = "Not Complete" />
                <QuestionList number = "2" name = "Find a Fixed Point [Value equal to index] in a given array" link = "" status = "Not Complete" />
                <QuestionList number = "3" name = "Search in a rotated sorted array" link = "" status = "Not Complete" />
                <QuestionList number = "4" name = "Square root of an integer" link = "" status = "Not Complete" />
                <QuestionList number = "5" name = "Maximum and minimum of an array using minimum number of comparisons" link = "" status = "Not Complete" />
                <QuestionList number = "6" name = "Optimum location of point to minimize total distance" link = "" status = "Not Complete" />
                <QuestionList number = "7" name = "Find the repeating and the missing" link = "" status = "Not Complete" />
                <QuestionList number = "8" name = "Find majority element" link = "" status = "Not Complete" />
                <QuestionList number = "9" name = "Searching in an array where adjacent differ by at most k" link = "" status = "Not Complete" />
                <QuestionList number = "10" name = "Find a pair with a given difference" link = "" status = "Not Complete" />
                <QuestionList number = "11" name = "Find four elements that sum to a given value" link = "" status = "Not Complete" />
                <QuestionList number = "12" name = "Maximum sum such that no 2 elements are adjacent" link = "" status = "Not Complete" />
                <QuestionList number = "13" name = "Count triplet with sum smaller than a given value" link = "" status = "Not Complete" />
                <QuestionList number = "14" name = "Merge 2 sorted arrays" link = "" status = "Not Complete" />
                <QuestionList number = "15" name = "Product array Puzzle" link = "" status = "Not Complete" />
                <QuestionList number = "16" name = "Count Inversion" link = "" status = "Not Complete" />
                <QuestionList number = "17" name = "Sort array according to count of set bits" link = "" status = "Not Complete" />
                <QuestionList number = "18" name = "Minimum no. of swaps required to sort the array" link = "" status = "Not Complete" />
                <QuestionList number = "19" name = "Bishu and Soldiers" link = "" status = "Not Complete" />
                <QuestionList number = "20" name = "Rasta and Kheshtak" link = "" status = "Not Complete" />
                <QuestionList number = "21" name = "Kth smallest number again" link = "" status = "Not Complete" />
                <QuestionList number = "22" name = "Find pivot element in a sorted array" link = "" status = "Not Complete" />
                <QuestionList number = "23" name = "K-th Element of Two Sorted Arrays" link = "" status = "Not Complete" />
                <QuestionList number = "24" name = "Aggressive cows" link = "" status = "Not Complete" />
                <QuestionList number = "25" name = "Book Allocation Problem" link = "" status = "Not Complete" />
                <QuestionList number = "26" name = "EKOSPOJ" link = "" status = "Not Complete" />
                <QuestionList number = "27" name = "Job Scheduling Algo" link = "" status = "Not Complete" />
                <QuestionList number = "28" name = "Missing Number in AP" link = "" status = "Not Complete" />
                <QuestionList number = "29" name = "Smallest number with atleast n trailing zeroes in factorial" link = "" status = "Not Complete" />
                <QuestionList number = "30" name = "Painters Partition Problem" link = "" status = "Not Complete" />
                <QuestionList number = "31" name = "ROTI-Prata SPOJ" link = "" status = "Not Complete" />
                <QuestionList number = "32" name = "DoubleHelix SPOJ" link = "" status = "Not Complete" />
                <QuestionList number = "33" name = "Subset Sums" link = "" status = "Not Complete" />
                <QuestionList number = "34" name = "Find the inversion count" link = "" status = "Not Complete" />
                <QuestionList number = "35" name = "Implement Merge-sort in-place" link = "" status = "Not Complete" />
                <QuestionList number = "36" name = "Partitioning and Sorting Arrays with Many Repeated Entries" link = "" status = "Not Complete" />
            </tbody>
        </table>
    </div>
}