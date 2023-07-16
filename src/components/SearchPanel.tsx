import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  setSearch: (value: string | undefined) => void;
}

export const SearchPanel = ({ setSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event?.preventDefault();
        if (ref) setSearch(ref.current?.value);
      }}
    >
      <InputGroup>
        <InputRightElement>
          <BsSearch />
        </InputRightElement>
        <Input
          ref={ref}
          type="text"
          variant="filled"
          borderRadius={10}
          placeholder="Search Games Here..."
        />
      </InputGroup>
    </form>
  );
};
