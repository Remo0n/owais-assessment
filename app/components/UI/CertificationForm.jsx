"use client";
import FormBtns from "./FormBtns";
import {
  FormWrapper,
  FormTitle,
  CertificationWrapper,
  CheckboxWrapper,
  PrimaryText,
} from "./Form.styled";

import { PrimaryBtn } from "./FormBtns.styled";

const CertificationForm = () => {
  return (
    <FormWrapper>
      <FormTitle>Certification</FormTitle>
      <CertificationWrapper>
        <p>
          I hereby certify the information that I have provided in this
          subscription form is valid, correct, and complete, and an integral
          part of this subscription form, and XYZ Capital in its capacity as the
          &quot;Fund Manager&quot; has the full right to rely on such data and
          information. The applicant confirms that they have read and understood
          the Terms and Conditions of the Fund, and accepts and agrees to what
          is stated therein irrevocably and unconditionally.
          <br />
          <br />
          The applicant agrees to participate in the Fund with the number of
          units specified in This subscription form submitted by XYZ Capital in
          accordance with the provisions of the Investment Funds Regulations
          issued by the Capital Market Authority in the Kingdom of Saudi Arabia,
          and the payment of the subscription value in accordance with the Terms
          and Conditions and this subscription form.
          <br />
          <br />
          The applicant acknowledges that they fulfill all the requirements
          stipulated in the Terms and Conditions. Accordingly, by accepting the
          Fund Manager to the signed subscription form, they will become legally
          bound by all the terms, conditions, and documents related to it and to
          the offering of the Funds units, and this subscription form is subject
          to all the provisions stipulated in the Terms and Conditions of the
          Fund.
        </p>
      </CertificationWrapper>
      <CheckboxWrapper>
        <input type="checkbox" />
        <label>Please tick the box to certify.</label>
      </CheckboxWrapper>
      <FormTitle>Digitally Certify Document</FormTitle>
      <PrimaryText>
        You can click on the below button it will redirect to a platform where
        you can <strong>E-Sign</strong> the document to certify the details and
        the contract with <strong>XYZ.Capital</strong>
      </PrimaryText>
      <PrimaryBtn>E-Sign Document</PrimaryBtn>
      <FormBtns />
    </FormWrapper>
  );
};

export default CertificationForm;
