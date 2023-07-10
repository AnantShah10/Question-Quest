import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting21(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Kth smallest number again"
                statement={`You are given a list of ‘N’ ranges of integers. A range can be represented as (‘start’, ‘end’) where ‘end’ >= ‘start’ and all the integers between ‘start’ and ‘end’ (inclusive) belong to that range.
                You need to answer ‘M’ independent queries. In each query, you are given an integer ‘K’ and you need to find the Kth smallest integer of the sequence formed by all the distinct integers of these ‘N’ ranges.
                For Example:
                Let ‘N’= 5,  ‘ranges’ be [(5, 7), (6, 8), (3, 6), (10, 11), (15, 15)], ‘M’ = 3 and these 3 queries are given by array ‘queries’ = [4, 2, 8].
                Then the sequence formed by distinct integers present between these ranges in ascending order is [3, 4, 5, 6, 7, 8, 10, 11, 15].
                So, 
                The 4th smallest element of this sequence is 6.
                The 2nd smallest element of this sequence is 4.
                The 8th smallest element of this sequence is 11.`}
                input={`The first line of input contains an integer ‘T’ denoting the number of test cases.
                The description of ‘T’ test cases follows-:
                The first line of each test case contains two space-separated integers  ‘N’ and ‘M’ representing the number of ranges and number of queries respectively.
                Next ‘N’ lines of the test case contain two space-separated integers, ‘start’ and ‘end’, denoting the starting and the ending point of the ith range.
                The last line of the test cases contains ‘M’ space-separated integers representing ‘M’ queries.
                `}
                output={`For each test case, print a line consisting of M space-separated integers where the ith integer represents the answer of the ith query.`}
                constraints={`1 <= T <= 50
                1 <= N <= 10^4
                1 <= M <= 10^4
                1 <= K <= 10^9
                1 <= start <= end <= 10^9
                Where ‘T’ is the total number of test cases, ‘N’ is the number of ranges, ‘M’ is the number of queries, ‘K’ is the integer in the query, and ‘start’ and ‘end’ represent the first and the last integer of ranges,
                Time Limit: 1 sec`}
                sampleinput1={`2
                4 4
                5 6 1 2 1 1 1 2
                1 2 3 5
                5 3
                5 7 6 8 3 6 10 11 15 15
                4 2 8`}
                sampleoutput1={`1 2 5 -1
                6 4 11`}
                explanation1={`Test case 1:
                Here, ‘N’ = 4, ‘ranges’ = [(5, 6), (1,  2), (1, 1), (1, 2)] , ‘M’ = 4 and queries = [1, 2, 3, 5].
                Then the sequence formed by a distinct integer present between these ranges in ascending order is [1, 2, 5, 6].
                So, 
                The 1st smallest element of this sequence is 1.
                The 2nd smallest element of this sequence is 2.
                The 3rd smallest element of this sequence is 5.
                There exist only four elements in this array so the answer for ‘K’ = 5  is -1.
                Test case 2:
                See problem statement for an explanation.`}
                sampleinput2={`2
                1 3
                2 7
                1 2 3
                2 1
                5 4 3 2
                7`}
                sampleoutput2={`2 3 4
                -1`}
                explanation2={`Test case 1:
                Here, ‘N’ = 1, ‘ranges’ = [(2, 7)] , ‘M’ = 3 and queries = [1, 2, 3].
                Then the sequence formed by a distinct integer present between these ranges in ascending order is [2, 3, 4, 5, 6, 7].
                So, 
                The 1st smallest element of this sequence is 2.
                The 2nd smallest element of this sequence is 3.
                The 3rd smallest element of this sequence is 4.
                Test case 2:
                Here, ‘N’ = 2, ‘ranges’ = [(5, 4), (3, 2)] , ‘M’ = 1 and queries = [7].
                Then the sequence formed by a distinct integer present between these ranges in ascending order is [2, 3, 4, 5].
                So, 
                There exist only four elements in this array so the answer for ‘K’ = 7  is -1.`}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_21" />
        </div>
    </>
}