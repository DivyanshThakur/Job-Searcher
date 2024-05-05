import { createSlice } from "@reduxjs/toolkit";
import { IFilter, IJob } from "../../types/common.type";

interface InitialStateType {
  jobs: IJob[];
  isLoading: boolean;
  totalJobs: number;
  page: number;
  filter: IFilter;
}

interface ISetJobList {
  payload: {
    jdList: IJob[];
    totalCount: number;
  };
}

interface ISetFilter {
  payload: Partial<IFilter>;
}

interface ISetLoading {
  payload: boolean;
}

const initialState: InitialStateType = {
  jobs: [],
  isLoading: false,
  totalJobs: 0,
  page: 1,
  filter: {
    roles: [],
    minExperience: null,
    companyName: "",
    locations: [],
    minBasePay: null,
  },
};

const jobListSlice = createSlice({
  name: "jobList",
  initialState,
  reducers: {
    setJobList: (state, action: ISetJobList) => {
      state.jobs = action.payload.jdList;
      state.totalJobs = action.payload.totalCount;
    },
    appendJobList: (state, action: ISetJobList) => {
      state.jobs.push(...action.payload.jdList);
      state.totalJobs = action.payload.totalCount;
    },
    setLoading: (state, action: ISetLoading) => {
      state.isLoading = action.payload;
    },
    incrementPage: (state) => {
      state.page++;
    },
    setFilter: (state, action: ISetFilter) => {
      const { companyName, locations, minBasePay, minExperience, roles } =
        action.payload;

      if (companyName !== undefined) state.filter.companyName = companyName;
      if (minBasePay !== undefined) state.filter.minBasePay = minBasePay;
      if (minExperience !== undefined)
        state.filter.minExperience = minExperience;
      if (locations !== undefined) state.filter.locations = locations;
      if (roles !== undefined) state.filter.roles = roles;
    },
    resetJobList: (state) => {
      state.jobs = [];
      state.totalJobs = 0;
      state.isLoading = false;
      state.page = 1;
      state.filter = {
        roles: [],
        minExperience: null,
        companyName: "",
        locations: [],
        minBasePay: null,
      };
    },
  },
});

export const {
  setJobList,
  appendJobList,
  setLoading,
  incrementPage,
  setFilter,
  resetJobList,
} = jobListSlice.actions;
export default jobListSlice.reducer;
