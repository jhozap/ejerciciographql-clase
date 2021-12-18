const { Schema, model } = require('mongoose');

const RolSchema = Schema({
    name: {
        type: String,
        required: true
    },
    registro: {
        type: Boolean,
        required: true
    }
},
{
    collection: 'roles'
}
);

module.exports = model('Rol', RolSchema);
