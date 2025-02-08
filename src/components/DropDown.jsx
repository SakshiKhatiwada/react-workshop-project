import { useSelector } from "react-redux";
import { setLanguage } from "../slices/repoFinderSlice";
import { useDispatch } from "react-redux";

const languages = [
  "Python",
  "JavaScript",
  "Java",
  "C++",
  "C",
  "Go",
  "Rust",
  "CSS",
  "HTML",
];

const DropDown = () => {
  const dispatch = useDispatch();

  const selectedLanguage = useSelector((state) => state.repoFinder.language);

  return (
    <select
      value={selectedLanguage}
      onChange={(e) => dispatch(setLanguage(e.target.value))}
      className="select-language"
    >
      <option value="">Select a Language</option>
      {languages?.map((lang, index) => {
        return (
          <option key={index} value={lang}>
            {lang}
          </option>
        );
      })}
    </select>
  );
};

export default DropDown;
