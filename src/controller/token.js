const token = require("../models/Token");

module.exports = {
  list: async (req, res) => {
    const data = await token.find();
    res.status(200).send({ data });
  },
  create: async (req, res) => {
    const data = await token.create(req.body);
    res.status(201).send({ data });
  },
  read: async (req, res) => {
    const data = await token.findOne({ _id: req.params.id });
    res.status(200).send({ data });
  },
  update: async (req, res) => {
    const data = await token.updateOne({ _id: req.params.id }, req.body);
    res.status(202).send({
      data,
      newData: await token.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const data = await token.deleteOne({ _id: req.params.id });
    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
