import { NavBar, Question, Code } from "../../components";

export default function Trie02(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Find shortest unique prefix for every word in a given list"
                statement={`You are given an array containing ‘N’ words. For each word, you need to find its shortest prefix which can uniquely identify it. For example “abcd” and “abdc” both have the prefix “ab” in common so we can’t uniquely find a word using the prefix “ab”. To uniquely identify both the words we need the prefix “abc” from “abcd” and “abd” from “abdc”.
                    You can assume that the words are unique. It means that it is always possible to find a unique prefix for each word.`}
                input={`The first line of the input contains an integer ‘T’ denoting the number of test cases.
                    The next ‘2*T’ lines describe the ‘T’ test cases.                    
                    The first line of each test case contains single positive integers ‘N’ denoting the number of words.
                    The next ‘N’ lines contain a string of lower case characters.`}
                output={`The output of each test case should contain 'N' lines, in the ith line you need to print the shortest unique prefix for ith word.
                    Print the output of each test case in a separate line.
                `}
                constraints={`1 <= T <= 50
                    1 <= N <= 10^4                  
                    Where ‘T’ is the number of test cases, ‘N’ is the number of words and, the sum of the lengths of all the words in a test case is less than 10^4.
                    Time Limit: 1 sec`}
                sampleinput1={`2
                    2
                    abcd
                    acdb
                    3
                    many
                    mango
                    mad`}
                sampleoutput1={`ab
                    ac
                    many
                    mang
                    mad`}
                explanation1={`Test case 1:
                    The string “abcd” and “acbd” have a common prefix “a” which can’t be used as a unique prefix so to make a unique prefix we will add one more character to “a” from each word. The “ab” for “abcd” and prefix “ac” for “acbd” is now the shortest and unique prefix.
                    
                    
                    Test case 2:
                    For string “many” the prefix “m” and “ma” is common in“mango” and “mad”. Similarly “man” is again common in “mango”. “Many” itself will be the unique shortest prefix.
                    
                    For string “mango” we have the string ”many” such that “man” is common in both of them so for “mango” the prefix “mang” will the unique shorted prefix.
                    
                    For string “mad” we have strings “many” and “mango” such that   “ma” is common in all of them. “Mad” itself will be a unique shortest prefix.`}
                sampleinput2={`2
                    3
                    sample
                    same
                    sort
                    2
                    quick
                    merge`}
                sampleoutput2={`samp
                    same
                    so
                    q
                    m`}
                />
            <Code file_link="trie/trie_02" />
        </div>
    </>
}