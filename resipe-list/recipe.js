

// Пример данных рецептов
let recipes = [
  {
    id: 1,
    name: "Салат Цезарь",
    category: "Салаты",
    instructions: "Смешайте салат, куриную грудку, крошки хлеба и соус.",
  },
  {
    id: 2,
    name: "Паста с креветками",
    category: "Паста",
    instructions:
      "Приготовьте пасту, обжарьте креветки, добавьте соус и специи.",
  },
  {
    id: 3,
    name: "Омлет с овощами",
    category: "Завтрак",
    instructions:
      "Взбейте яйца, добавьте нарезанные овощи и обжарьте на сковороде.",
  },
]




const formEl = document.querySelector("#addRecipeForm");
const listEl = document.querySelector("#recipeList");
const container = document.querySelector("#recipeDetails");

function recipeCalled() {
  listEl.innerHTML = "";
  recipes.forEach((recipe) => {
    const li = document.createElement("li");
    li.textContent = recipe.name;
    li.addEventListener("click", () => detailsRecipe(recipe));
    listEl.appendChild(li);
  });

  localStorage.setItem("recipes", JSON.stringify(recipes)); 
  
}



function detailsRecipe(recipe) {
  const html = `<h3>Название: ${recipe.name}</h3><p>Категория: ${recipe.category}</p>
  <p>Инструкция: ${recipe.instructions}</p>`;
  container.innerHTML = html;
}

function markapNewRecipe(name, category, instructions) {
  const newRecipe = { id: recipes.length + 1, name, category, instructions };
  recipes.push(newRecipe);
  console.log(recipes);

  recipeCalled(newRecipe);
  // localStorage.setItem("recipes", JSON.stringify(newRecipe)); 

  
  formEl.reset()

  // recipeName.value = "";
  // recipeCategory.value = "";
  // recipeInstructions.value = "";

}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const recipeName = document.getElementById("recipeName").value;
  const recipeCategory = document.getElementById("recipeCategory").value;
  const recipeInstructions =
    document.getElementById("recipeInstructions").value;

  if (recipeName && recipeCategory && recipeInstructions) {
    markapNewRecipe(recipeName, recipeCategory, recipeInstructions);
    safeRecipe()
  }
  
});

function loadRecipes() {
  const storedRecipe = localStorage.getItem('recipes');
  if (storedRecipe) {
    recipes = JSON.parse(storedRecipe)
  }

  recipeCalled();
}

function safeRecipe() {
  localStorage.setItem('recipes', JSON.stringify(recipes))
}

loadRecipes();



