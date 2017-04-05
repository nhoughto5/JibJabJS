/**
 * Created by Nick on 4/4/2017.
 */
var IngredientTypes = {
    Produce: 0,
    Meat: 1,
    Pantry: 2
}
var SALES_TAX = 0.086;
var WELLNESS_DISCOUNT = 0.05;

function roundUpUtil(money, round){
    return (Math.ceil(money / round) * round);
}

function getTypeName(type){
    var t;
    if(type === 0){
        t = 'Produce';
    }
    else if(type == 1){
        t = 'Meat';
    }
    else{
        t = 'Pantry';
    }
    return t;
}