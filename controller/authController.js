const User = require("../modal/userModal");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({ status: "success", data: { user } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "invalid data" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({ status: "success", data: { user } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Can not found any user" });
  }
};

exports.updateMe = async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  try {
    if (req.file.filename) {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      user.photo = req.file.filename;
    }

    res.status(200).json({ status: "success", data: { user } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Can update user" });
  }
};
