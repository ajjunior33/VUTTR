const Tools = require('../models/Tools');

module.exports = {
  async index(req, res) {
    const { tag } = req.query;
    if (!tag) {
      const list = await Tools.find();
      return res.status(200).json(list);
    }
    const list = await Tools.find({ tags: tag });
    return res.status(200).json(list);
  },
  async store(req, res) {
    const { title, link, description, tags } = req.body;
    const data = { title, link, description, tags };

    try {
      await Tools.create(data);
      return res
        .status(201)
        .json({ status: true, messager: 'Ferramenta criada com sucesso.' });
    } catch (err) {
      return res.status(400).json({
        messager: 'Não foi possível criar essa ferramenta.',
        status: false,
      });
    }
  },
  async destroy(req, res) {
    const { id } = req.params;
    const verify = await Tools.findById(id);
    if (!verify) {
      return res
        .status(400)
        .json({ messager: 'Ferramenta não encontrada', status: false });
    }

    try {
      await Tools.findByIdAndDelete(id);
      return res.status(204).json();
    } catch (err) {
      return res.status(400).json({
        messager: 'Não foi possível excluir essa ferramenta.',
        status: false,
      });
    }
  },
};
