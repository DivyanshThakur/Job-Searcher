import { Box } from "@mui/material";
import { IJob } from "../types/common.type";

interface JobCardProps {
  data: IJob;
}

const JobCard = ({ data }: JobCardProps) => {
  return <Box>{data.companyName}</Box>;
};

export default JobCard;
