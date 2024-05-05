import { Grid } from "@mui/material";
import JobCard from "../JobCard";
import { IJob } from "../../types/common.type";
import styles from "./styles.module.css";
import { useAppSelector } from "../../redux/hooks";
interface JobListProps {
  items: IJob[];
}

const JobList = ({ items }: JobListProps) => {
  const { filter } = useAppSelector((state) => state.jobList);

  const filterNullValues = (item: IJob) =>
    item.minExp !== null &&
    item.maxExp !== null &&
    item.minJdSalary !== null &&
    item.maxJdSalary !== null;

  const filterByCompanyName = (item: IJob) =>
    item.companyName
      .toLocaleLowerCase()
      .includes(filter.companyName.toLocaleLowerCase());

  const filterByRoles = (item: IJob) =>
    filter.roles.length === 0 ||
    filter.roles.map((role) => role.value).includes(item.jobRole);

  const filterByLocations = (item: IJob) =>
    filter.locations.length === 0 ||
    filter.locations.map((loc) => loc.value).includes(item.location);

  const filterByMinExperience = (item: IJob) =>
    !filter.minExperience || item.minExp >= +filter.minExperience.value;

  const filterByMinBasePay = (item: IJob) =>
    !filter.minBasePay || item.minJdSalary >= +filter.minBasePay.value;

  const getFilteredJobs = () => {
    return items
      .filter(filterNullValues)
      .filter(filterByCompanyName)
      .filter(filterByRoles)
      .filter(filterByLocations)
      .filter(filterByMinExperience)
      .filter(filterByMinBasePay);
  };

  return (
    <Grid container className={styles.jobListContainer}>
      {getFilteredJobs().map((job) => (
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
