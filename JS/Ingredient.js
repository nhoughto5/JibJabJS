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
        return getTypeName(this.IngredientType) + ": " + o + this.Name + ", have " +  this.Quantity + " " + this.unitOfMeasure + " at $" + this.Cost;
    }

    this.getIngredientTR = function(){
        var tr = document.createElement('TR');
        var tdName = document.createElement('TD');
        tdName.innerHTML = this.Name;
        tr.appendChild(tdName);

        var tdType = document.createElement('TD');

        tdType.innerHTML = getTypeName(this.IngredientType);
        tr.appendChild(tdType);

        var tdQuan = document.createElement('TD');
        tdQuan.innerHTML = this.Quantity;
        tr.appendChild(tdQuan);

        var tdOrganic = document.createElement('TD');
        tdOrganic.innerHTML = this.Organic ? 'Organic' : 'Non-Organic';
        tr.appendChild(tdOrganic);

        var tdUM = document.createElement('TD');
        tdUM.innerHTML = this.unitOfMeasure;
        tr.appendChild(tdUM);

        var tdCost = document.createElement('TD');
        tdCost.innerHTML = '$' + this.Cost;
        tr.appendChild(tdCost);

        return tr;
    }
}