const xelor = require('xelor');
const Blan = require('../models/Blan.models');
const { BlanValidations } = require('../validations/Blan.validations');

exports.addController = async (req, res) => {
  const { name } = req.body;
  await xelor.add(req, res, Blan, BlanValidations, name, 'name');
};

exports.getAllController = async (req, res) => {
  await xelor.getAll(res, Blan);
};

exports.getOneController = async (req, res) => {
  const { _id } = req.params;
  await xelor.getOne(res, Blan, _id, '_id', false, '-_id name');
};

exports.deleteOneController = async (req, res) => {
  await xelor.deleteOne(req, res, Blan);
};

exports.updateOneController = async (req, res) => {
  await xelor.update(req, res, Blan, BlanValidations);
};

exports.deletAllController = async (req, res) => {
  await xelor.deletAll(res, Blan);
};
