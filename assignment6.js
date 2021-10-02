// Function Declaration
// - paint, any amount to a total of $200. If more than $100, add 10% of the cost of the paint & supplies.
function addPaintAndSupplies(totalCost, callback) {

    let cost = prompt("Enter the cost for the paint and supplies :");

    cost = parseFloat(cost);

    if (cost > 100)

    cost *= 1.1;



    // Get a handle for the paint paragraph

    let paintArea = document.querySelector(".paint");

    paintArea.innerHTML = `Paint $ ${cost.toFixed(2)}`;

    callback(totalCost + cost);

    return (totalCost + cost);

}

// Function Expression
// - floor coverings, any amount to a limit of $2000. If less than $500, take 15% off the cost of the floor coverings.
const AddFloorCoverings = function(totalCost, callback){
    let cost = prompt("Enter the cost for the Floor Coverings :");

    cost = parseFloat(cost);

    if (cost < 500)

    cost *= 0.85;



    // Get a handle for the paint paragraph

    let FloorArea = document.querySelector(".floorCoverings");

    FloorArea.innerHTML = `Floor $ ${cost.toFixed(2)}`;

    callback(totalCost + cost);

    return (totalCost + cost);

}





// Arrow Function
// - furniture, any amount to a limit of $2000. If less than $500 is spent, take 10% off the cost of the furniture.

 const Addfurniture =(totalCost, callback)=>{
    let cost = prompt("Enter the cost for the furnitures :");

    cost = parseFloat(cost);

    if (cost < 500)

    cost *= 0.90;



    // Get a handle for the paint paragraph

    let FurnitureArea = document.querySelector(".furniture");

    FurnitureArea.innerHTML = `Furnitures $ ${cost.toFixed(2)}`;

    callback(totalCost + cost);

    return (totalCost + cost);

}




// callback function
// use a callback function to make sure that a running update occurs when each figure is entered.
const updateTotals = (cost) => {

    // Get a handle for the furniture paragraph

    let totalsArea = document.querySelector(".totalCost");

    totalsArea.innerHTML = `Total $ ${cost.toFixed(2)}`;

}



let totalCost = 0;
totalCost = addPaintAndSupplies(totalCost, updateTotals);
totalCost = AddFloorCoverings(totalCost, updateTotals);
totalCost = Addfurniture(totalCost, updateTotals);

