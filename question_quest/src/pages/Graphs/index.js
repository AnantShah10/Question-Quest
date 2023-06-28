import "./index.scss";

import { NavBar, QuestionList } from "../../components";

export default function Graphs(props) {
    return <div>
        <NavBar />
        <div className="title">Graphs Questions</div>
        <table>
            <thead>
                <tr>
                    <th style = {{width: "10%"}} >Number</th>
                    <th style = {{width: "40%"}}>Question</th>
                    <th style = {{width: "10%"}}>Link</th>
                    <th style = {{width: "15%"}}>Status</th>
                </tr>
            </thead>
            <tbody>
                <QuestionList number = "1" name = "Create a Graph, print it" link = "" status = "Not Complete" />
                <QuestionList number = "2" name = "Create a Graph [For Practice]" link = "" status = "Not Complete" />
                <QuestionList number = "3" name = "Implement BFS algorithm" link = "" status = "Not Complete" />
                <QuestionList number = "4" name = "Implement DFS Algo" link = "" status = "Not Complete" />
                <QuestionList number = "5" name = "Detect Cycle in Directed Graph using BFS/DFS Algo" link = "" status = "Not Complete" />
                <QuestionList number = "6" name = "Detect Cycle in UnDirected Graph using BFS/DFS Algo" link = "" status = "Not Complete" />
                <QuestionList number = "7" name = "Search in a Maze" link = "" status = "Not Complete" />
                <QuestionList number = "8" name = "Minimum Step by Knight" link = "" status = "Not Complete" />
                <QuestionList number = "9" name = "Flood fill algo" link = "" status = "Not Complete" />
                <QuestionList number = "10" name = "Clone a graph" link = "" status = "Not Complete" />
                <QuestionList number = "11" name = "Making wired Connections" link = "" status = "Not Complete" />
                <QuestionList number = "12" name = "Word Ladder" link = "" status = "Not Complete" />
                <QuestionList number = "13" name = "Dijkstra algo" link = "" status = "Not Complete" />
                <QuestionList number = "14" name = "Implement Topological Sort" link = "" status = "Not Complete" />
                <QuestionList number = "15" name = "Minimum time taken by each job to be completed given by a Directed Acyclic Graph" link = "" status = "Not Complete" />
                <QuestionList number = "16" name = "Find whether it is possible to finish all tasks or not from given dependencies" link = "" status = "Not Complete" />
                <QuestionList number = "17" name = "Find the no. of Islands" link = "" status = "Not Complete" />
                <QuestionList number = "18" name = "Given a sorted Dictionary of an Alien Language, find order of characters" link = "" status = "Not Complete" />
                <QuestionList number = "19" name = "Implement Kruksal’s Algorithm" link = "" status = "Not Complete" />
                <QuestionList number = "20" name = "Implement Prim’s Algorithm" link = "" status = "Not Complete" />
                <QuestionList number = "21" name = "Total no. of Spanning tree in a graph" link = "" status = "Not Complete" />
                <QuestionList number = "22" name = "Implement Bellman Ford Algorithm" link = "" status = "Not Complete" />
                <QuestionList number = "23" name = "Implement Floyd warshall Algorithm" link = "" status = "Not Complete" />
                <QuestionList number = "24" name = "Travelling Salesman Problem" link = "" status = "Not Complete" />
                <QuestionList number = "25" name = "Graph Colouring Problem" link = "" status = "Not Complete" />
                <QuestionList number = "26" name = "Snake and Ladders Problem" link = "" status = "Not Complete" />
                <QuestionList number = "27" name = "Find bridge in a graph" link = "" status = "Not Complete" />
                <QuestionList number = "28" name = "Count Strongly connected Components [Kosaraju Algo]" link = "" status = "Not Complete" />
                <QuestionList number = "29" name = "Check whether a graph is Bipartite or Not" link = "" status = "Not Complete" />
                <QuestionList number = "30" name = "Detect Negative cycle in a graph" link = "" status = "Not Complete" />
                <QuestionList number = "31" name = "Longest path in a Directed Acyclic Graph" link = "" status = "Not Complete" />
                <QuestionList number = "32" name = "Journey to the Moon" link = "" status = "Not Complete" />
                <QuestionList number = "33" name = "Cheapest Flights Within K Stops" link = "" status = "Not Complete" />
                <QuestionList number = "34" name = "Oliver and the Game" link = "" status = "Not Complete" />
                <QuestionList number = "35" name = "Water Jug problem using BFS" link = "" status = "Not Complete" />
                <QuestionList number = "36" name = "Find if there is a path of more thank length from a source" link = "" status = "Not Complete" />
                <QuestionList number = "37" name = "M-Colouring Problem" link = "" status = "Not Complete" />
                <QuestionList number = "38" name = "Minimum edges to reverse to make path from source to destination" link = "" status = "Not Complete" />
                <QuestionList number = "39" name = "Paths to travel each nodes using each edge [Seven Bridges]" link = "" status = "Not Complete" />
                <QuestionList number = "40" name = "Vertex Cover Problem" link = "" status = "Not Complete" />
                <QuestionList number = "41" name = "Chinese Postman or Route Inspection" link = "" status = "Not Complete" />
                <QuestionList number = "42" name = "Number of Triangles in a Directed and Undirected Graph" link = "" status = "Not Complete" />
                <QuestionList number = "43" name = "Minimise the cashflow among a given set of friends who have borrowed money from each other" link = "" status = "Not Complete" />
                <QuestionList number = "44" name = "Two Clique Problem" link = "" status = "Not Complete" />
            </tbody>
        </table>
    </div>
}