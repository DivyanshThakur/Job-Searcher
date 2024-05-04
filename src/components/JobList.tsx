import JobCard from "./JobCard";
import { IJob } from "../types/common.type";
import { Grid } from "@mui/material";

interface JobListProps {
  items: IJob[];
}

const JobList = ({ items }: JobListProps) => {
  return (
    <Grid container gap={1}>
      {items.map((job) => (
        <Grid item key={job.jdUid}>
          <JobCard data={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobList;
