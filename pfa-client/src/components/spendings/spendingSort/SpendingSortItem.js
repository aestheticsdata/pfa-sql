import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";
import sortSpendingsMessages from './messages';

const SpendingSortItem = ({ name, onClickSort }) => {
  const sortName = `SORT_BY_${name.toUpperCase()}`;
  return (
    <div
      className={`${name}-sort`}
      onClick={() => onClickSort(sortName)}
    >
      <span>
        <FormattedMessage {...sortSpendingsMessages[sortName]} />
      </span>
      <FontAwesomeIcon
        icon={faSort}
        className="icon"
      />
    </div>
  );
};

export default SpendingSortItem;
