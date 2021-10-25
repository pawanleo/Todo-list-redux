import { Button, Flex, FormControl, Input, Heading } from "@chakra-ui/react";

import { useState } from "react";

import { useDispatch } from "react-redux";

import { addTodo } from "../redux/actions";

import { TodoList } from "./TodoList";

import { VisibilityFilter } from "./VisibilityFilter";

export const AddTodo = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(value));

    setValue("");
  };

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Heading my="4" style={{ marginLeft: 400 }}>
          Todo List
        </Heading>

        <Flex>
          <FormControl>
            <Input
              type="text"
              value={value}
              onChange={handleInput}
              borderTopRightRadius={0}
              borderBottomRightRadius={0}
            />
          </FormControl>

          <Button
            colorScheme="teal"
            type="submit"
            disabled={!value}
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
          >
            Add Todo
          </Button>
        </Flex>
      </form>

      <TodoList />

      <VisibilityFilter />
    </>
  );
};
