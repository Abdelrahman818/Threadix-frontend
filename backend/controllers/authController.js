const Users = require('../models/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookie = require('cookie-parser');

async function login(req, res) {
  try {
    return res.status(200).json({
      successful: true,
      msg: 'Logged in successfully',
    });
  } catch (error) {
    return res.status(500).json({
      successful: false,
      msg: error.message,
    });
  }
}

async function signup(req, res) {
  try {
    const { name, email, pwd } = req.user;

    // Check if user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        successful: false,
        msg: 'User with this email already exists',
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(pwd, salt);
    
    // Save user to database
    const newUser = new Users({
      name,
      email,
      pwd: hashedPwd,
    });
    try {
      await newUser.save();
    } catch (err) {
      // Handle duplicate email error from MongoDB
      if (err.code === 11000) {
        return res.status(400).json({
          successful: false,
          msg: 'User with this email already exists',
        });
      }
      return res.status(500).json({
        successful: false,
        msg: 'Error saving user to database',
      });
    }
    
    // Generate JWT with only `id` in payload
    const token = jwt.sign({ id: newUser._id }, process.env.TOKEN_SECRET_KEY, { expiresIn: '1w' });
    
    // Set token in HttpOnly cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax',
      maxAge: 7*24*60*60*1000, // 1 week
    });

    return res.status(201).json({
      successful: true,
      msg: 'User created successfully',
    });
  } catch (error) {
    return res.status(500).json({
      successful: false,
      msg: error.message,
    });
  }
}

function logout(req, res) {
  try {
    res.cookie('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax',
      maxAge: 0,
    });
    return res.status(200).json({
      successful: true,
      msg: 'logged out',
    });
  } catch (error) {
    return res.status(500).json({
      successful: false,
      msg: error.message,
    });
  }
}

async function getCurrentUser(req, res) {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({
        successful: false,
        msg: 'No token provided',
      });
    }

    let userId;
    try {
      const payload = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
      userId = payload.id;
    } catch (err) {
      return res.status(401).json({
        successful: false,
        msg: 'Invalid or expired token',
      });
    }

    const user = await Users.findById(userId).select('-pwd');
    if (!user) {
      return res.status(404).json({
        successful: false,
        msg: 'User not found',
      });
    }

    return res.status(200).json({
      successful: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      successful: false,
      msg: error.message,
    });
  }
}

module.exports = {
  login,
  signup,
  logout,
  getCurrentUser,
}
