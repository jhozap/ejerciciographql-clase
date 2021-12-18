import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema";
import {dbConnection}  from "./database/config";
import { validarJwt } from "./middleware/validar-jwt";
import cors from 'cors';

import dotenv from 'dotenv';

dotenv.config();

 const app = express();
 dbConnection();
 app.use(cors());
 app.use(validarJwt);
 app.use("/graphql", graphqlHTTP((req) => ({
     graphiql : true,
     schema : schema,
     context : {
         user : req.user
     }
 })));

 app.listen(4100, () => {
     console.log ("Servidor conectado en el puerto 4100");
 })