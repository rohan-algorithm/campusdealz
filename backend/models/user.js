import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema; 

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  college: { type: String, required: true },
  batch: { type: String, required: true },
  address: { type: String, required: true },
  avatar: { type: String, default:"https://res.cloudinary.com/do1t9yc6x/image/upload/v1719831030/pb_wes8fd.avif" },
  // products: [{ type: Schema.Types.ObjectId, ref: 'products' , required: false }], 
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});


// Hash the password before saving the user
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  // Method to compare passwords
  UserSchema.methods.comparePassword = function(enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
  };
  
  const User = mongoose.model('User', UserSchema);
  export default User;

