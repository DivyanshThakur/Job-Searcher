import { useMemo, useCallback } from "react";
import { useAppSelector } from "../redux/hooks";
import { IJob } from "../types/common.type";

interface UseJobFilterProps {
  items: IJob[];
}

/**
 ** Optimization 3-4 to 1
 */
const useJobFilter = ({ items }: UseJobFilterProps) => {
  const { filter } = useAppSelector((state) => state.jobList);

  const filterNullValues = useCallback(
    (item: IJob) =>
      item.minExp !== null &&
      item.maxExp !== null &&
      item.minJdSalary !== null &&
      item.maxJdSalary !== null,
    []
  );

  const filterByCompanyName = useCallback(
    (item: IJob) =>
      item.companyName
        .toLocaleLowerCase()
        .includes(filter.companyName.toLocaleLowerCase()),
    [filter.companyName]
  );

  const filterByRoles = useCallback(
    (item: IJob) =>
      filter.roles.length === 0 ||
      filter.roles.map((role) => role.value).includes(item.jobRole),
    [filter.roles]
  );

  const filterByLocations = useCallback(
    (item: IJob) =>
      filter.locations.length === 0 ||
      filter.locations.map((loc) => loc.value).includes(item.location),
    [filter.locations]
  );

  const filterByMinExperience = useCallback(
    (item: IJob) =>
      !filter.minExperience || item.minExp >= +filter.minExperience.value,
    [filter.minExperience]
  );

  const filterByMinBasePay = useCallback(
    (item: IJob) =>
      !filter.minBasePay || item.minJdSalary >= +filter.minBasePay.value,
    [filter.minBasePay]
  );

  const filteredJobs = useMemo(() => {
    return items
      .filter(filterNullValues)
      .filter(filterByCompanyName)
      .filter(filterByRoles)
      .filter(filterByLocations)
      .filter(filterByMinExperience)
      .filter(filterByMinBasePay);
  }, [
    items,
    filterNullValues,
    filterByCompanyName,
    filterByRoles,
    filterByLocations,
    filterByMinExperience,
    filterByMinBasePay,
  ]);

  return filteredJobs;
};

export default useJobFilter;
