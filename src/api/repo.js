import axiosInstance from "../utils/axiosInstance";

export const fetchRepository = async (language) => {
  const response = await axiosInstance.get(
    `search/repositories?q=language:${language}&sort=stars&order=desc`
  );

  const repos = response?.data?.items;
  const count = response?.data?.total_count;

  if (count > 0) {
    return repos;
  } else {
    throw new Error("No repositories found!");
  }
};
