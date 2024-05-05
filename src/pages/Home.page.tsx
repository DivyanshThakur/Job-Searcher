import { Container } from "@mui/material";
import useGetJobListInfiniteQuery from "../hooks/useGetJobListInfiniteQuery";
import JobList from "../components/JobList";
import JobFilter from "../components/JobFilter";
import Loader from "../components/Loader";

const Homepage = () => {
  /**
   * useGetJobListInfiniteQuery() is a custom hook which returns the jobs fetched
   * from Weekday API.
   */
  const { isLoading } = useGetJobListInfiniteQuery();

  return (
    <Container component="main">
      <JobFilter />
      <JobList />
      <Loader show={isLoading} />
    </Container>
  );
};

export default Homepage;
