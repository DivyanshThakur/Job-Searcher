import React from "react";
import { Box, TextField } from "@mui/material";
import styles from "./styles.module.css";

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: unknown;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const Input = ({ label, placeholder, value, onChange }: InputProps) => {
  return (
    <Box>
      {!!value && !!label && <p className={styles.label}>{label}</p>}
      <TextField
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};

export default Input;
