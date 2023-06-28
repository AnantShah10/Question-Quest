import './styles/App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as Pages from "./pages/index.js";


function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages.Home />}></Route>
          <Route path="/dsa_cracker" element={<Pages.DSA />}></Route>
          <Route path="/dsa_cracker/array" element={<Pages.Array />}></Route>
          <Route path="/dsa_cracker/matrix" element={<Pages.Matrix />}></Route>
          <Route path="/dsa_cracker/strings" element={<Pages.Strings />}></Route>
          <Route path="/dsa_cracker/searching_and_sorting" element={<Pages.SearchingSorting />}></Route>
          <Route path="/dsa_cracker/linked_list" element={<Pages.LinkedList />}></Route>
          <Route path="/dsa_cracker/bit_manipulation" element={<Pages.BitManipulation />}></Route>
          <Route path="/dsa_cracker/greedy" element={<Pages.Greedy />}></Route>
          <Route path="/dsa_cracker/backtracking" element={<Pages.Backtracking />}></Route>
          <Route path="/dsa_cracker/dynamic_programming" element={<Pages.DynamicProgramming />}></Route>
          <Route path="/dsa_cracker/stacks_and_queues" element={<Pages.StacksQueues />}></Route>
          <Route path="/dsa_cracker/binary_trees" element={<Pages.BinaryTrees />}></Route>
          <Route path="/dsa_cracker/binary_search_tree" element={<Pages.BinarySearchTree />}></Route>
          <Route path="/dsa_cracker/graphs" element={<Pages.Graphs />}></Route>
          <Route path="/dsa_cracker/heap" element={<Pages.Heap />}></Route>
          <Route path="/dsa_cracker/trie" element={<Pages.Trie />}></Route>
          <Route path="/dsa_cracker/array/array_01" element={<Pages.Array01 />}></Route>
          <Route path="/dsa_cracker/array/array_02" element={<Pages.Array02 />}></Route>
          <Route path="/dsa_cracker/array/array_03" element={<Pages.Array03 />}></Route>
          <Route path="/dsa_cracker/array/array_04" element={<Pages.Array04 />}></Route>
          <Route path="/dsa_cracker/array/array_05" element={<Pages.Array05 />}></Route>
          <Route path="/dsa_cracker/array/array_06" element={<Pages.Array06 />}></Route>
          <Route path="/dsa_cracker/array/array_07" element={<Pages.Array07 />}></Route>
          <Route path="/dsa_cracker/array/array_08" element={<Pages.Array08 />}></Route>
          <Route path="/dsa_cracker/array/array_09" element={<Pages.Array09 />}></Route>
          <Route path="/dsa_cracker/array/array_10" element={<Pages.Array10 />}></Route>
          <Route path="/dsa_cracker/array/array_11" element={<Pages.Array11 />}></Route>
          <Route path="/dsa_cracker/array/array_12" element={<Pages.Array12 />}></Route>
          <Route path="/dsa_cracker/array/array_13" element={<Pages.Array13 />}></Route>
          <Route path="/dsa_cracker/array/array_14" element={<Pages.Array14 />}></Route>
          <Route path="/dsa_cracker/array/array_15" element={<Pages.Array15 />}></Route>
          <Route path="/dsa_cracker/array/array_16" element={<Pages.Array16 />}></Route>
          <Route path="/dsa_cracker/array/array_17" element={<Pages.Array17 />}></Route>
          <Route path="/dsa_cracker/array/array_18" element={<Pages.Array18 />}></Route>
          <Route path="/dsa_cracker/array/array_19" element={<Pages.Array19 />}></Route>
          <Route path="/dsa_cracker/array/array_20" element={<Pages.Array20 />}></Route>
          <Route path="/dsa_cracker/array/array_21" element={<Pages.Array21 />}></Route>
          <Route path="/dsa_cracker/array/array_22" element={<Pages.Array22 />}></Route>
          <Route path="/dsa_cracker/array/array_23" element={<Pages.Array23 />}></Route>
          <Route path="/dsa_cracker/array/array_24" element={<Pages.Array24 />}></Route>
          <Route path="/dsa_cracker/array/array_25" element={<Pages.Array25 />}></Route>
          <Route path="/dsa_cracker/array/array_26" element={<Pages.Array26 />}></Route>
          <Route path="/dsa_cracker/array/array_27" element={<Pages.Array27 />}></Route>
          <Route path="/dsa_cracker/array/array_28" element={<Pages.Array28 />}></Route>
          <Route path="/dsa_cracker/array/array_29" element={<Pages.Array29 />}></Route>
          <Route path="/dsa_cracker/array/array_30" element={<Pages.Array30 />}></Route>
          <Route path="/dsa_cracker/array/array_31" element={<Pages.Array31 />}></Route>
          <Route path="/dsa_cracker/array/array_32" element={<Pages.Array32 />}></Route>
          <Route path="/dsa_cracker/array/array_33" element={<Pages.Array33 />}></Route>
          <Route path="/dsa_cracker/array/array_34" element={<Pages.Array34 />}></Route>
          <Route path="/dsa_cracker/array/array_35" element={<Pages.Array35 />}></Route>
          <Route path="/dsa_cracker/array/array_36" element={<Pages.Array36 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
