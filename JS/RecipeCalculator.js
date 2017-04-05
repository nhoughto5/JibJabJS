/**
 * Created by Nick on 4/4/2017.
 */


function addTable() {
    var myTableDiv = document.getElementById("Ingredients_Table");
    var table = document.createElement('TABLE');
    var tableBody = document.createElement('TBODY');

    table.border = '1';
    table.appendChild(tableBody);

    var heading = [];
    heading[0] = "Request Type";
    heading[1] = "Group A";
    heading[2] = "Groub B";
    heading[3] = "Group C";
    heading[4] = "Total";

    var stock;
    stock = [];
    stock[0] = ["Cars", "88.625", "85.50", "85.81", "987"];
    stock[1] = ["Veggies", "88.625", "85.50", "85.81", "988"];
    stock[2] = ["Colors", "88.625", "85.50", "85.81", "989"];
    stock[3] = ["Numbers", "88.625", "85.50", "85.81", "990"];
    stock[4] = ["Requests", "88.625", "85.50", "85.81", "991"];

    //TABLE COLUMNS
    var tr1 = document.createElement('TR');
    tableBody.appendChild(tr1);
    for (i = 0; i < heading.length; i++) {
        var th = document.createElement('TH');
        th.width = '75';
        th.appendChild(document.createTextNode(heading[i]));
        tr1.appendChild(th);
    }

    //TABLE ROWS
    for (var i = 0; i < stock.length; i++) {
        var tr = document.createElement('TR');
        for (var j = 0; j < stock[i].length; j++) {
            var td = document.createElement('TD');
            td.appendChild(document.createTextNode(stock[i][j]));
            tr.appendChild(td)
        }
        tableBody.appendChild(tr);
    }
    myTableDiv.appendChild(table)
}

function testIngredient(){
    var salt = new Ingredient('salt', IngredientTypes.Pantry, 0.34, false, 'teaspoons', 0.5);
    console.log(salt.toString());
}
function testUtil(){
    var r = roundUpUtil(0.06, 0.07);
    console.log("Output: " + r);

    var r2 = roundUpUtil(0.22, 0.07);
    console.log("Output: " + r2);
}

function getRecipe(){
    var recipes = []
    var r1 = new Recipe("R1");
    r1.addIngredient(new Ingredient("Garlic", IngredientTypes.Produce, 1, true, "clove", 0.67));
    r1.addIngredient(new Ingredient("Lemon", IngredientTypes.Produce,  1, false, "", 2.03));
    r1.addIngredient(new Ingredient("Olive Oil", IngredientTypes.Pantry, 0.75, true,  "cup", 1.92));
    r1.addIngredient(new Ingredient("Salt", IngredientTypes.Pantry, 0.75, false,  "teaspoon", 0.16));
    r1.addIngredient(new Ingredient("pepper", IngredientTypes.Pantry, 0.5, false,  "teaspoon", 0.17));
    recipes.push(r1);

    var r2 = new Recipe("R2");
    r2.addIngredient(new Ingredient("Garlic", IngredientTypes.Produce, 1, true,  "clove", 0.67));
    r2.addIngredient(new Ingredient("Chicken Breast", IngredientTypes.Meat, 4, false,  "", 2.19));
    r2.addIngredient(new Ingredient("Olive Oil", IngredientTypes.Pantry, 0.5, true,  "cup", 1.92));
    r2.addIngredient(new Ingredient("Vinegar", IngredientTypes.Pantry, 0.5, false,  "cup", 1.26));
    recipes.push(r2);

    var r3 = new Recipe("R3");
    r3.addIngredient(new Ingredient("Garlic",IngredientTypes.Produce, 1, true, "clove", 0.67));
    r3.addIngredient(new Ingredient("Corn", IngredientTypes.Produce, 4, false, "cup", 0.87));
    r3.addIngredient(new Ingredient("Bacon", IngredientTypes.Meat, 4, false, "slices", 0.24));
    r3.addIngredient(new Ingredient("Pasta", IngredientTypes.Pantry, 8, false, "ounce", 0.31));
    r3.addIngredient(new Ingredient("Olive Oil", IngredientTypes.Pantry, 0.3333, true, "cup", 1.92));
    r3.addIngredient(new Ingredient("Salt", IngredientTypes.Pantry, 1.25, false, "teaspoon", 0.16));
    r3.addIngredient(new Ingredient("pepper", IngredientTypes.Pantry, 0.75, false, "teaspoon", 0.17));
    recipes.push(r3);

    return recipes;
}