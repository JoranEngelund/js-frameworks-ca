import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <div>
      <form>
        <label htmlFor="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </label>
        <input type="search" name="search" placeholder="Search..."></input>
      </form>
    </div>
  );
}
