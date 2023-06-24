"use client";
import { useState } from "react";
import FormBtns from "./FormBtns";
import {
  FormWrapper,
  FormTitle,
  InputsWrapper,
  RadioCollection,
  SubTitle,
  TextInput,
} from "./Form.styled";

const InfoForm = () => {
  return (
    <FormWrapper>
      <FormTitle>Other Information</FormTitle>
      <SubTitle>Where do you want to send the following:</SubTitle>
      <InputsWrapper>
        <RadioCollection>
          <h5>Certificates</h5>
          <div>
            <input
              type="radio"
              name="certificates"
              value="Client"
              id="client"
            />
            <label htmlFor="client">Client</label>

            <input
              type="radio"
              name="certificates"
              value="Custodian"
              id="custodian"
            />
            <label htmlFor="custodian">Custodian</label>

            <input
              type="radio"
              name="certificates"
              value="Other Entity"
              id="otherentity"
            />
            <label htmlFor="otherentity">Other Entity</label>
          </div>
        </RadioCollection>
        <RadioCollection>
          <h5>Profits or any other Income</h5>
          <div>
            <input type="radio" name="profits" value="Client" id="p-client" />
            <label htmlFor="p-client">Client</label>

            <input
              type="radio"
              name="profits"
              value="Custodian"
              id="p-custodian"
            />
            <label htmlFor="p-custodian">Custodian</label>

            <input
              type="radio"
              name="profits"
              value="Other Entity"
              id="p-otherentity"
            />
            <label htmlFor="p-otherentity">Other Entity</label>
          </div>
        </RadioCollection>
        <RadioCollection>
          <h5>Sales Outcomes</h5>
          <div>
            <input type="radio" name="sales" value="Client" id="s-client" />
            <label htmlFor="s-client">Client</label>

            <input
              type="radio"
              name="sales"
              value="Custodian"
              id="s-custodian"
            />
            <label htmlFor="s-custodian">Custodian</label>

            <input
              type="radio"
              name="sales"
              value="Other Entity"
              id="s-otherentity"
            />
            <label htmlFor="s-otherentity">Other Entity</label>
          </div>
        </RadioCollection>
        <TextInput
          style={{ flexBasis: "35%", marginTop: "2rem" }}
          placeholder="Other Entity"
        />
      </InputsWrapper>
      <FormBtns />
    </FormWrapper>
  );
};

export default InfoForm;
