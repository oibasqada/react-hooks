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
                console.log(data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div>
            {
                loading ? <h2>Wait...</h2> :
                    <div className={'container'}>
                        <div className={'meals'}>
                            {
                                meal.map((meals, idx) =>
                                    <div key={idx} className={'item'}>
                                       <div className="box">
                                           <img src={meals.strMealThumb} alt=""/>
                                           <div className="desc">
                                               <h3>{meals.strMeal}</h3>
                                               <p>{meals.strCategory}</p>
                                               <button className={'btn'}>
                                                   <Link to={`/yummy/${meals.strMeal}`}>More</Link>
                                               </button>
                                           </div>
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