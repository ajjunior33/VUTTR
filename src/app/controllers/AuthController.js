const bcrypt = require('bcryptjs');

const User = require('../models/User');

const { generateToken } = require('../utils/createToken');

module.exports = {
  async auth(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).select('+password');
    if (!user) {
      return res
        .status(400)
        .json({ messager: 'Username não encontrado.', status: false });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res
        .status(401)
        .json({ messsager: 'Senha incorreta.', status: false });
    }

    user.password = undefined;

    return res.send({
      messager: 'Autenticado com sucesso.',
      status: true,
      token: generateToken({ id: user.id }),
    });
  },
};
