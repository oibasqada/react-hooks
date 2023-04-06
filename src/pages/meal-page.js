import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const MealPage = () => {

        const params = useParams()
        const [meals, setMeal] = useState({})
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
                .then (({data}) => {
                    setMeal(data.meals[0])
                    console.log(data)
                })
                .finally(() => {
                    setLoading(false)
                })
        }, [params.name])

        return (
            <div>
                {
                    loading ? <h2>Wait...</h2> :
                        <div className={'container'}>
                            <div className={'meal-title'}>
                                <h1>{meals.strMeal}</h1>
                                <h2>Category: {meals.strCategory}</h2>
                                <h3>{meals.strArea} food</h3>
                            </div>
                            <div className="meal-desc">
                                <img src={meals.strMealThumb} alt=""/>
                                <p>{meals.strInstructions}</p>
                            </div>

                        </div>
                }
            </div>
        )

};

export default MealPage;