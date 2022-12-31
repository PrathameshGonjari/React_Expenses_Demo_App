import { Typography } from "@mui/material";

interface H5TypographyProps {
  children: any;
}
interface SubTitle1Props {
  children: any;
}
interface H4TypographyProps {
  text: string;
}

export const H5Typography = (props: H5TypographyProps) => {
  const { children } = props;

  return (
    <Typography variant="h5" component="div">
      {children}
    </Typography>
  );
};

export const H4Typography = (props: H4TypographyProps) => {
  const { text } = props;

  return (
    <Typography variant="h4" component="div">
      {text}
    </Typography>
  );
};

export const SubTitle1 = (props: SubTitle1Props) => {
  const { children } = props;

  return (
    <Typography variant="subtitle1" component="div">
      {children}
    </Typography>
  );
};
