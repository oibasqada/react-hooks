import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, Navigate, useNavigate, useParams} from "react-router-dom/dist";

const IngredientsPage = () => {

    const navigate = useNavigate();
    const params = useParams()
    console.log(params)
    const [meal, setMeal] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://themealdb.com/api/json/v1/1/filter.php?i=${params.name}`)
            .then(({data}) => {
                setMeal(data.meals)
            })
            .finally(() => {
                setLoading(false)
            })
    },[params.name])

    return (
        <div>
            <div className={'container'}>
                <div className={'row'}>
                    {/*<button onClick ={() => navigate (-1)}>Back</button>*/}
                    <div className="col-4">
                        <div className="box ingredient-page--main-item">
                            <img src={`https://themealdb.com/images/ingredients/${params.name}.png`} alt=""/>
                            <h2>{params.name}</h2>
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="row">
                            {
                                meal.map((meal, idx) =>
                                    <div key={idx} className={'col-3'}>
                                        <div className="box ingr-box">
                                            <Link to={`/meal/${meal.strMeal}`}>
                                                <img src={meal.strMealThumb} alt=""/>
                                                <div className="home-description">
                                                    <h3>{meal.strMeal}</h3>
                                                    <p>{meal.strCategory}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default IngredientsPage;