import React, { useContext, useState } from "react";
import { BiFilter } from "react-icons/bi";
import "./Filters.css";
import FiltersContainer from "../FiltersContainer/FiltersContainer";
import { DataContext } from "../../contexts/DataContext";

function Filters() {
  const { filter } = useContext(DataContext);
  const [filtersContainer, setFiltersContainer] = useState(false);

  const handleFiltersContainer = () => {
    setFiltersContainer((prevState) => !prevState);
  };

  return (
    <div className="filterContainer">
      <h3 className="filterName">{filter} Posts</h3>
      <BiFilter onClick={handleFiltersContainer} size={25} />
      {filtersContainer && <FiltersContainer />}
    </div>
  );
}

export default Filters;
