import { config } from "@/config";

export const fetchServerData = async (url: string, revalidate?: number) => {
  const response = await fetch(`${config.apiUrl}${url}`, {
    next: {
      revalidate,
    },
  });
  const data = await response.json();
  return data;
};
