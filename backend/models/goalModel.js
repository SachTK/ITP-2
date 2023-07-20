const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    },

    checked: {
        type: Boolean,
        required: [true, 'Please check'],
        default:false
    }

},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Goal', goalSchema)