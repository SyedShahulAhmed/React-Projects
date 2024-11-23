import { useState } from "react";
import Homepage from "./components/homepage";
import { Route, Routes } from "react-router-dom";
import RecipeInfo from "./components/RecipeInfo";
function App() {
  return (
      <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:mealid" element={<RecipeInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
