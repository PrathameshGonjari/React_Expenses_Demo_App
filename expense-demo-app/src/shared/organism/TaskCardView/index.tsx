import { TaskCardViewProps } from "../../../pages/MainPage/type";
import CustomCard from "../../molecules/CustomCard";
import { H4Typography } from "../../atom/Typography";
import CardAmountContainer from "../../molecules/CardAmountContainer";
import CardDateContainer from "../../molecules/CardDateContainer";
import { MainCardWrapper } from "./style";

export default function TaskCardView(props: TaskCardViewProps) {
  const { taskTitle } = props;

  return (
    <MainCardWrapper>
      <CustomCard
        cardStyle={{ margin: "10px 0", borderRadius: 15 }}
        variant="outlined"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CardDateContainer {...props} />
          <H4Typography text={taskTitle} />
          <CardAmountContainer {...props} />
        </div>
      </CustomCard>
    </MainCardWrapper>
  );
}
