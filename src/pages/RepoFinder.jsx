import DropDown from "../components/DropDown";
import "../styles/RepoStyle.css";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchRepoRequest,
  fetchRepoFailure,
  fetchRepoSuccess,
} from "../slices/repoFinderSlice";
import { fetchRepository } from "../api/repo";
import RepoCard from "../components/RepoCard";
import { useState } from "react";

const RepoFinder = () => {
  const dispatch = useDispatch();
  const { repos, language, loading, error } = useSelector(
    (state) => state.repoFinder
  );

  const handleFetch = async () => {
    if (!language) {
      return;
    }
    dispatch(fetchRepoRequest());
    try {
      const repos = await fetchRepository(language);
      dispatch(fetchRepoSuccess(repos));
    } catch (error) {
      dispatch(fetchRepoFailure(error?.message || "Failed to fetch"));
    }
  };

  return (
    <div className="repo-finder-container">
      <h1>
        <FaGithub /> Github Repository Finder
      </h1>

      <div className="head">
        <DropDown />
        {!error && (
          <button
            onClick={handleFetch}
            disabled={loading}
            className="find-button"
          >
            {loading ? "Loading..." : "Find Repository"}
          </button>
        )}
      </div>

      {error && (
        <div className="error-box">
          <div className="status-message status">
            <p className="error-msg">{error}</p>
          </div>
          <button onClick={handleFetch} className="find-button">
            Retry
          </button>
        </div>
      )}

      {/* Repo Card */}
      <div className="repo-container">
        {console.log(repos, "repos")}
        {repos?.slice(0, 5).map((repo, index) => {
          return (
            <RepoCard
              key={index}
              name={repo?.name}
              description={repo?.description}
              stars={repo?.stargazers_count}
              forks={repo?.forks_count}
              url={repo?.html_url}
            />
          );
          s;
        })}
       
      </div>
    </div>
  );
};

export default RepoFinder;
