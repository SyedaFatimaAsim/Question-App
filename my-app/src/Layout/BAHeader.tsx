import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import BAButton from "../components/BAButton";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getValue } from "@testing-library/user-event/dist/utils";
import AllQuestion from "../Pages/allquestion";
import AskQuestion from "../Pages/askquestion";


export default function BAHeader() {
  const [currentPage, setCurrentPage] = useState<any>('/');

  const navigateTo = (page:any) => {
    setCurrentPage(page);
  };
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Que App
        </Typography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/questions" color="inherit">All Questions</Button>
        <Button component={Link} to="/askquestion" color="inherit">Ask Question</Button>
      </Toolbar>
    </AppBar>
  );
}

