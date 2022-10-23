export interface User {
    id: string;
    name: string;
    nickname: string;
    phoneNumber: string;
    email?: string;
    profileImage?: string;
}

export interface Post {
    id: number;
    title: string;
    content: string;
    category: string;
    createdAt: string;
    updatedAt: string;
}

export interface Comment {
    id: number;
    content: string;
    user: User;
    createdAt: string;
    updatedAt: string;
}
