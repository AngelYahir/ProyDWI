import Role from "../models/roles.models.js"
import User from "../models/users.model.js";

export const checkExistingUser = async (req, res, next) => {
    try {
  
      const email = await User.findOne({ email: req.body.email });
      
      if (email) return res.status(400).json({ message: "The email already exists" })
  
      next();

    } catch (error) {
      res.status(500).json({ message: error.message })
    }
}
