import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { IJob } from "../../types/common.type";
import styles from "./styles.module.css";
import { useState } from "react";

interface JobCardProps {
  data: IJob;
}

const JobCard = ({ data }: JobCardProps) => {
  const [showMore, setShowMore] = useState(false);

  const handleCompanyClick = () => {
    window.open(data.jdLink);
  };

  const getEstimatedSalaryText = () => {
    let estimatedSalary = "Estimated Salary: ";
    if (data.minJdSalary || data.maxJdSalary) {
      if (data.minJdSalary && data.maxJdSalary)
        estimatedSalary += `$${data.minJdSalary} - $${data.maxJdSalary} TPA`;
      else if (data.minJdSalary)
        estimatedSalary += `Atleast $${data.minJdSalary} TPA`;
      else estimatedSalary += `$0 - $${data.maxJdSalary} TPA`;
    } else {
      estimatedSalary += "Not disclosed";
    }
    return estimatedSalary;
  };

  const handleViewMoreClick = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <Card className={styles.main}>
      <CardContent>
        <Box display="flex" alignItems="center" gap={1.5}>
          <CardMedia
            className={styles.logo}
            component="img"
            image={data.logoUrl}
            alt="Logo"
          />
          <Box>
            <Typography
              component="h3"
              className={styles.companyName}
              onClick={handleCompanyClick}
            >
              {data.companyName}
            </Typography>
            <Typography component="h2" className={styles.jobRole}>
              {data.jobRole}
            </Typography>
            <Typography className={styles.location}>{data.location}</Typography>
          </Box>
        </Box>
        <Typography className={styles.cardSalary}>
          {getEstimatedSalaryText()}
        </Typography>
        <Box
          className={
            showMore
              ? styles.companyInfoContainerViewMore
              : styles.companyInfoContainer
          }
        >
          <Typography className={styles.aboutCompany}>
            About Company:
          </Typography>
          <Box className={styles.desc}>
            <Typography>
              <strong>About us</strong>
            </Typography>
            <Typography>{data.jobDetailsFromCompany}</Typography>
          </Box>
        </Box>
        <Box
          className={showMore ? styles.viewJobLinkViewMore : styles.viewJobLink}
        >
          <Typography onClick={handleViewMoreClick}>
            View {showMore ? "Less" : "More"}
          </Typography>
        </Box>
        <Box className={styles.minExpText}>
          <h3>Minimum Experience</h3>
          <h2>{data.minExp ? `${data.minExp} years` : "Not disclosed"}</h2>
        </Box>
      </CardContent>
      <Box className={styles.cardFooter}>
        <Box className={styles.btnContainer}>
          <Button className={styles.applyBtn} onClick={handleCompanyClick}>
            ⚡ Easy Apply
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default JobCard;
