const mongoose=require('mongoose')

const sprintSchema = mongoose.Schema({
    name: String,
    startDate: Date,
    endDate: Date,
    // tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
  });
  
  const Sprintmodel = mongoose.model('Sprint', sprintSchema);

  module.exports={Sprintmodel}