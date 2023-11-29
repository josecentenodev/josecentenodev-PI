import React, { useState, useEffect } from "react";
import { SearchBarWrapper, StyledInput } from "./styles";
import { useDispatch } from "react-redux";
import { getDriversByName } from "../../redux/actions";

const SearchInput = () => {
  const [nameToSearch, setNameToSearch] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => setNameToSearch(e.target.value);

  useEffect(() => {
    dispatch(getDriversByName(nameToSearch))
  }, [nameToSearch]);

  return (
    <SearchBarWrapper>
      🔎{" "}
      <StyledInput
        type="text"
        placeholder="Buscar"
        onChange={handleChange}
      />
    </SearchBarWrapper>
  );
};

export default SearchInput;
