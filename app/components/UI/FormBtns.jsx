import { BtnsWrapper, PrimaryBtn, SecondaryBtn } from "./FormBtns.styled";

const FormBtns = () => {
  return (
    <BtnsWrapper>
      <SecondaryBtn>Cancel</SecondaryBtn>
      <PrimaryBtn type="submit">Save</PrimaryBtn>
    </BtnsWrapper>
  );
};

export default FormBtns;
