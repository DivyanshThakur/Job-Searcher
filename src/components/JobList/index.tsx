import { Grid } from "@mui/material";
import JobCard from "../JobCard";
import { IJob } from "../../types/common.type";
import styles from "./JobList.module.css";
interface JobListProps {
  items: IJob[];
}

const JobList = ({ items }: JobListProps) => {
  return (
    <Grid container gap={1} xs={3} className={styles.jobListContainer}>
      {items.map((job) => (
        <Grid item key={job.jdUid}>
          <JobCard data={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobList;
