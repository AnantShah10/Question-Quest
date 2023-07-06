import { NavBar, Question, Code } from "../../components";

export default function Array07(props) {
    return <div>
        <NavBar />
        <div className="split">
            <Question 
                name="Write a program to cyclically rotate an array by one"
                statement={`Given an array with N elements, the task is to rotate the array to the left by K steps, where K is non-negative.`}
                input={`The first line contains an integer N representing the size of the array.
                    The second line contains N space-separated integers representing the elements of the array.
                    The last line contains an integer K representing the number of times the array has to be rotated in the left direction. `}
                output={`The only line of the output prints N space-separated integers representing the Rotated array elements.`}
                constraints={`1 <= N <= 10^3
                    1 <= arr[i] <= 10^9
                    1 <= K < N`}
                sampleinput1={`8
                    7 5 2 11 2 43 1 1
                    2`}
                sampleoutput1={`2 11 2 43 1 1 7 5`}
                explanation1={`Rotate 1 steps to the left: 5 2 11 2 43 1 1 7
                    Rotate 2 steps to the left: 2 11 2 43 1 1 7 5`}
                />
            <Code file_link="array/array_07" />
        </div>
    </div>
}