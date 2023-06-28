import "./index.scss";

import { NavBar, QuestionList } from "../../components";

export default function DynamicProgramming(props) {
    return <div>
        <NavBar />
        <div className="title">Dynamic Programming Questions</div>
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
                <QuestionList number = "1" name = "Coin Change Problem" link = "" status = "Not Complete" />
                <QuestionList number = "2" name = "Knapsack Problem" link = "" status = "Not Complete" />
                <QuestionList number = "3" name = "Binomial Coefficient Problem" link = "" status = "Not Complete" />
                <QuestionList number = "4" name = "Permutation Coefficient Problem" link = "" status = "Not Complete" />
                <QuestionList number = "5" name = "Program for nth Catalan Number" link = "" status = "Not Complete" />
                <QuestionList number = "6" name = "Matrix Chain Multiplication" link = "" status = "Not Complete" />
                <QuestionList number = "7" name = "Edit Distance" link = "" status = "Not Complete" />
                <QuestionList number = "8" name = "Subset Sum Problem" link = "" status = "Not Complete" />
                <QuestionList number = "9" name = "Friends Pairing Problem" link = "" status = "Not Complete" />
                <QuestionList number = "10" name = "Gold Mine Problem" link = "" status = "Not Complete" />
                <QuestionList number = "11" name = "Assembly Line Scheduling Problem" link = "" status = "Not Complete" />
                <QuestionList number = "12" name = "Painting the Fence problem" link = "" status = "Not Complete" />
                <QuestionList number = "13" name = "Maximize The Cut Segments" link = "" status = "Not Complete" />
                <QuestionList number = "14" name = "Longest Common Subsequence" link = "" status = "Not Complete" />
                <QuestionList number = "15" name = "Longest Repeated Subsequence" link = "" status = "Not Complete" />
                <QuestionList number = "16" name = "Longest Increasing Subsequence" link = "" status = "Not Complete" />
                <QuestionList number = "17" name = "Space Optimized Solution of LCS" link = "" status = "Not Complete" />
                <QuestionList number = "18" name = "LCS [Longest Common Subsequence] of three strings" link = "" status = "Not Complete" />
                <QuestionList number = "19" name = "Maximum Sum Increasing Subsequence" link = "" status = "Not Complete" />
                <QuestionList number = "20" name = "Count all subsequences having product less than K" link = "" status = "Not Complete" />
                <QuestionList number = "21" name = "Longest subsequence such that difference between adjacent is one" link = "" status = "Not Complete" />
                <QuestionList number = "22" name = "Maximum subsequence sum such that no three are consecutive" link = "" status = "Not Complete" />
                <QuestionList number = "23" name = "Egg Dropping Problem" link = "" status = "Not Complete" />
                <QuestionList number = "24" name = "Maximum Length Chain of Pairs" link = "" status = "Not Complete" />
                <QuestionList number = "25" name = "Maximum size square sub-matrix with all 1s" link = "" status = "Not Complete" />
                <QuestionList number = "26" name = "Maximum sum of pairs with specific difference" link = "" status = "Not Complete" />
                <QuestionList number = "27" name = "Min Cost Path Problem" link = "" status = "Not Complete" />
                <QuestionList number = "28" name = "Maximum difference of zeros and ones in binary string" link = "" status = "Not Complete" />
                <QuestionList number = "29" name = "Minimum number of jumps to reach end" link = "" status = "Not Complete" />
                <QuestionList number = "30" name = "Minimum cost to fill given weight in a bag" link = "" status = "Not Complete" />
                <QuestionList number = "31" name = "Minimum removals from array to make max –min <= K" link = "" status = "Not Complete" />
                <QuestionList number = "32" name = "Longest Common Substring" link = "" status = "Not Complete" />
                <QuestionList number = "33" name = "Count number of ways to reach a given score in a game" link = "" status = "Not Complete" />
                <QuestionList number = "34" name = "Count Balanced Binary Trees of Height h" link = "" status = "Not Complete" />
                <QuestionList number = "35" name = "LargestSum Contiguous Subarray [V.V.V.V. IMP ]" link = "" status = "Not Complete" />
                <QuestionList number = "36" name = "Smallest sum contiguous subarray" link = "" status = "Not Complete" />
                <QuestionList number = "37" name = "Unbounded Knapsack [Repetition of items allowed]" link = "" status = "Not Complete" />
                <QuestionList number = "38" name = "Word Break Problem" link = "" status = "Not Complete" />
                <QuestionList number = "39" name = "Largest Independent Set Problem" link = "" status = "Not Complete" />
                <QuestionList number = "40" name = "Partition problem" link = "" status = "Not Complete" />
                <QuestionList number = "41" name = "Longest Palindromic Subsequence" link = "" status = "Not Complete" />
                <QuestionList number = "42" name = "Count All Palindromic Subsequence in a given String" link = "" status = "Not Complete" />
                <QuestionList number = "43" name = "Longest Palindromic Substring" link = "" status = "Not Complete" />
                <QuestionList number = "44" name = "Longest alternating subsequence" link = "" status = "Not Complete" />
                <QuestionList number = "45" name = "Weighted Job Scheduling" link = "" status = "Not Complete" />
                <QuestionList number = "46" name = "Coin game winner where every player has three choices" link = "" status = "Not Complete" />
                <QuestionList number = "47" name = "Count Derangements [Permutation such that no element appears in its original position] [IMP]" link = "" status = "Not Complete" />
                <QuestionList number = "48" name = "Maximum profit by buying and selling a share at most twice [IMP]" link = "" status = "Not Complete" />
                <QuestionList number = "49" name = "Optimal Strategy for a Game" link = "" status = "Not Complete" />
                <QuestionList number = "50" name = "Optimal Binary Search Tree" link = "" status = "Not Complete" />
                <QuestionList number = "51" name = "Palindrome Partitioning Problem" link = "" status = "Not Complete" />
                <QuestionList number = "52" name = "Word Wrap Problem" link = "" status = "Not Complete" />
                <QuestionList number = "53" name = "Mobile Numeric Keypad Problem [IMP]" link = "" status = "Not Complete" />
                <QuestionList number = "54" name = "Boolean Parenthesization Problem" link = "" status = "Not Complete" />
                <QuestionList number = "55" name = "Largest rectangular sub-matrix whose sum is 0" link = "" status = "Not Complete" />
                <QuestionList number = "56" name = "Largest area rectangular sub-matrix with equal number of 1’s and 0’s [IMP]" link = "" status = "Not Complete" />
                <QuestionList number = "57" name = "Maximum sum rectangle in a 2D matrix" link = "" status = "Not Complete" />
                <QuestionList number = "58" name = "Maximum profit by buying and selling a share at most k times" link = "" status = "Not Complete" />
                <QuestionList number = "59" name = "Find if a string is interleaved of two other strings" link = "" status = "Not Complete" />
                <QuestionList number = "60" name = "Maximum Length of Pair Chain" link = "" status = "Not Complete" />
            </tbody>
        </table>
    </div>
}