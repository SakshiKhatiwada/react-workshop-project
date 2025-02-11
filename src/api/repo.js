import axiosInstance from "../utils/axiosInstance";

export const fetchRepository = async (language, page = 1, per_page = 8) => {
  const response = await axiosInstance.get(
    `search/repositories?q=language:${language}&sort=stars&order=desc&per_page=${per_page}&page=${page}`
  );

  const repos = response?.data?.items;
  const count = response?.data?.total_count;

  if (count > 0) {
    return repos;
  } else {
    throw new Error("No repositories found!");
  }
};
