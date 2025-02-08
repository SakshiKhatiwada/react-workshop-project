import { FaStar, FaCodeBranch, FaArrowRight } from "react-icons/fa";

const RepoCard = ({ name, description, stars, forks, url }) => {
  return (
    <div className="repo-card">
      <h2>{name}</h2>
      <p>{description || "No description available ✅"}</p>

      <div className="repo-stats">
        <span>
          <FaStar /> {stars}
        </span>
        <span>
          <FaCodeBranch /> {forks}
        </span>

        <a href={url} target="_blank" rel="noopender noreferrer">
          View on Github <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default RepoCard;
