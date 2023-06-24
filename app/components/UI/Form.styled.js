import styled from "styled-components";

export const FormWrapper = styled.div`
  position: relative;
  z-index: 2;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.6);
  margin: 0.2rem 0;
`;

export const FormTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #004a91;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
  justify-content: space-between;
`;

export const TextInput = styled.input`
  flex-basis: 48%;
  background-color: #fff;
  height: 2.8rem;
  border: 1px solid #d0d0d0;
  margin-bottom: 1rem;
  padding: 0 1rem;

  ::placeholder {
    color: #004a91;
    font-size: 0.875rem;
    line-height: 140%;
    letter-spacing: 0.01094rem;
  }
`;

export const SubTitle = styled.h4`
  color: #272830;
  font-size: 1rem;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.0125rem;
  padding: 1rem 0;
`;

export const RadioCollection = styled.div`
  div {
    display: flex;
  }
  h5 {
    color: #272830;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: 0.01094rem;
    margin-bottom: 1rem;
  }
  label {
    color: #004a91;
    font-size: 0.8125rem;
    line-height: 140%;
    letter-spacing: 0.01019rem;
    margin-inline-end: 1rem;
  }
  input {
    margin-inline-end: 0.5rem;
  }
  input[type="radio"] {
    accent-color: #004a91;
  }
`;

export const CertificationWrapper = styled.div`
  color: #272830;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: #f7f7f4;
  padding: 1rem 2rem;
  margin: 1rem 0;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  label {
    color: #004a91;
    font-size: 0.875rem;
    line-height: 140%;
    letter-spacing: 0.01094rem;
    margin-inline-start: 1rem;
  }
`;

export const PrimaryText = styled.p`
  color: #004a91;
  font-size: 0.875rem;
  line-height: 1.375rem;
  letter-spacing: 0.01563rem;
  margin: 1rem 0;
  width: 66%;
`;
