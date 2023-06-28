import "./index.scss";

import { NavBar, QuestionList } from "../../components";

export default function Array(props) {
    return <div>
        <NavBar />
        <div className="title">Array Questions</div>
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
                <QuestionList number = "1" name = "Reverse the array" link = "array_01" status = "Not Complete" />
                <QuestionList number = "2" name = "Find the maximum and minimum element in an array" link = "array_02" status = "Not Complete" />
                <QuestionList number = "3" name = "Find the “Kth” max and min element of an array" link = "array_03" status = "Not Complete" />
                <QuestionList number = "4" name = "Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo" link = "array_04" status = "Not Complete" />
                <QuestionList number = "5" name = "Move all the negative elements to one side of the array" link = "array_05" status = "Not Complete" />
                <QuestionList number = "6" name = "Find the Union and Intersection of the two sorted arrays" link = "array_06" status = "Not Complete" />
                <QuestionList number = "7" name = "Write a program to cyclically rotate an array by one" link = "array_07" status = "Not Complete" />
                <QuestionList number = "8" name = "Find Largest sum contiguous Subarray [V. IMP]" link = "array_08" status = "Not Complete" />
                <QuestionList number = "9" name = "Minimize the maximum difference between heights [V. IMP]" link = "array_09" status = "Not Complete" />
                <QuestionList number = "10" name = "Minimum no. of Jumps to reach end of an array" link = "array_10" status = "Not Complete" />
                <QuestionList number = "11" name = "Find duplicate in an array of N+1 Integers" link = "array_11" status = "Not Complete" />
                <QuestionList number = "12" name = "Merge 2 sorted arrays without using Extra space" link = "array_12" status = "Not Complete" />
                <QuestionList number = "13" name = "Kadanes Algo [V.V.V.V.V. IMP]" link = "array_13" status = "Not Complete" />
                <QuestionList number = "14" name = "Merge Intervals" link = "array_14" status = "Not Complete" />
                <QuestionList number = "15" name = "Next Permutation" link = "array_15" status = "Not Complete" />
                <QuestionList number = "16" name = "Count Inversion" link = "array_16" status = "Not Complete" />
                <QuestionList number = "17" name = "Best time to buy and Sell stock" link = "array_17" status = "Not Complete" />
                <QuestionList number = "18" name = "Find all pairs on integer array whose sum is equal to given number" link = "array_18" status = "Not Complete" />
                <QuestionList number = "19" name = "Find common elements In 3 sorted arrays" link = "array_19" status = "Not Complete" />
                <QuestionList number = "20" name = "Rearrange the array in alternating positive and negative items with O(1) extra space" link = "array_20" status = "Not Complete" />
                <QuestionList number = "21" name = "Find if there is any subarray with sum equal to 0" link = "array_21" status = "Not Complete" />
                <QuestionList number = "22" name = "Find factorial of a large number" link = "array_22" status = "Not Complete" />
                <QuestionList number = "23" name = "Find maximum product subarray" link = "array_23" status = "Not Complete" />
                <QuestionList number = "24" name = "Find longest consecutive subsequence" link = "array_24" status = "Not Complete" />
                <QuestionList number = "25" name = "Given an array of size n and a number k, fin all elements that appear more than “ n/k ” times" link = "array_25" status = "Not Complete" />
                <QuestionList number = "26" name = "Maximum profit by buying and selling a share at most twice" link = "array_26" status = "Not Complete" />
                <QuestionList number = "27" name = "Find whether an array is a subset of another array" link = "array_27" status = "Not Complete" />
                <QuestionList number = "28" name = "Find the triplet that sum to a given value" link = "array_28" status = "Not Complete" />
                <QuestionList number = "29" name = "Trapping Rain water problem" link = "array_29" status = "Not Complete" />
                <QuestionList number = "30" name = "Chocolate Distribution problem" link = "array_30" status = "Not Complete" />
                <QuestionList number = "31" name = "Smallest Subarray with sum greater than a given value" link = "array_31" status = "Not Complete" />
                <QuestionList number = "32" name = "Three way partitioning of an array around a given value" link = "array_32" status = "Not Complete" />
                <QuestionList number = "33" name = "Minimum swaps required bring elements less equal K together" link = "array_33" status = "Not Complete" />
                <QuestionList number = "34" name = "Minimum no. of operations required to make an array palindrome" link = "array_34" status = "Not Complete" />
                <QuestionList number = "35" name = "Median of 2 sorted arrays of equal size" link = "array_35" status = "Not Complete" />
                <QuestionList number = "36" name = "Median of 2 sorted arrays of different size" link = "array_36" status = "Not Complete" />
            </tbody>
        </table>
    </div>
}