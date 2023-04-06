import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const MealPage = () => {

        const params = useParams()
        const [meals, setMeal] = useState([])
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
                .then (({data}) => {
                    setMeal(data.meals[0])
                    // console.log(data)
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
                            <button><Link to={'/'}>Back</Link></button>
                            <div className="meal-desc">
                                <img src={meals.strMealThumb} alt=""/>
                                <p>{meals.strInstructions}</p>
                            </div>
                            <h2>Ingredients:</h2>
                            <div className="ingr-s">
                                {

                                    meals.strIngredient1 &&
                                    <div className="misc">
                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient1}.png`} alt="?"/>
                                        <a href={'#'}><Link to={`/misc/${meals.idIngredient}`}>{meals.strIngredient1}</Link></a>
                                    </div>
                                }
                                {

                                    meals.strIngredient2 &&
                                    <div className="misc">
                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient2}.png`} alt="?"/>
                                        <a href={'#'}>{meals.strIngredient2}</a>
                                    </div>
                                }

                                {
                                    meals.strIngredient3 &&
                                    <div className="misc">
                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient3}.png`} alt="?"/>
                                        <a href={'#'}>{meals.strIngredient3}</a>
                                    </div>
                                }

                                {
                                    meals.strIngredient4 &&
                                    <div className="misc">
                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient4}.png`} alt="?"/>
                                        <a href={'#'}>{meals.strIngredient4}</a>
                                    </div>
                                }

                                {
                                    meals.strIngredient5 &&
                                    <div className="misc">
                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient5}.png`} alt="?"/>
                                        <a href={'#'}>{meals.strIngredient5}</a>
                                    </div>
                                }

                                {
                                    meals.strIngredient6 &&
                                    <div className="misc">
                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient6}.png`} alt="?"/>
                                        <a href={'#'}>{meals.strIngredient6}</a>
                                    </div>
                                }

                                {
                                    meals.strIngredient7 &&
                                    <div className="misc">
                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient7}.png`} alt="?"/>
                                        <a href={'#'}>{meals.strIngredient7}</a>
                                    </div>
                                }

                                {
                                    meals.strIngredient8 &&
                                    <div className="misc">
                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient8}.png`} alt="?"/>
                                        <a href={'#'}>{meals.strIngredient8}</a>
                                    </div>
                                }

                                {
                                    meals.strIngredient9 &&
                                    <div className="misc">
                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient9}.png`} alt="?"/>
                                        <a href={'#'}>{meals.strIngredient9}</a>
                                    </div>
                                }

                                {
                                    meals.strIngredient10 &&
                                    <div className="misc">
                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient10}.png`} alt="?"/>
                                        <a href={'#'}>{meals.strIngredient10}</a>
                                    </div>
                                }
                            </div>

                        </div>
                }
            </div>
        )

};

export default MealPage;