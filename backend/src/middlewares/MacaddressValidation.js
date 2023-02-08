const MacaddressValidation = (req, res, next) => {
  if (!req.body.macaddress) {
    return res
      .status(400)
      .json({
        error:
          "O macaddress do celular é obrigatório!",
      });
  } else {
    next();
  }
};

module.exports = MacaddressValidation;
