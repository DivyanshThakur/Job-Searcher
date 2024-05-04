import { createSlice } from "@reduxjs/toolkit";
import { IJob } from "../../types/common.type";

interface InitialStateType {
  jobs: IJob[];
  totalJobs: number;
  page: number;
  filter: {};
}

interface ISetJobList {
  payload: {
    jdList: IJob[];
    totalCount: number;
  };
}

const initialState: InitialStateType = {
  jobs: [],
  totalJobs: 0,
  page: 1,
  filter: {},
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
    incrementPage: (state) => {
      state.page++;
    },
    resetJobList: (state) => {
      state.jobs = [];
      state.page = 1;
    },
  },
});

export const { setJobList, appendJobList, incrementPage, resetJobList } =
  jobListSlice.actions;
export default jobListSlice.reducer;
