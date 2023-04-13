import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom"

const HomePage = () => {

    const [meal, setMeal] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://themealdb.com/api/json/v2/1/randomselection.php?`)
            .then (({data}) => {
                setMeal((data.meals))
                // console.log(data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div>
            {
                loading ? <h2 className={'waiter'}>Wait...</h2> :
                    <div className={'container'}>
                        <div className={'row'}>
                            {
                                meal.map((meals, idx) =>
                                    <div key={idx} className={'col-3'}>
                                       <div className="box">
                                           <Link to={`/meal/${meals.strMeal}`}>
                                               <img src={meals.strMealThumb} alt=""/>
                                               <div className="home-description">
                                                   <h3>{meals.strMeal}</h3>
                                                   <p>{meals.strCategory}</p>
                                               </div>
                                           </Link>
                                       </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
            }
        </div>
    )

}

export default HomePage;