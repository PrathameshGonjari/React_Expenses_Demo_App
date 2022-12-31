import React from "react";

import { Typography } from "@mui/material";

import { TaskCardViewProps } from "../../../pages/MainPage/type";
import CustomCard from "../CustomCard";
import { H5Typography, SubTitle1 } from "../../atom/Typography";
import { CardDate } from "./style";

function CardDateContainer(props: TaskCardViewProps) {
  const { month, year, date } = props;
  return (
    <CardDate>
      <CustomCard cardStyle={{ borderRadius: "10%" }}>
        <SubTitle1>{month}</SubTitle1>
        <Typography>{year}</Typography>
        <H5Typography>{date}</H5Typography>
      </CustomCard>
    </CardDate>
  );
}

export default CardDateContainer;
