const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { username, password, email } = req.body;
    const data = { username, password, email };

    const verifyEmail = await User.findOne({ email });

    if (verifyEmail !== null) {
      return res.status(400).json({
        messager: 'Já existe um usuario com esse e-mail.',
        status: false,
      });
    }

    const verifyUsername = await User.findOne({ username });
    if (verifyUsername !== null) {
      return res.status(400).json({
        messager: 'Já existe um alguém usando esse nome de usuario.',
        status: false,
      });
    }

    try {
      const create = await User.create(data);
      create.password = undefined;

      return res.status(200).json({
        messager: 'Usuario criado com sucesso.',
        status: true,
        create,
      });
    } catch (err) {
      return res
        .status(400)
        .json({ messager: 'Erro ao criar o usuario.', status: false });
    }
  },
};
