import { graphql } from "graphql"
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schema";
import { dbConnection } from "../../database/config";

import dotenv from 'dotenv';

dotenv.config();

const getUsuarios = {
    query: `
        {
            usuarios {
                id
                nombre
                apellido
                email
                password
            }
        }
    `,
    variables: {},
    context: {
        user: {
            auth: true
        }
    },
    esperado: {
        data: {
            usuarios: [
                {
                    id: "61bda66fbe9a905267a57b9a",
                    nombre: "Jhonny",
                    apellido: "Zapata",
                    email: "jhonny.z1022@gmail.com",
                    password: "$2b$10$Hsu638qbze2RvZYOub3UtuEXG5rGtRhR1RhcJXMB4dZdLyXgqEZpG"
                }
            ]
        }
    }
};

const schema = makeExecutableSchema({typeDefs, resolvers});

const { query, variables, context, esperado } = getUsuarios;

test('traer todos los usuarios', async () => {

    await dbConnection();
    const result = await graphql(schema, query, null, context, variables);

    expect(result).toEqual(esperado);

})