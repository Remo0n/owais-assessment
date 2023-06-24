"use client";

import DownloadIcon from "@/public/assets/icons/DownloadIcon";
import EyeIcon from "@/public/assets/icons/EyeIcon";
import PencilIcon from "@/public/assets/icons/PencilIcon";
import { useRouter } from "next/navigation";
import { IconWrapper } from "./FormActios.styled";

const FormActions = ({ id }) => {
  const router = useRouter();
  const handleEdit = () => {
    router.push(`/forms/${id}`);
  };
  return (
    <div style={{ display: "flex" }}>
      <IconWrapper bgColor="#004A91" onClick={handleEdit}>
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
