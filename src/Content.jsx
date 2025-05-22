import { useState } from "react";
import IngrdientsList from './IngredientsList.jsx'
import Recepie from './Recepie.jsx'
import {getRecipeFromMistral} from './ai.js'

export default function Content(){
    let [ingredients,setIngredients]= useState([]);
    function addItems(formData){
          let item=formData.get("ingredients")
          setIngredients(prevdata => [...prevdata,item])
    };
    let [Recipe,setRecipe]=useState("")
    async function getRecipe(params) {
        const Recipedata=await getRecipeFromMistral(ingredients)
        setRecipe(Recipedata)
    }
    return(
        <>
        <form id="myform" action={addItems}>
            <input type="text" id="ingredients" name="ingredients"/>
            <button type="submit"id="add">+ add ingredients</button>
        </form>
        {ingredients.length >0 ? <IngrdientsList ingredients={ingredients} getRecipe={getRecipe}/> : null}
        { Recipe && <Recepie recipe={Recipe}/> }
        </>
    )
}