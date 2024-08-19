import { Post } from "@/domain/entities/PostEntity";

export interface HomeViewModel {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
  posts: Post[];
  isLoading: boolean;
}
