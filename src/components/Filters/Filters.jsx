import React, { useContext, useState } from "react";
import { MdFilterList } from "react-icons/md";
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
      <MdFilterList onClick={handleFiltersContainer} size={25} />
      {filtersContainer && (
        <FiltersContainer setFiltersContainer={setFiltersContainer} />
      )}
    </div>
  );
}

export default Filters;
