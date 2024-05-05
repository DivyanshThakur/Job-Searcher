import { useCallback, useEffect } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  appendJobList,
  incrementPage,
  setLoading,
} from "../redux/slices/jobList.slice";

const useGetJobListInfiniteQuery = () => {
  const { jobs, isLoading, page } = useAppSelector((state) => state.jobList);
  const dispatch = useAppDispatch();

  const fetchData = useCallback(async () => {
    if (isLoading) return;

    const reqBody = {
      limit: 10,
      offset: (page - 1) * 10,
    };

    dispatch(setLoading(true));

    try {
      const res = await axios.post(
        process.env.REACT_APP_WEEKDAY_JOB_SEARCH_API!,
        reqBody
      );
      dispatch(appendJobList(res.data));
      dispatch(incrementPage());
    } catch (err: any) {
      console.log("Error", err);
    }
    dispatch(setLoading(false));
  }, [dispatch, isLoading, page]);

  /**
   * Calling fetchData for the very first time when page loads
   */
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Calling fetchData whenever user scrolls to bottom.
   * We are using browser APIs to get the current state of the user scroll.
   */
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 20 && !isLoading) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData, isLoading]);

  return {
    data: jobs,
    isLoading,
  };
};

export default useGetJobListInfiniteQuery;
