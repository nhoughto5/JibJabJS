/**
 * Created by Nick on 4/4/2017.
 */


function addIngredientTable() {
    var myTableDiv = document.getElementById("ingredientsTable");
    var table = document.createElement('TABLE');
    var tableBody = document.createElement('TBODY');

    table.border = '1';
    table.appendChild(tableBody);

    var heading = [];
    heading[0] = "Name";
    heading[1] = "Type";
    heading[2] = "Quantity";
    heading[3] = "Organic?";
    heading[4] = "Unit of Measurement";
    heading[5] = "Cost";

    var stock = getIngredients();

    //TABLE COLUMNS
    var tr1 = document.createElement('TR');
    tableBody.appendChild(tr1);
    for (i = 0; i < heading.length; i++) {
        var th = document.createElement('TH');
        th.width = '85';
        th.appendChild(document.createTextNode(heading[i]));
        tr1.appendChild(th);
    }

    //TABLE ROWS
    for (var i = 0; i < stock.length; i++) {
        var tr = document.createElement('TR');
        var tdName = document.createElement('TD');
        tdName.innerHTML = stock[i].Name;
        tr.appendChild(tdName);

        var tdType = document.createElement('TD');

        tdType.innerHTML = getTypeName(stock[i].IngredientType);
        tr.appendChild(tdType);

        var tdQuan = document.createElement('TD');
        tdQuan.innerHTML = stock[i].Quantity;
        tr.appendChild(tdQuan);

        var tdOrganic = document.createElement('TD');
        tdOrganic.innerHTML = stock[i].Organic ? 'Organic' : 'Non-Organic';
        tr.appendChild(tdOrganic);

        var tdUM = document.createElement('TD');
        tdUM.innerHTML = stock[i].unitOfMeasure;
        tr.appendChild(tdUM);

        var tdCost = document.createElement('TD');
        tdCost.innerHTML = '$' + stock[i].Cost;
        tr.appendChild(tdCost);
        // for (var j = 0; j < stock[i].length; j++) {
        //     var td = document.createElement('TD');
        //     td.appendChild(document.createTextNode(stock[i][j]));
        //     tr.appendChild(td)
        // }
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

function testRecipes(){
    var recipes = getRecipes();

    console.log("Now Testing: " + recipes[0].Name);
    console.log("Tax: " + recipes[0].getSalesTax());
    console.log("Discount: " + recipes[0].getDiscount());
    console.log("Total: " + recipes[0].getTotalCost());

    console.log("\nNow Testing: " + recipes[1].Name);
    console.log("Tax: " + recipes[1].getSalesTax());
    console.log("Discount: " + recipes[1].getDiscount());
    console.log("Total: " + recipes[1].getTotalCost());

    console.log("\nNow Testing: " + recipes[2].Name);
    console.log("Tax: " + recipes[2].getSalesTax());
    console.log("Discount: " + recipes[2].getDiscount());
    console.log("Total: " + recipes[2].getTotalCost());
}

function getIngredients(){
    var ingredients = [];
    //Produce
    ingredients.push(new Ingredient("Garlic", IngredientTypes.Produce, 1, true, "clove", 0.67));
    ingredients.push(new Ingredient("Lemon", IngredientTypes.Produce,  1, false, "", 2.03));
    ingredients.push(new Ingredient("Corn", IngredientTypes.Produce, 4, false, "cup", 0.87));

    // Meat/Poultry
    ingredients.push(new Ingredient("Chicken Breast", IngredientTypes.Meat, 4, false,  "", 2.19));
    ingredients.push(new Ingredient("Bacon", IngredientTypes.Meat, 4, false, "slices", 0.24));

    // Pantryingredi
    ingredients.push(new Ingredient("Pasta", IngredientTypes.Pantry, 8, false, "ounce", 0.31));
    ingredients.push(new Ingredient("Olive Oil", IngredientTypes.Pantry, 0.3333, true, "cup", 1.92));
    ingredients.push(new Ingredient("Vinegar", IngredientTypes.Pantry, 0.5, false,  "cup", 1.26));
    ingredients.push(new Ingredient("Salt", IngredientTypes.Pantry, 1.25, false, "teaspoon", 0.16));
    ingredients.push(new Ingredient("pepper", IngredientTypes.Pantry, 0.75, false, "teaspoon", 0.17));

    return ingredients
}

function getRecipes(){
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