import { NavBar, Question, Code } from "../../components";

export default function Trie01(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Construct a trie from scratch"
                statement={`Implement Trie Data Structure to support these operations:
                insert(word) - To insert a string "word" in Trie
                search(word) - To check if string "word" is present in Trie or not.
                startsWith(word) - To check if there is any string in the Trie that starts with the given prefix string "word".
                Three type of queries denote these operations:
                Type 1: To insert a string "word" in Trie.
                1 word
                Type 2: To check if the string "word" is present in Trie or not.
                2 word
                Type 3: To check if there is any string in the Trie that starts with the given prefix string "word".
                3 word
`}
                input={`The first line contains an Integer 'Q' which denotes the number of queries to be run. Then next 'Q' lines denote each query:
                The first and only line of each query contains the type of query and a string "word" separated by a single space.
                `}
                output={`For each query of Type 2 print the string "true" if string "word" is present in Trie or "false" otherwise.
                For each query of Type 3 print the string "true" if there is any string in the Trie that starts with the given prefix string "word" or "false" otherwise.
                Output for every query will be printed in a separate line.
                `}
                constraints={`1 <= Q <= 5*10^4
                1 <= W <= 10                
                Where 'Q' is the number of queries, and 'W' is the length of the "word".
                All input of "word" will consist of only lowercase letters a-z.
                `}
                sampleinput1={`5
                1 hello
                1 help
                2 help
                3 hel
                2 hel `}
                sampleoutput1={`true
                true
                false`}
                explanation1={`Query 1: "hello" is inserted
                Query 2: "help" is inserted
                Query 3: "true" is printed as "help" is present
                Query 4: "true" is printed as "hello" and "help" is present having the prefix "hel"
                Query 5: "false" is printed as "hel" is not present
                `}
                sampleinput2={`10
                1 aaaa
                1 aaaaaa
                1 bcd
                2 aaaaa
                3 aaaaa
                3 bc
                2 bc
                1 bc
                3 bcda
                2 bc`}
                sampleoutput2={`false
                true
                true
                false
                false
                true `}
                explanation2={`Query 1: "aaaa" is inserted
                Query 2: "aaaaaa" is inserted
                Query 3: "bcd" is inserted
                Query 4: "false" is printed as "aaaaa" is not present
                Query 5: "true" is printed as "aaaaaa" is present having the prefix "aaaaa"
                Query 6: "true" is printed as "bcd" is present having the prefix "bc"
                Query 7: "false" is printed as "bc" is not present
                Query 8: "bc" is inserted
                Query 9: "false" is printed as no word is present having the prefix "bcda"
                Query 10: "true" is printed as "bc" is present
                `}
                />
            <Code file_link="trie/trie_01" />
        </div>
    </>
}