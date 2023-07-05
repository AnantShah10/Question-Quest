import { NavBar, Question, Code } from "../../components";

export default function Trie03(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Word Break Problem | [Trie solution]"
                statement={`You are given a list of “N” strings A. Your task is to check whether you can form a given target string using a combination of one or more strings of A.
                    You can use any string of A multiple times.
                    A =[“coding”, ”ninjas”, “is”, “awesome”]  target = “codingninjas”
                    Ans = true as we use “coding” and “ninjas” to form “codingninjas”`}
                
                input={`The first line of input contains a single integer T, representing the number of test cases or queries to be run. 
                    Then the T test cases follow.                    
                    The first line of each test contains a single integer N denoting the total number of strings in A.
                    The second line of each test contains “N” space-separated strings of A.                    
                    The third line of each test contains a single string target. `}
                output={`For each test case, print 1 if you can form a target string else print 0.
                    The output of each test case will be printed in a separate line.`}
                constraints={`1 <= T <= 5 
                    1 <= N, | target | <= 10^2
                    1 <= | A[i] | <= 10                
                    Where | A[i] | denotes length of string i,| target | denotes the length of the string target and A[i] contains only lowercase English characters.                
                    Time limit: 1 sec`}
                sampleinput1={`2 
                    2
                    ab cd
                    abcd
                    2
                    do the
                    hello`}
                sampleoutput1={`1
                    0`}
                explanation1={`For the first test case, A = [ “ab”, “cd”], target = “abcd”
                    We can get “abcd” using “ab” and “cd”
                    So answer will be 1.
                    
                    For the second test case, A = [ “do”, “the”], target = “hello”
                    We can’t make a target using one or more strings of A.
                    So the answer will be 0.`}
                sampleinput2={`2 
                    2
                    aa a
                    aaaaa
                    1
                    do
                    d`}
                sampleoutput2={`1
                    0`}
                explanation2={`For the first test case, A =[ “aa”, “a”], target = “aaaaa”
                    We can use “a” 5 times to get “aaaaa”.
                    So the answer will be 1.
                    
                    For the second test case, A =[ “do”], target = “d”
                    We can’t make d using [“do”].
                    So the answer will be 0.`}
                />
            <Code file_link="trie/trie_03" />
        </div>
    </>
}