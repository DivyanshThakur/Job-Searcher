import React from "react";
import { Container } from "@mui/material";
import JobCard from "../components/JobCard";

const Homepage = () => {
  return (
    <Container component="main" style={{ background: "blue" }}>
      Homepage
      <JobCard />
    </Container>
  );
};

export default Homepage;
