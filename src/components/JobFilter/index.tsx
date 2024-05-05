import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import Select from "../Select";
import Input from "../Input";
import { setFilter } from "../../redux/slices/jobList.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import constants from "../../constants";

const JobFilter = () => {
  const { filter } = useAppSelector((state) => state.jobList);
  const dispatch = useAppDispatch();

  const [companyName, setCompanyName] = useState("");

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
      <Box
        display="flex"
        marginTop={4}
        marginBottom={4}
        gap={1}
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Select
          isMulti
          name="roles"
          label="Roles"
          value={filter.roles}
          options={constants.roles}
          onChange={handleSelectChange}
        />
        <Select
          name="minExperience"
          label="Experience"
          value={filter.minExperience}
          options={constants.experiences}
          onChange={handleSelectChange}
        />
        <Select
          isMulti
          name="locations"
          label="Locations"
          options={constants.locations}
          value={filter.locations}
          onChange={handleSelectChange}
        />
        <Select
          name="minBasePay"
          label="Min Base Pay"
          options={constants.minBasePay}
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

export default React.memo(JobFilter);
