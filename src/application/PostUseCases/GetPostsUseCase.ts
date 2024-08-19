import { Post } from "@/domain/entities/PostEntity";
import { IPostRepository } from "@/domain/specifications/IPostRepository";
import { TYPES } from "@/infrastructure/di/types";
import { inject, injectable } from "inversify";

@injectable()
export class GetPostsUseCase {
  @inject(TYPES.PostRepository)
  private postRepository!: IPostRepository;

  async execute(): Promise<Post[]> {
    return this.postRepository.getPosts();
  }
}
