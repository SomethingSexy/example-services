import fastify from "fastify";
import fastifyCors from 'fastify-cors';
import { services } from "./services/index.js";
export const bootstrap = ()=>{
    const app = fastify({
        logger: true
    });
    app.register(fastifyCors);
    services.forEach((s)=>app.route(s)
    );
    app.listen(process.env.PORT, '0.0.0.0', (error, address)=>{
        if (error) {
            console.log(`There was an issue start service ${error}.`);
        } else {
            console.log(address);
        }
    });
};
