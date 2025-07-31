import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Search = () => {
  const { searchText, setSearchText } = useContext(AppContext);

  return (
    <div>
      <TextField
        id="outlined-required"
        defaultValue="Search"
        sx={{ backgroundColor: "white", borderRadius: "8px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
    </div>
  );
};

const Wrapper = styled.div``;

export default Search;
