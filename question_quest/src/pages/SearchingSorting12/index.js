import { NavBar, Question, Code } from "../../components";

export default function SearchingSorting12(props) {
    return <>
        <NavBar />
        <div className="split">
            <Question 
                name="Maximum sum such that no 2 elements are adjacent"
                statement={`Given a graph with 'V' vertices numbered from 0 to 'V' - 1 and 'E' edges. Determine if it is a tree or not?`}
                input={`The first line of input contains two integers 'E' and 'V', separated by a single space. They denote the total number of edges and vertices respectively. 
                From the second line onwards, the next 'V' lines represent an edge between the two vertices.
                Every edge is represented by two vertices(u, v) that share an edge between them. The values of the vertices would again be separated by a single space.`}
                output={`The only line of output prints 'True' if the given graph is a tree, otherwise print 'False'. `}
                constraints={`1 < 'V' <= 10^5
                0 <= 'E' <= min(10^5, V*(V-1)/2)
                0 <= u, v <= V-1
                Time Limit: 1 sec`}
                sampleinput1={`3 2
                0 1
                1 2`}
                sampleoutput1={`True`}
                explanation1={`We clearly can see that it is a tree since it satisfies the property of a tree.`}
                sampleinput2={`3 3
                0 1
                1 2
                0 2`}
                sampleoutput2={`False`}
                />
            <Code file_link="/searching_and_sorting/searching_and_sorting_12" />
        </div>
    </>
}