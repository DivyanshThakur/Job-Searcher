import { Box } from "@mui/material";
import { useState } from "react";
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
  onChange?: (
    newValue: MultiValue<any> | any,
    actionMeta: ActionMeta<any>
  ) => void;
}

const Select = ({ label, name, isMulti = false, options }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<any>(
    isMulti ? [] : null
  );

  return (
    <Box>
      {(isMulti ? selectedOption?.length > 0 : selectedOption) && (
        <p className={styles.label}>{label}</p>
      )}
      <ReactSelect
        isMulti={isMulti}
        name={name}
        placeholder={label}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isClearable
        isSearchable
      />
    </Box>
  );
};

export default Select;
