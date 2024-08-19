import { IPostRepository } from "@/domain/specifications/IPostRepository";
import { Container } from "inversify";
import { TYPES } from "./types";
import PostRepository from "../implementations/PostRepository";
import { GetPostsUseCase } from "@/application/PostUseCases/GetPostsUseCase";

const container = new Container();
container.bind<IPostRepository>(TYPES.PostRepository).to(PostRepository);
container.bind<GetPostsUseCase>(GetPostsUseCase).toSelf();

export { container };
