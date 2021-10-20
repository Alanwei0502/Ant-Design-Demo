import React from 'react'
import { Switch, Route } from "react-router-dom";
import { Layout } from 'antd';
import Home from 'containers/Home';
import SpendingTracker from 'containers/SpendingTracker';
import Investment from 'containers/Investment';
import TodoList from 'containers/TodoList';

const Main = () => {
  return (
    <Layout.Content>
      <Switch>
        <Route exact path='/Home'>
          <Home />
        </Route>
        <Route path='/SpendingTracker'>
          <SpendingTracker />
        </Route>
        <Route path='/Investment'>
          <Investment />
        </Route>
        <Route path='/TodoList'>
          <TodoList />
        </Route>
      </Switch>
    </Layout.Content>
  )
}

export default Main
