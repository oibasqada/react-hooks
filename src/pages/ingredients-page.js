import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const IngredientsPage = () => {

    const params = useParams()
    const [meals, setMeal] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://themealdb.com/api/json/v1/1/list.php?i=${params.idIngredient}`)
            .then(({data}) => {
                setMeal(data.meals[0])
                console.log(data)
            })
            .finally(() => {
                setLoading(false)
            })
    },[params.idIngredient])

    return (
        <div>
            {
                loading ? <h2>Wait...</h2> :
                    <div>
                        <button><Link to={`/yummy/${meals.strMeal}`}>Back</Link></button>
                    </div>
            }
        </div>
    );
};

export default IngredientsPage;