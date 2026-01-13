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
        sx={{
          width: "400px",
          minWidth: 0,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "lightgray",
            },
            "&:hover fieldset": {
              borderColor: "lightgray",
            },
            "&.Mui-focused fieldset": {
              borderColor: "lightgray",
            },
            borderRadius: "8px",
            backgroundColor: "white",
            height: "30px",
          },
          "& .MuiInputBase-input": {
            padding: "0 8px",
            height: "30px",
            fontSize: "14px",
          },
          backgroundColor: "white",
          borderRadius: "8px",
        }}
        style={{ height: "30px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        placeholder="ex. Add header"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
