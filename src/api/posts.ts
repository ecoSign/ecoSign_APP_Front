import client from '@api/client';
import { Post } from '@api/types';

export async function getPosts() {
  const response = await client.get<Post[]>('/');
  return response.data;
}

export async function getPost(id: number) {
  const response = await client.get<Post>('/');
  return response.data;
}
