require('dotenv').config();

const uri = `mongodb+srv://${process.env.MONGOOSE_LOGIN}:${process.env.MONGOOSE_PASSWORD}@${process.env.MONGOOSE_ROUTE}/${process.env.MONGOOSE_DATABASE}?${process.env.MONGOOSE_PERMISSION}`

module.exports = { uri };