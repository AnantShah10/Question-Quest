import { NavBar, Question, Code } from "../../components";

export default function Trie05(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Implement a Phone Directory"
                statement={`You are given a list/array of strings which denotes the contacts that exist in your phone directory. The search query on a string ‘str’ which is a query string displays all the contacts which are present in the given directory with the prefix as ‘str’. One special property of the search function is that when a user searches for a contact from the contact list then suggestions (contacts with prefix as the string entered so for) are shown after the user enters each character.
                    If no suggestions are found, return an empty 2D array.
                    In the below example everytime we enter a character, a few suggestions display the strings which contain the entered string as prefixes.`}
                input={`The first line contains a single integer ‘T’ denoting the number of test cases.
                    The first line of each test case contains a single integer ‘N’ denoting the number of elements in the array/list.              
                    The second line contains ‘N’ single space-separated strings denoting the contacts of the given array/list or contact list.                
                    The third line contains a single string denoting the query string.
                `}
                output={`For each test case, for the given query string you need to print all the possible contacts or suggestions that are present in the given directory corresponding to each entered character in the given query string. 
                    If no suggestions are found then the message “No suggestions found” is printed.`}
                constraints={`1 <= T <= 50
                    1 <= N <= 100
                    1 <= len <= 10
                    ARR[i] contains lowercase English alphabets.                    
                    All the given strings contain lowercase English alphabets.                    
                    Time Limit: 1 sec.`}
                sampleinput1={`2
                    5
                    cod coding codding code coly
                    coding
                    2
                    ninjas coding
                    ninja`}
                sampleoutput1={`cod coding codding code coly
                    cod coding codding code coly
                    cod coding codding code coly
                    coding
                    coding
                    coding
                    ninjas
                    ninjas
                    ninjas
                    ninjas
                    ninjas`}
                explanation1={`In the first test case, 
                    The suggestions for “c” is {“cod”, “coding”, “codding”, “code”, “coly”}.
                    The suggestions for “co” is {“cod”, “coding”, “codding”, “code”, “coly”}.
                    The suggestions for “cod” is {“cod”, “coding”, “codding”, “code”, “coly”}.
                    The suggestion for “codi” is {“coding”}.
                    The suggestion for “codin” is {“coding”}.
                    The suggestion for “coding” is {“coding”}.
                    
                    In the second test case, 
                    The suggestion for “n” is {“ninjas”}.
                    The suggestion for “ni” is {“ninjas”}.
                    The suggestion for “nin” is {“ninjas”}.
                    The suggestion for “ninj” is {“ninjas”}.
                    The suggestion for “ninja” is {“ninjas”}.`}
                sampleinput2={`3
                    2
                    coding ninjas
                    cell
                    2
                    ab abc
                    a
                    2
                    ab abc
                    b`}
                sampleoutput2={`coding
                    ab abc
                    No suggestions found `}
                explanation2={`In the first test case, 
                    The suggestion for “c” is {“coding”}.
                    For the rest of the letters, there are no suggestions.
                    
                    In the second test case,
                    The suggestion for “a” is {“ab”, “abc”}.
                    
                    In the third test case, no suggestions are found.`}
                />
            <Code file_link="trie/trie_05" />
        </div>
    </>
}