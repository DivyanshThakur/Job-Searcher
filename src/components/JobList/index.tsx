import { Grid } from "@mui/material";
import JobCard from "../JobCard";
import { IJob } from "../../types/common.type";
import styles from "./styles.module.css";
import useJobFilter from "../../hooks/useJobFilter";

interface JobListProps {
  items: IJob[];
}

const JobList = ({ items }: JobListProps) => {
  const filteredJobs = useJobFilter({ items });

  return (
    <Grid container>
      {filteredJobs.map((job) => (
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

export default JobList;
