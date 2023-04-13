import React, {useEffect, useState} from "react";
import HomePage from "./pages/home-page/home-page";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import MealPage from "./pages/meal-page/meal-page";
import IngredientsPage from "./pages/ingredients-page/ingredients-page";
import Header from "./components/Header";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/meal/:name" element={<MealPage/>}/>
                <Route path="/meal/:name/ingredient/:name" element={<IngredientsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;