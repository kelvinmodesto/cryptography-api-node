import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  userDocument:{
    required: true,
    type: String,
  },
  creditCardToken: {
    required: true,
    type: String,
  },
  value: {
    required: true,
    type: Number,
  },
});

const document = mongoose.model('document', schema);

export default document;
