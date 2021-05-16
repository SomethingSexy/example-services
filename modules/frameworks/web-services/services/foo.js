import { getFoo } from '../../../use-cases/get-foo.js';
export const get = {
    method: 'GET',
    url: '/foo',
    handler: (request, reply)=>{
        reply.status(200).send(getFoo());
    }
};
export const post = {
    method: 'POST',
    url: '/foo',
    handler: (request, reply)=>{
        const body = request.body;
        reply.status(200).send(body);
    }
};
export const services = [
    get,
    post
];
