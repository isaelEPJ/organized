import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Tasks from '../pages/tasks';
import AppBarTask from '../pages/util/navbar/index';

const Routes: React.FC = () => (
    <>
        <Route path="/" component={AppBarTask} />

        <Switch>
            <Route exact path="/tasks" component={Tasks} />
        </Switch>
    </>
);
export default Routes;
