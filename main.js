
// MONGODB CONNECTOR
const { MongoClient } = require("mongodb");

// Select the database to use.
const uri = "mongodb+srv://RecipeCardAdmin:123CNA123@recipecardcluster.qigg8sx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);


// Adds a single recipe to database.
async function addRecipe(name, category, serves, difficulty, time, ingredients, instructions) {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("RecipeCardDatabase");
    const recipeCards = db.collection("RecipeCards");

    const newRecipe = {
      name: name,
      category: category,
      serves: serves,
      difficulty: difficulty,
      time: time,
      ingredients: ingredients,
      instructions: instructions
    };

    await recipeCards.insertOne(newRecipe);
  } finally {
    await client.close();
  }
}

// Select all from database.
async function getAllRecipes() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("RecipeCardDatabase");
    const recipeCards = db.collection("RecipeCards");

    const allRecipes = await recipeCards.find({}).toArray();
    return allRecipes;
  } finally {
    await client.close();
  }
}

async function displayAllRecipes() {
  try {
    const allRecipes = await getAllRecipes();
    console.log(allRecipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

// Select all from database like name value
async function getRecipesByName(searchTerm) {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("RecipeCardDatabase");
    const recipeCards = db.collection("RecipeCards");

    const recipes = await recipeCards.find({ name: { $regex: searchTerm, $options: 'i' } }).toArray();
    return recipes;
  } finally {
    await client.close();
  }
}

async function displayRecipesByName(searchTerm) {
  try {
    const recipes = await getRecipesByName(searchTerm);
    console.log(recipes);
  } catch (error) {
    console.error("Error fetching recipes by partial name:", error);
  }
}

// Select recipes by category
async function getRecipesByCategory(category) {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("RecipeCardDatabase");
    const recipeCards = db.collection("RecipeCards");

    const recipes = await recipeCards.find({ category: { $regex: category, $options: 'i' } }).toArray();
    return recipes;
  } finally {
    await client.close();
  }
}

async function displayRecipesByCategory(category) {
  try {
    const recipes = await getRecipesByCategory(category);
    console.log(recipes);
  } catch (error) {
    console.error("Error fetching recipes by category:", error);
  }
}

// Select recipes by difficulty
async function getRecipesByInputDifficulty(inputDifficulty) {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("RecipeCardDatabase");
    const recipeCards = db.collection("RecipeCards");

    const recipes = await recipeCards.find({ difficulty: inputDifficulty }).toArray();

    return recipes;
  } finally {
    await client.close();
  }
}

async function displayRecipesByInputDifficulty(inputDifficulty) {
  try {
    const recipes = await getRecipesByInputDifficulty(inputDifficulty);
    console.log(recipes);
  } catch (error) {
    console.error("Error fetching recipes by input difficulty:", error);
  }
}

//Select recipes by how many it serves. gets all equal to and greater.
async function getRecipesByServes(servesAmount) {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("RecipeCardDatabase");
    const recipeCards = db.collection("RecipeCards");

    const recipes = await recipeCards.find({ serves: { $gte: parseInt(servesAmount) } }).toArray();
    return recipes;
  } finally {
    await client.close();
  }
}

async function displayRecipesByServes(servesAmount) {
  try {
    const recipes = await getRecipesByServes(servesAmount);
    console.log(recipes);
  } catch (error) {
    console.error("Error fetching recipes by serves:", error);
  }
}

async function getRecipesByCookTimeLessThanAndEqual(maxCookTime) {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("RecipeCardDatabase");
    const recipeCards = db.collection("RecipeCards");

    const recipes = await recipeCards.find({ time: { $lte: parseInt(maxCookTime) } }).toArray();
    return recipes;
  } finally {
    await client.close();
  }
}

async function displayRecipesByCookTimeLessThanAndEqual(maxCookTime) {
  try {
    const recipes = await getRecipesByCookTimeLessThanAndEqual(maxCookTime);
    console.log(recipes);
  } catch (error) {
    console.error("Error fetching recipes by cook time:", error);
  }
}

async function getRecipesByCookTimeGreaterThanAndEqual(minCookTime) {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("RecipeCardDatabase");
    const recipeCards = db.collection("RecipeCards");

    const recipes = await recipeCards.find({ time: { $gte: parseInt(minCookTime) } }).toArray();
    return recipes;
  } finally {
    await client.close();
  }
}

async function displayRecipesByGreaterCookTime(minCookTime) {
  try {
    const recipes = await getRecipesByCookTimeGreaterThanAndEqual(minCookTime);
    console.log(recipes);
  } catch (error) {
    console.error("Error fetching recipes by cook time:", error);
  }
}

displayRecipesByGreaterCookTime(40);




// displayRecipesByCookTimeLessThanAndEqual(40);

// displayRecipesByServes(9);

// displayRecipesByInputDifficulty('Medium');

// displayRecipesByCategory('Dessert');

// displayRecipesByName('cake');

// displayAllRecipes();


