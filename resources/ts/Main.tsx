import * as React from "react";
import { Root } from './components/Root';
import { render } from "react-dom";
import { browserHistory, Router, Route, Link} from 'react-router';


render(

    <Router history={ browserHistory }>
        <Route path='/' component={ Root }>
        </Route>
    </Router>,
    document.getElementById("root")
);