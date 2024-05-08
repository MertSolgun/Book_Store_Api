const category = require("../models/Category");

module.exports = {
  list: async (req, res) => {
    const data = await category.find();
    res.status(200).send({ data });
  },
  create: async (req, res) => {
    const data = await category.create(req.body);
    res.status(201).send({ data });
  },
  read: async (req, res) => {
    const data = await category.findOne({ _id: req.params.id });
    res.status(200).send({ data });
  },
  update: async (req, res) => {
    const data = await category.updateOne({ _id: req.params.id }, req.body);
    res.status(202).send({
      data,
      newData: await category.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const data = await category.deleteOne({ _id: req.params.id });
    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
