import { IOption } from "./types/common.type";

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

const constants = {
  roles,
  locations,
  minBasePay,
  experiences,
};
export default constants;
