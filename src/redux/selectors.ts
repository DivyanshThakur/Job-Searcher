import { createSelector } from "reselect";
import { RootState } from "./store";
import { IFilter, IJob } from "../types/common.type";

const filterNullValues = (item: IJob) =>
  item.minExp !== null &&
  item.maxExp !== null &&
  item.minJdSalary !== null &&
  item.maxJdSalary !== null;

const filterByCompanyName = (item: IJob, filter: IFilter) =>
  item.companyName
    .toLocaleLowerCase()
    .includes(filter.companyName.toLocaleLowerCase());

const filterByRoles = (item: IJob, filter: IFilter) =>
  filter.roles.length === 0 ||
  filter.roles.map((role) => role.value).includes(item.jobRole);

const filterByLocations = (item: IJob, filter: IFilter) =>
  filter.locations.length === 0 ||
  filter.locations.map((loc) => loc.value).includes(item.location);

const filterByMinExperience = (item: IJob, filter: IFilter) =>
  !filter.minExperience || item.minExp >= +filter.minExperience.value;

const filterByMinBasePay = (item: IJob, filter: IFilter) =>
  !filter.minBasePay || item.minJdSalary >= +filter.minBasePay.value;

export const getJobsSelector = createSelector(
  [(state: RootState) => state.jobList],
  (jobList) => {
    return jobList.jobs
      .filter(filterNullValues)
      .filter((job) => filterByCompanyName(job, jobList.filter))
      .filter((job) => filterByRoles(job, jobList.filter))
      .filter((job) => filterByLocations(job, jobList.filter))
      .filter((job) => filterByMinExperience(job, jobList.filter))
      .filter((job) => filterByMinBasePay(job, jobList.filter));
  }
);
