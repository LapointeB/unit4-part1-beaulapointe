/* 
 * ask for a store's daily sales for a week
 * calculate the total sales for the week
 */
let dailySales = [];

for (i = 1; i <= 7; i++) {
    dailySales.push(prompt("Enter the sales for day " + i + ": "));
    
}

i = 0;
let sum = 0;

while (i < 7) {
    sum = sum + Number(dailySales[i]);
    i++;
}

document.write("The total sales for the week is $" + sum);
