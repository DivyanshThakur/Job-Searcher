import { Box } from "@mui/material";
import ReactSelect, {
  ActionMeta,
  GroupBase,
  MultiValue,
  OptionsOrGroups,
} from "react-select";
import styles from "./styles.module.css";
import { IOption } from "../../types/common.type";

interface SelectProps {
  isMulti?: boolean;
  label?: string;
  name?: string;
  options?: OptionsOrGroups<IOption, GroupBase<IOption>>;
  value?: any;
  onChange?: (
    newValue: MultiValue<any> | any,
    actionMeta: ActionMeta<any>
  ) => void;
}

const Select = ({
  label,
  name,
  isMulti = false,
  value,
  onChange,
  options,
}: SelectProps) => {
  return (
    <Box>
      {(isMulti ? value?.length > 0 : value) && (
        <p className={styles.label}>{label}</p>
      )}
      <ReactSelect
        isMulti={isMulti}
        name={name}
        placeholder={label}
        defaultValue={value}
        value={value}
        onChange={onChange}
        options={options}
        isClearable
        isSearchable
      />
    </Box>
  );
};

export default Select;
