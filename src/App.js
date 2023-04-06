import React, {useEffect, useState} from "react";
import HomePage from "./pages/home-page";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import MealPage from "./pages/meal-page";
import IngredientsPage from "./pages/ingredients-page";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/yummy/:name" element={<MealPage/>}/>
                <Route path="/misc/:name" element={<IngredientsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;