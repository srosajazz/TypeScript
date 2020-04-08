/**
 * User: name, email, password
 */

interface TechObject {
    title: string,
    experience: number
}


interface CreateUserData {
    name?: string, // ? means -> not require
    email: string,
    password: string
    techs: Array<string | TechObject>

}

// export default function createUser(name = '', email: string, password: string) { // 1 option
export default function createUser({ name, email, password }: CreateUserData) { // 2 option
    const user = {
        name,
        email,
        password
    }
    return user;
}