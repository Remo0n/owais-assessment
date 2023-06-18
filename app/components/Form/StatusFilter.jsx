"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { StatusBtn, StatusFilterWrapper } from "./StatusFilter.styled";

const StatusFilter = () => {
  const router = useRouter();
  const [isApproved, setIsApproved] = useState(true);

  const handleApproved = () => {
    router.push("/?status=approved");
    setIsApproved(true);
  };
  const handlePending = () => {
    router.push("/?status=pending&status=under%20review");
    setIsApproved(false);
  };
  return (
    <StatusFilterWrapper>
      <StatusBtn
        onClick={handleApproved}
        style={{
          backgroundColor: isApproved ? "#004A91" : "#fff",
          color: isApproved ? "#fff" : "#004A91",
        }}
      >
        Approved
      </StatusBtn>
      <StatusBtn
        onClick={handlePending}
        style={{
          backgroundColor: isApproved ? "#fff" : "#004A91",
          color: isApproved ? "#004A91" : "#fff",
        }}
      >
        Pending
      </StatusBtn>
    </StatusFilterWrapper>
  );
};

export default StatusFilter;
