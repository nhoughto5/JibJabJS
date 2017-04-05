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
        roundUpUtil(total, 0.01);
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
}