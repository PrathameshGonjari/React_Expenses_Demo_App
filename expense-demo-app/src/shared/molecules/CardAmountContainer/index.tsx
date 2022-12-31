import React from 'react';

import { Typography } from '@mui/material';

import { TaskCardViewProps } from '../../../pages/MainPage/type';
import CustomCard from '../CustomCard';
import { CardAmount } from './style';

function CardAmountContainer(props: TaskCardViewProps) {
  const { amount } = props;
  return (
    <CardAmount>
      <CustomCard cardStyle={{ borderRadius: "10%", paddingBottom: "0px" }}>
        <Typography>${amount}</Typography>
      </CustomCard>
    </CardAmount>
  );
}

export default CardAmountContainer;
