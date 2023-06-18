"use client";
import PaperIcon from "@/public/assets/icons/PaperIcon";
import {
  HeaderDiv,
  HeaderBio,
  IconContainer,
  Info,
  Title,
  SubTitle,
  Search,
  FilterDiv,
  SortSelect,
} from "./FormHeader.styled";

import SearchIcon from "@/public/assets/icons/SearchIcon";

const FormHeader = () => {
  return (
    <HeaderDiv>
      <HeaderBio>
        <IconContainer>
          <PaperIcon />
        </IconContainer>
        <Info>
          <Title>Forms</Title>
          <SubTitle>All the compulsory forms are available here</SubTitle>
        </Info>
      </HeaderBio>
      <FilterDiv>
        <SearchIcon
          style={{ position: "absolute", top: "8px", left: "195px" }}
        />
        <Search placeholder="Search" />

        <SortSelect defaultValue="Sort By">
          <option disabled value="Sort By">
            Sort By
          </option>
        </SortSelect>
      </FilterDiv>
    </HeaderDiv>
  );
};

export default FormHeader;
