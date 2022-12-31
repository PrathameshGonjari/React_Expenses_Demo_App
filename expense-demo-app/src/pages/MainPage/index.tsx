import CustomCard from "../../shared/molecules/CustomCard";
import TaskCardView from "../../shared/organism/TaskCardView";
import { taskData } from "./helper";
import { TaskCardViewProps } from "./type";

export default function MainPage() {
  return (
    <CustomCard
      cardStyle={{ borderRadius: 15, backgroundColor: "black" }}
      maxWidth={"50%"}
      variant="outlined"
    >
      {taskData?.map((data: TaskCardViewProps) => (
        <TaskCardView {...data} />
      ))}
    </CustomCard>
  );
}
