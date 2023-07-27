const KidsModel = require("../models/kidsModel");

const getAllKids = async (req, res) => {
  try {
    const allKids = await KidsModel.find({}, null);
    res.status(200).json(allKids);
  } catch {
    res.status(500).json({ message: error.message });
  };
};

const getKidsByName = async (req, res) => {
  try {   
    const findKids = await KidsModel.findByName(req.params.name);
    res.status(200).json(findKids);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewKids = async (req, res) => {
  try {
    const {
      name,
      birth,
      school,
      responsible,
      number,
      address,      
    } = req.body;

    const newKids = new KidsModel({
      name,
      birth,
      school,
      responsible,
      number,
      address,
    });
    const savedKids = await newKids.save();
    res
      .status(200)
      .json({ message: "New Kids added successfully!", savedKids });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const updateKidsByName = async (req, res) => {
  try {
    const {
        name,
        birth,
        school,
        responsible,
        number,
        address,
    } = req.body;
    const updateKids = await KidsModel.findByNameAndUpdate(
      req.params.name,
      {
      name,
      birth,
      school,
      responsible,
      number,
      address,
      }
    );
    res.status(200).json(updateKids);
  } catch {
  console.error(error);
  res.status(500).json({ message: error.message });
}
};

const deleteKids = async (req, res) => {
  try {
    const { name } = req.params;
    const findKids = await KidsModel.findByName(name);

    if (findKids == null) {
      return res.status(404).json({ message: `Kids with name ${name} not found` })
    };
    await findKids.remove();
    res.status(200).json({ message: `Kids with name ${name} was successfully deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

module.exports = {
  getAllKids,
  getKidsByName,
  addNewKids,
  updateKidsByName,
  deleteKids,
};