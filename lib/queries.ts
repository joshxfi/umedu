import { Tag } from "@/db/schema";
import { queryOptions } from "@tanstack/react-query";

export const getTagsQuery = queryOptions<Array<Tag>>({
  queryKey: ["tags"],
  queryFn: async () => {
    const res = await fetch("/api/tags");
    if (!res.ok) {
      throw new Error("Failed to fetch tags");
    }
    const data = await res.json();
    return data;
  },
});
