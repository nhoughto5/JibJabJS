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