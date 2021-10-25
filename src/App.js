import { Container, Heading } from "@chakra-ui/react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { VisibilityFilter } from "./components/VisibilityFilter";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import ProtectedRoutes from "./components/Protectedroutes";

function App() {
  return (
    // <Container maxW="container.sm">
    //   <Heading my="4">Todo List</Heading>
    //   <AddTodo />
    //   <TodoList />
    //   <VisibilityFilter />
    // </Container>
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <ProtectedRoutes exact path="/todo" component={AddTodo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
