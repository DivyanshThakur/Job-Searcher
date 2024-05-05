import { Box, Container } from "@mui/material";
import Select from "../Select";
import { IOption } from "../../types/common.type";
import Input from "../Input";
import { useState } from "react";
import { setFilter } from "../../redux/slices/jobList.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const JobFilter = () => {
  const { filter } = useAppSelector((state) => state.jobList);
  const dispatch = useAppDispatch();

  const [companyName, setCompanyName] = useState("");

  const roles: IOption[] = [
    {
      label: "Frontend",
      value: "frontend",
    },
    {
      label: "Ios",
      value: "ios",
    },
    {
      label: "Android",
      value: "android",
    },
    {
      label: "Tech Lead",
      value: "tech lead",
    },
    {
      label: "Backend",
      value: "backend",
    },
  ];

  const experiences: IOption[] = Array.from({ length: 10 }, (_, index) => ({
    label: `${index + 1}`,
    value: index + 1,
  }));

  const locations: IOption[] = [
    {
      label: "Remote",
      value: "remote",
    },
    {
      label: "Delhi NCR",
      value: "delhi ncr",
    },
    {
      label: "Mumbai",
      value: "mumbai",
    },
    {
      label: "Chennai",
      value: "chennai",
    },
    {
      label: "Bangalore",
      value: "bangalore",
    },
  ];

  const minBasePay: IOption[] = Array.from({ length: 11 }, (_, index) => ({
    label: `${index * 10}T`,
    value: index * 10,
  }));

  const handleCompanyNameChange = (e: any) => {
    setCompanyName(e.target.value);
    dispatch(
      setFilter({
        companyName: e.target.value,
      })
    );
  };

  const handleSelectChange = (value: string | number, actionMeta: any) => {
    dispatch(setFilter({ [actionMeta.name]: value }));
  };

  return (
    <Container>
      <Box display="flex" gap={1} alignItems="flex-end" flexWrap="wrap">
        <Select
          isMulti
          name="roles"
          label="Roles"
          value={filter.roles}
          options={roles}
          onChange={handleSelectChange}
        />
        <Select
          name="minExperience"
          label="Experience"
          value={filter.minExperience}
          options={experiences}
          onChange={handleSelectChange}
        />
        <Select
          isMulti
          name="locations"
          label="Locations"
          options={locations}
          value={filter.locations}
          onChange={handleSelectChange}
        />
        <Select
          name="minBasePay"
          label="Min Base Pay"
          options={minBasePay}
          value={filter.minBasePay}
          onChange={handleSelectChange}
        />
        <Input
          label="Company Name"
          placeholder="Search Company Name"
          value={companyName}
          onChange={handleCompanyNameChange}
        />
      </Box>
    </Container>
  );
};

export default JobFilter;
