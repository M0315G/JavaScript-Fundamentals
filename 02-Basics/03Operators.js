var num1 = 7;
var num2 = 6;

console.log(num1 + num2);
console.log(num1 * num2);
console.log(num1 / num2);

var answer = num1 > num2;
console.log(answer);

// To calculate the discount percentage
// D = (L - S)/L  * 100   

var listPrice = 1000;
var sellPrice = 299;

var discount = ((listPrice - sellPrice)/listPrice)*100;

console.log(`
    List Price: ${listPrice}
    Selling Price: ${sellPrice}

    Total Discount: ${discount}
`)

var displayDiscount = Math.round(discount)

console.log(`
    List Price: ${listPrice}
    Selling Price: ${sellPrice}

    Total Discount: ${displayDiscount}
`)