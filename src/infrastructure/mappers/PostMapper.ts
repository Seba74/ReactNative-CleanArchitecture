import { Post } from "@/domain/entities/PostEntity";

export class PostMapper {
  static async mapPost(post: PostResponse): Promise<Post> {
    return {
      id: post.id,
      title: post.title,
      description: post.body,
      userId: post.userId,
    };
  }
}
