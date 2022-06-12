import client from '@/api/client';

export async function getPosts() {
    const response = await client.get<any>('/');
    return response.data;
}
export async function getPost(id: number) {
    const response = await client.get<any>('/');
    return response.data;
}
