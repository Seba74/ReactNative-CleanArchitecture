import { Post } from "@/domain/entities/PostEntity";
import { IPostRepository } from "@/domain/specifications/IPostRepository";
import jsonApi from "@/config/api/jsonApi";
import { injectable } from "inversify";
import { PostMapper } from "../mappers/PostMapper";

@injectable()
class PostRepository implements IPostRepository {
  private readonly baseUrl = "/posts";

  async getPosts(): Promise<Post[]> {
    const { data } = await jsonApi.get<PostResponse[]>(this.baseUrl);

    const promisePost = await Promise.all(data.map(PostMapper.mapPost));
    return promisePost;
  }

  async getPostById(id: number): Promise<Post> {
    const { data } = await jsonApi.get<PostResponse>(`${this.baseUrl}/${id}`);
    return PostMapper.mapPost(data);
  }
}

export default PostRepository;
