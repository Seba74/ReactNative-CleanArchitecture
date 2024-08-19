import { Post } from "../entities/PostEntity";

export interface IPostRepository {
  getPosts(): Promise<Post[]>;
  getPostById(id: number): Promise<Post | null>;
}
