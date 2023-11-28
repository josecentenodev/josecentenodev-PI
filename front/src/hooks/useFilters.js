import React, { useState } from "react";

const useFilters = () => {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedSort, setSelectedSort] = useState({ name: "", sorting: "" });
  const [includeDB, setIncludeDB] = useState(true);
  const [includeAPI, setIncludeAPI] = useState(true);

  const handleSelectedTeam = (e) => {
    const team = e.target.value;
    setSelectedTeam(team);
  };
  const handleSelectedSort = (e) => {
    setSelectedSort((prevState) => {
      return { ...prevState, name: e.target.name, sorting: e.target.value };
    });
  };

  const handleOrigin = (e) => {
    const origin = e.target.name;
    if (origin === "apiOrigin") {
      setIncludeAPI(!includeAPI);
    }
    if (origin === "dbOrigin") {
      setIncludeDB(!includeDB);
    }
  };

  return {
    includeAPI,
    includeDB,
    selectedSort,
    selectedTeam,
    handleSelectedTeam,
    handleSelectedSort,
    handleOrigin,
  };
};

export default useFilters;
