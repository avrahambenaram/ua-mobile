declare module '*.png';
declare interface Pet {
    uuid: string
    phone: string
    email: string
    name: string
    created_at: string
    pet: {
        uuid: string
        hair_type: 'straight' | 'curly'
        hair_color: string
        pet_name: string
        image: string
        gender: 'male' | 'female'
        size: 'small' | 'medium' | 'large'
        type: 'dog'
        breed: string
        created_at: string
    }
    user: User
}
declare interface User {
    uuid: string
    name: string
    avatar: string
    created_at: string
}
declare interface Auth {
    authenticated: boolean
    token: string
}