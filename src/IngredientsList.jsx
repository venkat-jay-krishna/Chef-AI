export default function IngredientsList(props){
    let allItems=props.ingredients.map(item =>  <li key={item}>{item}</li>)

    return(
        <>
        <section id="ingredientsList">
        <h2>Ingredients given:</h2>
        <ul>{allItems}</ul>
        </section>
        <div id="container-query">
          {allItems.length > 3 && <div className="recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe} id="recipe-button">Get a recipe</button>
         </div>}
        </div>
        </>
    )
}