const { inventory } = require("./data.js")

const {
    isBargain, isClothing, isGear,
    isSurfboard, convertDataForAccounting,
    calculateAveragePrice
} = require("./functions.js")

const convertedData = (convertThis) => {
    for (const product of convertThis) {
        const modifiedData = convertDataForAccounting(product)
        console.log(modifiedData)
    }
}

module.exports = {convertedData}