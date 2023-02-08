const { response } = require("express");
const ListaDeTreinosModel = require("../model/ListaDeTreinosModel");

class ListaDeTreinosController {
  async create(req, res) {
    const lista_exercicios = new ListaDeTreinosModel(req.body);
    await lista_exercicios
      .save()
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }
  async update(req, res) {
    await ListaDeTreinosModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    )
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }
  async all(req, res) {
    await ListaDeTreinosModel.find({ macaddress: { $in: req.body.macaddress } })
      .sort("date")
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }
  async show(req, res) {
    await ListaDeTreinosModel.findById(req.params.id)
      .then((response) => {
        if (response) return res.status(200).json(response);
        else return res.status(404).json({ error: "Treino não encontrado" });
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }
  async delete(req, res) {
    await ListaDeTreinosModel.deleteOne({ _id: req.params.id })
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }
  async done(req, res) {
    await ListaDeTreinosModel.findByIdAndUpdate(
      { _id: req.params.id },
      { done: req.params.done },
      { new: true }
    )
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }
}

module.exports = new ListaDeTreinosController();
