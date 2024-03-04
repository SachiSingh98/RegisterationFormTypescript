import React from "react";
import { FormDataType, InputValueType } from "../DataTypeModule/FormDataType";
import { Typography, Box, Button } from "@mui/material";

type DataTablePropType = {
  data: FormDataType;
  handleOnDelete: (id: number) => void;
  setFormValue: React.Dispatch<React.SetStateAction<InputValueType>>;
  action: string;
  setAction: React.Dispatch<React.SetStateAction<string>>;
};

const DataTable: React.FC<DataTablePropType> = ({
  data,
  handleOnDelete,
  setFormValue,
  setAction,
  action
}) => {
  const handleOnEdit = (data: InputValueType) => {
    setFormValue(data);
    setAction("Update")
  };

  return (
    <>
      <Box p={2}>
        <Typography>Form Data</Typography>
        {data && data.length > 0 ? (
          data.map((info, index) => {
            return (
              <ul key={index}>
                <li>
                  {info.name}{" "}
                  <span>
                    <Button
                      onClick={() => {
                        handleOnDelete(info.id!);
                      }}
                      variant="contained"
                      color="error"
                      sx={{ margin: "0px 10px" }}
                    >
                      Delete
                    </Button>
                    <Button
                      onClick={() => {
                        handleOnEdit(info);
                      }}
                      variant="contained"
                      color="error"
                    >
                      Edit
                    </Button>
                  </span>{" "}
                </li>
              </ul>
            );
          })
        ) : (
          <Typography>No Data Available</Typography>
        )}
      </Box>
    </>
  );
};

export default DataTable;
