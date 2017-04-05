/**
 * Created by Nick on 4/5/2017.
 */
function Recipe(name){
    this.Name = name;
    this.Ingredients = [];

    this.addIngredient = function(i){
        this.Ingredients.push(i);
    };

    this.getDiscount = function(){
        var total = 0;

        for (var ing in this.Ingredients) {
            // skip loop if the property is from prototype
            if (!this.Ingredients.hasOwnProperty(ing)) continue;

            var ingredient = this.Ingredients[ing];
            total += ingredient.Organic ? ingredient.getValue() * WELLNESS_DISCOUNT : 0;
        }
        return roundUpUtil(total, 0.01);
    };
    this.getSalesTax = function(){
        var total = 0;
        for (var ing in this.Ingredients) {
            // skip loop if the property is from prototype
            if (!this.Ingredients.hasOwnProperty(ing)) continue;

            var ingredient = this.Ingredients[ing];
            total += (ingredient.IngredientType === IngredientTypes.Produce) ? 0 : ingredient.getValue() * SALES_TAX;
        }
        return roundUpUtil(total, 0.07);
    };

    this.getTotalCost = function(){
        var total = 0;
        for (var ing in this.Ingredients) {
            // skip loop if the property is from prototype
            if (!this.Ingredients.hasOwnProperty(ing)) continue;

            var ingredient = this.Ingredients[ing];
            total += ingredient.Quantity * ingredient.Cost;
        }
        return roundUpUtil(total + this.getSalesTax() - this.getDiscount(), 0.01);
    };

    this.toString = function(){
        var ret = this.Name + ": \n";
        for (var ing in this.Ingredients) {
            // skip loop if the property is from prototype
            if (!this.Ingredients.hasOwnProperty(ing)) continue;
            ret += this.Ingredients[ing].toString() + "\n";
        }
        return ret;
    };

    this.getRecipeTable = function(){
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
        for (var i = 0; i < this.Ingredients.length; i++) {
            tableBody.appendChild(this.Ingredients[i].getIngredientTR());
        }
        return table;
    }
}