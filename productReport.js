const { inventory } = require("./data.js")

const {
    isBargain, isClothing, isGear,
    isSurfboard, convertDataForAccounting,
    calculateAveragePrice
} = require("./functions.js")

const productDetails = (productInfo) => {

    for (let surfProduct of productInfo) {
        let message = ""

        if (isClothing(surfProduct)) {
            message = `${surfProduct.description} is a clothing product`
        }

        if (isGear(surfProduct)) {
            message = `${surfProduct.description} is a surfing gear product`
        }


        if (isSurfboard(surfProduct)) {
            message = `${surfProduct.description} is a surfboard`
        }

        if (isBargain(surfProduct)) {
            message = `${surfProduct.description} is currently on sale`
        }

        if (message !== "") {
            console.log(message)
        }
    }
}

module.exports = {productDetails}