import { NavBar, Question, Code } from "../../components";

export default function Array16(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Count Inversion"
                statement={`For a given integer array/list 'ARR' of size 'N' containing all distinct values, find the total number of 'Inversions' that may exist.
                    An inversion is defined for a pair of integers in the array/list when the following two conditions are met.
                    A pair ('ARR[i]', 'ARR[j]') is said to be an inversion when:
                    1. 'ARR[i] > 'ARR[j]' 
                    2. 'i' < 'j'
                    Where 'i' and 'j' denote the indices ranging from [0, 'N').`}
                input={`The first line of input contains an integer 'N', denoting the size of the array.
                    The second line of input contains 'N' integers separated by a single space, denoting the elements of the array 'ARR'.`}
                output={`Print a single line containing a single integer that denotes the total count of inversions in the input array.`}
                constraints={`1 <= N <= 10^5 
                    1 <= ARR[i] <= 10^9
                    Where 'ARR[i]' denotes the array element at 'ith' index.
                    Time Limit: 1 sec`}
                sampleinput1={`3
                    3 2 1`}
                sampleoutput1={`3`}
                explanation1={`We have a total of 3 pairs which satisfy the condition of inversion. (3, 2), (2, 1) and (3, 1).`}
                sampleinput2={`5
                    2 5 1 3 4`}
                sampleoutput2={`4`}
                explanation2={`We have a total of 4 pairs which satisfy the condition of inversion. (2, 1), (5, 1), (5, 3) and (5, 4).`}
                />
            <Code file_link="array/array_16" />
        </div>
    </div>
}