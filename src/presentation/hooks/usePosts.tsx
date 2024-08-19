import { GetPostsUseCase } from "@/application/PostUseCases/GetPostsUseCase";
import { container } from "@/infrastructure/di/container";
import { useQuery } from "@tanstack/react-query";

export const usePosts = () => {
  const getPostsUseCase = container.get<GetPostsUseCase>(GetPostsUseCase);

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => getPostsUseCase.execute(),
  });

  return { data, isLoading, error };
};
