import styled from "@emotion/styled";
import Search from "./Search/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link, Popover, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Text>
          <DashboardIcon /> BOARDS
        </Text>
        <Search />

        <div style={{ width: "100px", display: "flex", gap: "10px", justifyContent: "center" }}>
          <Link
            href="https://github.com/ketrinnem?tab=repositories"
            underline="none"
            target="_blank"
            color="white"
          >
            <GitHubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/neirapiranic/"
            underline="none"
            target="_blank"
            color="white"
          >
            <LinkedInIcon />
          </Link>

          <Tooltip title="Viewing as a guest user">
            < AccountCircleIcon />
          </Tooltip>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 60px;
  background-color: #3e69ad;
  border-bottom: 2px solid #5d6c85; 
  padding: 0 16px;
  box-sizing: border-box; 
  overflow: hidden; 
  display: flex;
  align-items: center;
  position: fixed;  
  top: 0;           
  left: 0;           
  width: 100vw;      
  z-index: 1000;    
`

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`;

const Text = styled.div`
color: lightblue;
display: flex;
align - items: center;
gap: 10px;
`;

export default Header;
