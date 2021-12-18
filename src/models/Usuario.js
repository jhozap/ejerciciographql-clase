import {Schema, model} from "mongoose";
const UsuarioSchema = Schema({
    nombre : {type :  String, required : true},
    apellido : {type :  String, required : true},
    email : {type :  String, required : true},
    password : {type : String, required : true},
    estado : {type :  Boolean, required : true, default: false},
    rol: {
        type: Schema.Types.ObjectId,
        ref: 'Rol',
        required: true
    },
})
export default  model("Usuario", UsuarioSchema);
