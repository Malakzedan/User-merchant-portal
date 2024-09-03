const { User, validateUser } = require("../models/user");

const signup = async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  user = new User({
    email: req.body.email,
    username: req.body.username,
    fullName: req.body.fullName,
    mobileNumber: req.body.mobileNumber,
    password: req.body.password,
  });

  await user.save();
  const token = user.generateAuthToken();
  res.status(201).send({ token });
};
const createUser = async (req, res) => {
  const user = new User(req.body);
  console.log(user);
  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletedUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// backend/controllers/authController.js

const Merchant = require("../models/merchants");

// Get all merchants
const getMerchants = async (req, res) => {
  try {
    const merchants = await Merchant.find();
    res.json(merchants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new merchant
const createMerchant = async (req, res) => {
  const merchant = new Merchant(req.body);
  try {
    const savedMerchant = await merchant.save();
    res.status(201).json(savedMerchant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a merchant
const deleteMerchant = async (req, res) => {
  try {
    const { id } = req.params;
    await Merchant.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export the controller functions
module.exports = {
  createUser,
  getMerchants,
  createMerchant,
  deleteMerchant,
  deletedUser,
  signup,
};
