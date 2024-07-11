import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./mealitem";
import ReacipeIndex from "./recipeindex";
// import Logo from "./logo"
const Meal = () => {
    const [search,setSearch]=useState();
    const [show,setShow]=useState(false);
    const [item,setItem]=useState("");
    const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=> {
            setItem(data.meals);
            setShow(true);
        })
     },[url])

     const searchRecipe=(evt)=>{
         setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
    const setIndex=(alpha)=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    }
return (
    <>
        <div className="main">
            <div className="heading">
                
                <h1>Cook Book </h1>
                <h2>Search Your Food Recipe</h2>
                <h3> Food is more than sustenance, 
                    it is a language that speaks our emotion and bring 
                    people together.<pre>
                    Enjoy your tasty food with our recipe...</pre></h3>
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar" onChange={e=> setSearch(e.target.value)} onKeyPress={searchRecipe}/>
            </div>
            <div className="container">
                {
                    show ?<MealItem data={item} /> :"Not Found"

                }
            </div>
            <div className="indexContainer">
                 <ReacipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>
           
            

        </div>
    </>
)
}
export default Meal;