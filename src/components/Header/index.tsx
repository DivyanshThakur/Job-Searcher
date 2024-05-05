import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Job Searcher (Weekday)
        </Typography>
        <Button
          variant="outlined"
          LinkComponent="a"
          href="https://portfolio-divyansh.netlify.app"
          target="_blank"
          color="inherit"
        >
          My Unique Portfolio
        </Button>
        <Button
          LinkComponent="a"
          href="https://www.linkedin.com/in/divyansh-s-thakur"
          target="_blank"
          color="inherit"
          style={{ margin: "0 10px" }}
        >
          Linkedin
        </Button>
        <Button
          LinkComponent="a"
          href="https://github.com/DivyanshThakur/Job-Searcher"
          target="_blank"
          color="inherit"
        >
          GitHub
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
