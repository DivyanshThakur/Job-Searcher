import { Box, Grid, Typography } from "@mui/material";
import JobCard from "../JobCard";
import { IJob } from "../../types/common.type";
import styles from "./styles.module.css";
import noJobImg from "../../assets/images/notFound.png";
import { getJobsSelector } from "../../redux/selectors";
import { RootState } from "../../redux/store";
import { connect } from "react-redux";

interface JobListProps {
  items: IJob[];
  isLoading?: boolean;
}

const JobList = ({ items, isLoading = false }: JobListProps) => {
  if (items.length === 0 && !isLoading) {
    return (
      <Box className={styles.emptyListContainer}>
        <img src={noJobImg} width="150" height="150" alt="No Jobs Icon"></img>
        <Typography>
          No Jobs available for this category at the moment
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container>
      {items.map((job) => (
        <Grid
          item
          key={job.jdUid}
          className={styles.jobCard}
          xs={12}
          md={6}
          lg={4}
        >
          <JobCard data={job} />
        </Grid>
      ))}
    </Grid>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    items: getJobsSelector(state),
    isLoading: state.jobList.isLoading,
  };
};

export default connect(mapStateToProps)(JobList);
