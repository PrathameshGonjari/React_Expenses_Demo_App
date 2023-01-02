import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import CustomCard from "../../shared/molecules/CustomCard";
import TaskCardView from "../../shared/organism/TaskCardView";
import { taskData } from "./helper";
import { TaskCardViewProps } from "./type";

export default function MainPage() {
  const formik = useFormik({
    initialValues: {
      title: "",
      amount: "",
      date: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { values, handleChange } = formik;

  return (
    <>
      <CustomCard
       cardStyle={{ borderRadius: 15, backgroundColor: "#9896f1", color: "black" }}
       maxWidth={"50%"}
       variant="outlined"
       >
        <form onSubmit={formik.handleSubmit}>
          
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel>Amount</InputLabel>
            <Input
              id="amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              value={values?.amount}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard" focused >
            <InputLabel>Date</InputLabel>
            <Input
              id="date"
              type="date"
              value={values?.date}
            />
          </FormControl>
        </form>
      </CustomCard>
      <CustomCard
        cardStyle={{ borderRadius: 15, backgroundColor: "black" }}
        maxWidth={"50%"}
        variant="outlined"
      >
        {taskData?.map((data: TaskCardViewProps) => (
          <TaskCardView {...data} />
        ))}
      </CustomCard>
    </>
  );
}
