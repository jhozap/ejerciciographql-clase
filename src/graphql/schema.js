import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

export const typeDefs = `
    type Query {
        usuarios : [Usuario]
        usuarioById(id: ID!) : Usuario
        login(email : String! , password : String!) : Auth
    }


    type Mutation {
        crearUsuario(usuario : UsuarioInput): Usuario
        actualizarUsuario(usuario : UsuarioInput) : Usuario
        eliminarUsuario(id: ID!) : String 
    }

    type Auth {
        token: String,
        usuario: String,
        rol: String
    }

    type Usuario {
        id : ID,
        nombre : String,
        apellido : String,
        email : String,
        password : String,
        estado : Boolean,
        rol: String
    }

    type Curso {
        id: ID,
        nombre: String,
        lenguajes: [Lenguaje],
        fecha: String,
    } 

    type Lenguaje {
        lenguaje : String
    }

    input UsuarioInput{
        id : ID,
        nombre : String!,
        apellido : String!,
        email : String!,
        password : String!,
        estado : Boolean,
        rol: String!
    }

`;

export default makeExecutableSchema({
    typeDefs : typeDefs,
    resolvers : resolvers
})