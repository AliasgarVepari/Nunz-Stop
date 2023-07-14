import { Badge } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const CriticsBadge = ({ rating }: Props) => {
  let color = rating >= 75 ? "green" : rating >= 50 ? "yellow" : "";
  return (
    <Badge colorScheme={color} variant="subtle">
      {rating}
    </Badge>
  );
};

export default CriticsBadge;
