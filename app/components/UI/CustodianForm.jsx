"use client";
import { useState } from "react";
import axios from "axios";
import FormBtns from "./FormBtns";

import {
  FormWrapper,
  FormTitle,
  InputsWrapper,
  TextInput,
} from "./Form.styled";
import { useRouter } from "next/navigation";

const CustodianForm = ({ params }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    accountName: "",
    accountNumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  console.log(params);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .patch(`/api/forms/${params.formId}`, {
        ...formData,
        formId: params.formId,
      })
      .then(() => {
        alert("data has been saved successfully");
        setFormData({
          name: "",
          address: "",
          accountName: "",
          accountNumber: "",
        });
      })
      .catch((err) => alert(err));
  };
  return (
    <FormWrapper>
      <FormTitle>Custodian Details</FormTitle>
      <form onSubmit={handleSubmit}>
        <InputsWrapper>
          <TextInput
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Name *"
          />
          <TextInput
            name="address"
            onChange={handleChange}
            value={formData.address}
            placeholder="Address of Correspondence *"
          />
          <TextInput
            name="accountName"
            onChange={handleChange}
            value={formData.accountName}
            placeholder="Account Name * "
          />
          <TextInput
            name="accountNumber"
            onChange={handleChange}
            value={formData.accountNumber}
            placeholder="Account Number *"
          />
        </InputsWrapper>
        <FormBtns />
      </form>
    </FormWrapper>
  );
};

export default CustodianForm;
