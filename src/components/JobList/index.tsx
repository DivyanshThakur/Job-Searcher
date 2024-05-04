import { Grid } from "@mui/material";
import JobCard from "../JobCard";
import { IJob } from "../../types/common.type";
import styles from "./styles.module.css";
interface JobListProps {
  items: IJob[];
}

const JobList = ({ items }: JobListProps) => {
  return (
    <Grid container className={styles.jobListContainer}>
      {items.map((job) => (
        <Grid item key={job.jdUid} className={styles.jobCard} xs={12} md={6} lg={4}>
          <JobCard data={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobList;
