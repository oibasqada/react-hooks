import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, Navigate, useNavigate, useParams} from "react-router-dom/dist";

const MealPage = () => {

        const navigate = useNavigate();
        const [] = useState();
        const params = useParams();
        const [meals, setMeal] = useState([]);
        const [loading, setLoading] = useState(true);

        // <button onClick ={() => navigate (-1)}>Back<button/>

        // <button
        //     onClick={() => setShowMore(!showmore)}
        // >
        //     {showmore ? 'Hide' : 'Show more'}
        // </button>

        useEffect(() => {
            axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
                .then (({data}) => {
                    setMeal(data.meals[0])
                     // console.log(data.meals[0].strIngredient1)
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
                            <div className="row meal-page--hero-spacing">
                                <div className={'col-6'}>
                                    <div className="box desc-wrapper">
                                        <div className="meal-description">
                                            <h1>{meals.strMeal}</h1>
                                            <h2>Category: {meals.strCategory}</h2>
                                            <h3>{meals.strArea} food</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="box">
                                        <img src={meals.strMealThumb} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <button><Link to={'/'}>Back</Link></button>
                            <div className="meal-instructions">
                                <h4>What to do:</h4>
                                <p>{meals.strInstructions}</p>
                            </div>
                            <h4 className={'ingredients-list--title'}>Ingredients:</h4>
                            <div className="ingredients">
                                <div className="row ingredients-wrapper-spacing">
                                    {
                                        meals.strIngredient1 &&
                                        <div className="col-1">
                                            <div className="box">
                                                <div className="misc">
                                                    <Link className={'ingredient-name'} to={`/meal/${meals.strMeal}/ingredient/${meals.strIngredient1}`}>
                                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient1}.png`} alt="?"/>
                                                        <p>{meals.strIngredient1}</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {
                                        meals.strIngredient2 &&
                                        <div className="col-1">
                                            <div className="box">
                                                <div className="misc">
                                                    <Link className={'ingredient-name'} to={`/meal/${meals.strMeal}/ingredient/${meals.strIngredient2}`}>
                                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient2}.png`} alt="?"/>
                                                        <p>{meals.strIngredient2}</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {
                                        meals.strIngredient3 &&
                                        <div className="col-1">
                                            <div className="box">
                                                <div className="misc">
                                                    <Link className={'ingredient-name'} to={`/meal/${meals.strMeal}/ingredient/${meals.strIngredient3}`}>
                                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient3}.png`} alt="?"/>
                                                        <p>{meals.strIngredient3}</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {
                                        meals.strIngredient4 &&
                                        <div className="col-1">
                                            <div className="box">
                                                <div className="misc">
                                                    <Link className={'ingredient-name'} to={`/meal/${meals.strMeal}/ingredient/${meals.strIngredient4}`}>
                                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient4}.png`} alt="?"/>
                                                        <p>{meals.strIngredient4}</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {
                                        meals.strIngredient5 &&
                                        <div className="col-1">
                                            <div className="box">
                                                <div className="misc">
                                                    <Link className={'ingredient-name'} to={`/meal/${meals.strMeal}/ingredient/${meals.strIngredient5}`}>
                                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient5}.png`} alt="?"/>
                                                        <p>{meals.strIngredient5}</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {
                                        meals.strIngredient6 &&
                                        <div className="col-1">
                                            <div className="box">
                                                <div className="misc">
                                                    <Link className={'ingredient-name'} to={`/meal/${meals.strMeal}/ingredient/${meals.strIngredient6}`}>
                                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient6}.png`} alt="?"/>
                                                        <p>{meals.strIngredient6}</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {
                                        meals.strIngredient7 &&
                                        <div className="col-1">
                                            <div className="box">
                                                <div className="misc">
                                                    <Link className={'ingredient-name'} to={`/meal/${meals.strMeal}/ingredient/${meals.strIngredient7}`}>
                                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient7}.png`} alt="?"/>
                                                        <p>{meals.strIngredient7}</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {
                                        meals.strIngredient8 &&
                                        <div className="col-1">
                                            <div className="box">
                                                <div className="misc">
                                                    <Link className={'ingredient-name'} to={`/meal/${meals.strMeal}/ingredient/${meals.strIngredient8}`}>
                                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient8}.png`} alt="?"/>
                                                        <p>{meals.strIngredient8}</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {
                                        meals.strIngredient9 &&
                                        <div className="col-1">
                                            <div className="box">
                                                <div className="misc">
                                                    <Link className={'ingredient-name'} to={`/meal/${meals.strMeal}/ingredient/${meals.strIngredient9}`}>
                                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient9}.png`} alt="?"/>
                                                        <p>{meals.strIngredient9}</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {
                                        meals.strIngredient10 &&
                                        <div className="col-1">
                                            <div className="box">
                                                <div className="misc">
                                                    <Link className={'ingredient-name'} to={`/meal/${meals.strMeal}/ingredient/${meals.strIngredient10}`}>
                                                        <img src={`https://themealdb.com/images/ingredients/${meals.strIngredient10}.png`} alt="?"/>
                                                        <p>{meals.strIngredient10}</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                        </div>
                }
            </div>
        )

};

export default MealPage;