import { NavBar, Question, Code } from "../../components";

export default function Array36(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Median of 2 sorted arrays of different size"
                statement={`Given two sorted arrays 'a' and 'b' of size 'n' and 'm' respectively.
                    Find the median of the two sorted arrays.
                    Median is defined as the middle value of a sorted list of numbers. In case the length of list is even, median is the average of the two middle elements.
                    The expected time complexity is O(min(logn, logm)), where 'n' and 'm' are the sizes of arrays 'a' and 'b', respectively, and the expected space complexity is O(1).
                    Input: 'a' = [2, 4, 6] and 'b' = [1, 3, 5]
                    Output: 3.5
                    Explanation: The array after merging 'a' and 'b' will be { 1, 2, 3, 4, 5, 6 }. Here two medians are 3 and 4. So the median will be the average of 3 and 4, which is 3.5.`}
                input={`The first line contains two space-separated integers ‘n’ and ‘m’ representing the sizes of the two arrays.
                    The second line contains 'n' space-separated integers representing the elements of the first array.
                    The third line contains 'm' space-separated integers representing the elements of the second array.`}
                output={`Print a single line containing a single value denoting the median of the combined array.`}
                constraints={`1 <= 'n' <= 10 ^ 6
                    1 <= 'm' <= 10 ^ 6
                    1 <= 'a[i]' <= 10 ^ 9
                    1 <= 'b[i]' <= 10 ^ 9
                    Time limit: 1 sec.`}
                sampleinput1={`3 3
                    2 4 6
                    1 3 5`}
                sampleoutput1={`3.5`}
                explanation1={`The array after merging 'a' and 'b' will be { 1, 2, 3, 4, 5, 6 }. 
                    Here two medians are 3 and 4. So the median will be the average of 3 and 4, which is 3.5.`}
                sampleinput2={`3 2
                    2 4 6
                    1 3  `}
                sampleoutput2={`3`}
                explanation2={`The array after merging 'a' and 'b' will be { 1, 2, 3, 4, 6 }. 
                    The median is 3.`}
                sampleinput3={`3 3
                    1 2 2
                    2 4 4`}
                sampleoutput3={`2.0`}
                explanation3={`The array after merging 'a' and 'b' will be { 1, 2, 2, 2, 4, 4 }. 
                    Here two medians are 2 and 2. So the median will be the average of 2 and 2, which is 2.`}
                />
            <Code file_link="array/array_36" />
        </div>
    </div>
}