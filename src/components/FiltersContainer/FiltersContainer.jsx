import React, { useContext } from "react";
import { AiFillFire, AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import {MdTrendingUp} from "react-icons/md"
import "./FiltersContainer.css";
import { DataContext } from "../../contexts/DataContext";

function FiltersContainer({setFiltersContainer}) {
  const { filter, handleChangeFilter } = useContext(DataContext);

  const filters = [
    { text: "trending", icon: <MdTrendingUp size={21} /> },
    { text: "latest", icon: <AiFillCaretUp size={22} /> },
    { text: "oldest", icon: <AiFillCaretDown size={22} /> },
  ];

  const handleClick = (selectedFilter) => {
    handleChangeFilter(selectedFilter)
    setFiltersContainer(false)
  }

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
            onClick={() => handleClick(singleFilter?.text)}
          >
            {singleFilter?.icon}
            <span>{singleFilter?.text}</span>
          </div>
        );
      })}
    </div>
  );
}

export default FiltersContainer;
