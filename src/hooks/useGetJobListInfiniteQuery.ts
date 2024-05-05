import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { appendJobList, incrementPage } from "../redux/slices/jobList.slice";

const useGetJobListInfiniteQuery = () => {
  const { jobs, page } = useAppSelector((state) => state.jobList);
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    if (isLoading) return;

    const reqBody = {
      limit: 10,
      offset: (page - 1) * 10,
    };

    setIsLoading(true);

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
    setIsLoading(false);
  }, [dispatch, isLoading, page]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
