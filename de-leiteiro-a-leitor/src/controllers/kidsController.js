const KidsModel = require("../models/kidsModel");

const getAllKids = async (req, res) => {
  try {
    const allKids = await KidsModel.find({}, null);
    res.status(200).json(allKids);
  } catch {
    res.status(500).json({ message: error.message });
  };
};

const getKidsById = async (req, res) => {
  try {   
    const findKids = await KidsModel.findById(req.params.id);
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

const updateKidsById = async (req, res) => {
  try {
    const {
        name,
        birth,
        school,
        responsible,
        number,
        address,
    } = req.body;
    const updateKids = await KidsModel.findByIdAndUpdate(
      req.params.id,
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
    const { id } = req.params;
    const findKids = await KidsModel.findById(id);

    if (findKids == null) {
      return res.status(404).json({ message: `Kids with name ${id} not found` })
    };
    await findKids.remove();
    res.status(200).json({ message: `Kids with name ${id} was successfully deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

module.exports = {
  getAllKids,
  getKidsById,
  addNewKids,
  updateKidsById,
  deleteKids,
};