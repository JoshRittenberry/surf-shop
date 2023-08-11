const { inventory } = require("./data.js")

const {
    isBargain, isClothing, isGear,
    isSurfboard, convertDataForAccounting,
    calculateAveragePrice
} = require("./functions.js")

const {productDetails} = require("./productReport.js")

const {convertedData} = require("./accounting.js")

const productPrintOut = productDetails(inventory)

console.log(`\n------------------------\n`)

const upperCase = convertedData(inventory)

console.log("\n------------------------\n")

const averagePrice = calculateAveragePrice(inventory)

console.log(`The average price of a product is ${averagePrice}`)

