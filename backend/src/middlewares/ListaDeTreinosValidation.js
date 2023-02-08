const ListaDeTreinosModel = require("../model/ListaDeTreinosModel");
const { isPast } = require("date-fns");

const ListaDeTreinosValidation = async (req, res, next) => {
  const { macaddress, type, title, description, date } = req.body;

  if (!macaddress)
    return res.status(400).json({
      error:
        "O macaddress do celular é obrigatório, verifique e tente novamente",
    });
  else if (!type) return res.status(400).json({ error: "Tipo é obrigratório" });
  else if (!title)
    return res.status(400).json({ error: "O título é ogrigatório" });
  else if (!description)
    return res.status(400).json({ error: "A descrição é ogrigatório" });
  else if (!date)
    return res.status(400).json({ error: "A data e hora são ogrigatórios" });
  else if (isPast(new Date(date)))
    return res.status(400).json({ error: "Escolha uma data e hora válidos" });
  else {
    let exists;
    if (req.params.id) {
      exists = await ListaDeTreinosModel.findOne({
        _id: { $ne: req.params.id },
        date: { $eq: new Date(date) },
        macaddress: { $in: macaddress },
      });
    } else {
      exists = await ListaDeTreinosModel.findOne({
        'date': { '$eq': new Date(date) },
        'macaddress': { '$in': macaddress },
      });
    }

    if (exists) {
      return res
        .status(400)
        .json({ error: "Já existe um treino cadastrado neste dia e horário" });
    }

    next();
  }
};

module.exports = ListaDeTreinosValidation;
