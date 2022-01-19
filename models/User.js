const database = require('../util/database');
const bcrypt = require('bcryptjs');

const UserSchema = new database.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: { 
        type: Date,
        default: Date.now
    }
  });

  UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  });

  const User = database.models.User || database.model('User', UserSchema);
  module.exports = User;