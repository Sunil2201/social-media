import React, { useContext } from "react";
import { AiFillFire, AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import "./FiltersContainer.css";
import { DataContext } from "../../contexts/DataContext";

function FiltersContainer() {
  const { filter, handleChangeFilter } = useContext(DataContext);

  const filters = [
    { text: "trending", icon: <AiFillFire size={20} /> },
    { text: "latest", icon: <AiFillCaretUp size={20} /> },
    { text: "oldest", icon: <AiFillCaretDown size={20} /> },
  ];
  return (
    <div className="filtersContainer">
      {filters.map((singleFilter) => {
        return (
          <div
            className={
              filter === singleFilter?.text
                ? "selectedFilter"
                : "singleFilter"
            }
            onClick={handleChangeFilter}
            value={singleFilter?.text}
          >
            {singleFilter?.icon}
            {singleFilter?.text}
          </div>
        );
      })}
    </div>
  );
}

export default FiltersContainer;
