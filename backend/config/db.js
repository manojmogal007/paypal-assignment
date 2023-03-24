const mongoose=require('mongoose')


const connection=mongoose.connect('mongodb+srv://manojmogal:manojmogal@cluster0.zgndmnq.mongodb.net/taskmanager?retryWrites=true&w=majority')

module.exports={connection}