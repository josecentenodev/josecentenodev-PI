import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { applyFilters } from "../redux/actions";

const useFilters = () => {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedSort, setSelectedSort] = useState({ name: "", sorting: "" });
  const [includeDB, setIncludeDB] = useState(true);
  const [includeAPI, setIncludeAPI] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(applyFilters({teamName: selectedTeam, sortOrder: selectedSort, includeDB: includeDB, includeAPI: includeAPI}))
  }, [selectedTeam, selectedSort, includeDB, includeAPI]);

  const handleFilter = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "apiOrigin":
        return setIncludeAPI(!includeAPI);
      case "dbOrigin":
        return setIncludeDB(!includeDB);
      case "team":
        return setSelectedTeam(value);
      case "name":
        return setSelectedSort((prevSort) => {
          return { ...prevSort, name: name, sorting: value };
        });
      case "dob":
        return setSelectedSort((prevSort) => {
          return { ...prevSort, name: name, sorting: value };
        });
      default:
        return "";
    }
  };

  return {
    includeAPI,
    includeDB,
    handleFilter,
  };
};

export default useFilters;
