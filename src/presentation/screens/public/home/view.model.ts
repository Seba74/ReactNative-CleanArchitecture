import { useState } from "react";
import { HomeViewModel } from "./models";
import { usePosts } from "@/presentation/hooks/usePosts";

const useHomeViewModel = (): HomeViewModel => {
  const [search, setSearch] = useState("");
  const { data, isLoading } = usePosts();
  const onSubmit = () => {};

  return {
    search,
    setSearch,
    onSubmit,
    posts: data || [],
    isLoading,
  };
};

export default useHomeViewModel;
