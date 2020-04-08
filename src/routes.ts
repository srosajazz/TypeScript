import { Response, Request } from 'express';
import createUser from './services/CreateUser';


// string , number, boolean, object, Array
// interfaces

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'sergio@gmail.com',
        password: '123456',
        techs: [
            'TypeScript',
            'Node.js',
            'ReactJS',
            { title: 'Java', experience: 100 },
        ],
    });
    console.log(user.email);

    return response.json({ message: 'HelloWorld' });
};