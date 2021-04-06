import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

const SpendingSortItem = ({ name, onClickSort }) => {
  return (
    <div
      className={`${name}-sort`}
      onClick={() => onClickSort(`SORT_BY_${name.toUpperCase()}`)}
    >
      <span>
        {name}
      </span>
      <FontAwesomeIcon
        icon={faSort}
        className="icon"
      />
    </div>
  );
};

export default SpendingSortItem;
