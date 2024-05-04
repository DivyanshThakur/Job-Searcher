import { Container } from "@mui/material";
import useGetJobListInfiniteQuery from "../hooks/useGetJobListInfiniteQuery";
import JobList from "../components/JobList";
import JobFilter from "../components/JobFilter";
import Loader from "../components/Loader";

const Homepage = () => {
  const { isLoading, data } = useGetJobListInfiniteQuery();

  return (
    <Container component="main">
      <JobFilter />
      <JobList items={data} />
      <Loader show={isLoading} />
    </Container>
  );
};

export default Homepage;
