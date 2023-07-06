import { NavBar, Question, Code } from "../../components";

export default function BitManipulation10(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Power Set"
                statement={`Given a string S, Find all the possible subsequences of the String in lexicographically-sorted order.
                You don't need to read input or print anything. Your task is to complete the function AllPossibleStrings() which takes S as the input parameter and returns a list of all possible subsequences (non-empty) that can be formed from S in lexicographically-sorted order. `}
                constraints={`1 <= Length of String <= 16 `}
                sampleinput1={`str = "abc"
                `}
                sampleoutput1={`a ab abc ac b bc c
                `}
                explanation1={`There are 7 subsequences that 
                can be formed from abc.`}
                sampleinput2={`str = "aa"`}
                sampleoutput2={`a a aa`}
                explanation2={`There are 3 subsequences that can be formed from aa.`}
                
                />
            <Code file_link="bit_manipulation/bit_manipulation_10" />
        </div>
    </>
}