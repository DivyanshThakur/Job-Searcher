import { createSlice } from "@reduxjs/toolkit";
import { IJobList } from "../../types/common.type";

interface InitialStateType {
  jobs: IJobList[];
}

interface ISetJobList {
  payload: IJobList[];
}

const initialState: InitialStateType = {
  jobs: [],
};

const jobListSlice = createSlice({
  name: "jobList",
  initialState,
  reducers: {
    setJobList: (state, action: ISetJobList) => {
      state.jobs = action.payload;
    },
    resetJobList: (state) => {
      state.jobs = [];
    },
  },
});

export const { setJobList, resetJobList } = jobListSlice.actions;
export default jobListSlice.reducer;
