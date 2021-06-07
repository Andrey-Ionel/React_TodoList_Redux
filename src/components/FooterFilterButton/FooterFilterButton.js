import React from "react";
import PropTypes from "prop-types";

const FooterFilterItem = ({ isSelected, itemEnum, title, setFilter }) => {
  return (
    <li>
      <a
        href="javascript:void(0);"
        className={isSelected ? "selected" : ""}
        onClick={e => { e.preventDefault(); setFilter(itemEnum); }}>
        {title}
      </a>
    </li>
  );
}

FooterFilterItem.propTypes = {
  isSelected: PropTypes.bool,
  itemEnum: PropTypes.oneOf([0, 1, 2]),
  title: PropTypes.string,
}

export default React.memo(FooterFilterItem);