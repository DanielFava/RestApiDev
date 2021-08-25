const mongoose = require("../../database/config");
const { v4: uuidv4 } = require("uuid");

const schema = mongoose.Schema(
  {
    _id: { 
      type: String, 
      default: uuidv4 
    },
    tipo: { 
      type: String 
    },
    value: { 
      type: Number 
    },
    id_User: { 
      type: String, 
      ref: 'users', 
      required: true, 
      unique: true 
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Wallets", schema);