const Store = require("../models/Store");
// @Desc: Get all stores
// @Routes GET api/v1/stores
// @Access public

let getStores = async function (req, res, next) {
  try {
    const stores = await Store.find();

    res.status(200).json({
      success: true,
      count: stores.length,
      data: stores,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// @Desc: Add a store
// @Routes POST api/v1/stores
// @Access public

let addStore = async function (req, res, next) {
  try {
    const store = await Store.create(req.body);

    return res.status(200).json({
      successs: true,
      data: store,
    });
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      return res.status(400).json({ error: "This store is already exists" });
    }
    res.status(500).json({ error: "Server error" });
  }
};

// @Export files
module.exports = {
  getStores,
  addStore,
};
