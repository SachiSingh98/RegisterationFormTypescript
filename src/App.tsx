import React, { useState } from "react";
import Form from "./Components/Form";
import { FormDataType, InputValueType } from "./DataTypeModule/FormDataType";
import DataTable from "./Components/DataTable";

const App: React.FC = () => {
  const initialValue = {
    id: Date.now(),
    name: "",
    contact: parseInt(""),
    email: "",
    branch: "",
    gender: "female",
    terms: false,
  };

  const [formData, setFormData] = useState<FormDataType>([]);
  const [formValue, setFormValue] = useState<InputValueType>(initialValue);
  const [action , setAction] = useState<string>("Add")

  // HandleDelete
  const handleOnDelete = (id: number) => {
    console.log(id);
    const filterData = formData.filter((data) => data.id !== id);
    setFormData(filterData);
  };

  return (
    <>
      <Form
        initialValue={initialValue}
        formValue={formValue}
        setFormValue={setFormValue}
        setFormData={setFormData}
        action={action}
        data={formData}
        setAction={setAction}
      />
      <DataTable
        setFormValue={setFormValue}
        handleOnDelete={handleOnDelete}
        data={formData}
        action={action}
        setAction={setAction}
      />
    </>
  );
};

export default App;
