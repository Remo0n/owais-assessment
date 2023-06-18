"use client";

import DownloadIcon from "@/public/assets/icons/DownloadIcon";
import EyeIcon from "@/public/assets/icons/EyeIcon";
import PencilIcon from "@/public/assets/icons/PencilIcon";
import { IconWrapper } from "./FormActios.styled";

const FormActions = () => {
  return (
    <div style={{ display: "flex" }}>
      <IconWrapper bgColor="#004A91">
        <PencilIcon />
      </IconWrapper>
      <IconWrapper bgColor="#ffffff">
        <EyeIcon />
      </IconWrapper>
      <IconWrapper bgColor="#DCAC00">
        <DownloadIcon />
      </IconWrapper>
    </div>
  );
};

export default FormActions;
