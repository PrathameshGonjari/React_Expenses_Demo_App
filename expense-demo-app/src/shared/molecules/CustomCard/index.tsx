import { Box, Card, CardContent } from "@mui/material";

interface CardProps {
  children: any;
  minWidth?: number | string;
  maxWidth?: number | string;
  variant?: any;
  cardStyle?: any;
}

function CustomCard(props: CardProps) {
  const { children, minWidth, maxWidth, variant, cardStyle } = props;

  return (
    <Box sx={{ minWidth, maxWidth }}>
      <Card style={cardStyle} variant={variant}>
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );
}

export default CustomCard;
