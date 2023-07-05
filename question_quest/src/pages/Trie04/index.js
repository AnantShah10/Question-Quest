import { NavBar, Question, Code } from "../../components";


export default function Trie04(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Given a sequence of words, print all anagrams together"
                statement={`You have been given an array/list of strings 'inputStr'. You are supposed to return the strings as groups of anagrams such that strings belonging to a particular group are anagrams of one another.
                    An anagram is a word or phrase formed by rearranging the letters of a different word or phrase. We can generalize this in string processing by saying that an anagram of a string is another string with the same quantity of each character in it, in any order.
                    The order in which the groups and members of the groups are printed does not matter.
                    inputStr = {"eat","tea","tan","ate","nat","bat"}
                    Here {“tea”, “ate”,” eat”} and {“nat”, “tan”} are grouped as anagrams. Since there is no such string in “inputStr” which can be an anagram of “bat”, thus, “bat” will be the only member in its group.`}
                input={`The first line contains an integer 'T', which denotes the number of test cases or queries to be run. Then the test cases follow.
                    The first line of each test case contains an integer 'N' which denotes the number of strings.                
                    The next line contains 'N' single space-separated strings. The strings consist of lower case English alphabets only.`}
                output={`For each test case/query, print the anagrams belonging to the same group in a single line, where all the anagrams are separated by a single space, and each group will be printed in a separate line.
                    The output for every test case will be printed in a separate line.`}
                constraints={`1<= T <= 50
                    1<= N <= 100
                    1<= K <= 10                    
                    Where 'T' is the number of test cases, 'N' is the length of the given array/list of strings and ‘K’ is the maximum length of a string in the given array/list.
                    Time limit: 1 sec.`}
                sampleinput1={`2
                    4
                    abab baba aabb abbc
                    5
                    aecd bcda acbd abdc acda`}
                sampleoutput1={`aabb abab baba
                    abbc
                    abdc acbd bcda
                    acda
                    aecd`}
                explanation1={`In the first test case, in the first group ["aabb", "abab", "baba"], all the strings are anagrams of one another and in the second group ["abbc"] has no anagram, so it's the only member in its group.
                    In the second test case, in the first group ["abdc", "acbd", "bcda"] all the strings are anagrams of one another, and in second and third group, both ["acda"] and ["aecd"] have no anagram, so they are the only member in their group `}
                sampleinput2={`2
                    6
                    eat tea tan ate nat bat
                    5
                    cat dog tac god act`}
                sampleoutput2={`ate eat tea 
                    bat
                    nat tan
                    act cat tac
                    dog god`}
                explanation2={`In the first test case, in the first group ["ate", "eat", "tea"] and the third group [“nat”, “tan”], all the strings are anagrams of one another and in the second group ["bat"] has no anagram, so it's the only member in its group and, 

                In the second test case, in the first group ["act", "cat", "tac"] and in the second group ["dog", "god"], all the strings are anagrams of one another.`}
                />
            <Code file_link="trie/trie_04" />
        </div>
    </>
}
