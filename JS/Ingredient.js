/**
 * Created by Nick on 4/4/2017.
 */
function Ingredient(name, type, quantity, organic, um, cost){
    this.Name = name;
    this.IngredientType = type;
    this.Quantity = quantity;
    this.Organic = organic;
    this.unitOfMeasure = um;
    this.Cost = cost;

    this.getValue = function(){
        return this.Quantity * this.Cost;
    }

    this.toString = function(){
        var o = this.Organic ? 'Organic ' : 'Non Organic ';
        var t;
        if(this.IngredientType === 0){
            t = 'Produce';
        }
        else if(this.IngredientType == 1){
            t = 'Meat';
        }
        else{
            t = 'Pantry';
        }
        return t + ": " + o + this.Name + ", have " +  this.Quantity + " " + this.unitOfMeasure + " at $" + this.Cost;
    }
}