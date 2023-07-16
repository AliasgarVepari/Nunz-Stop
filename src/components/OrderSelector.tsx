import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import orderData from "../data/order-data";

interface Props {
  selectedOrder: Orderby | null;
  onSelectedOrder: (orderByItem: Orderby) => void;
}

export interface Orderby {
  id: number;
  value: string;
  title: string;
}

const OrderSelector = ({ selectedOrder, onSelectedOrder }: Props) => {
  const orderBy: Orderby[] = orderData;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {selectedOrder?.title
          ? "Order By : " + selectedOrder?.title
          : "Order By"}
      </MenuButton>
      <MenuList>
        {orderBy.map((item) => (
          <MenuItem
            key={item.id}
            onClick={() => {
              onSelectedOrder(item);
              console.log(item);
            }}
          >
            {item.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderSelector;
