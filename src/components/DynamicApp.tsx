/** @jsxImportSource react */
import React from "react";
import {
  Switch,
  Route,
  Link,
  Router,
  StaticRouter,
  BrowserRouter,
} from "react-router-dom";

export default function App({ url, pathname }) {
  console.log({ url, pathname });
  // remove "/micro" from the url
  const _pathname = pathname.replace("/micro", "");
  console.log({ _pathname });

  return (
    <StaticRouter location={pathname}>
      <nav>
        <a href="/dynamic/">Home</a>
        <a href="/dynamic/page1">Page 1</a>
        <a href="/dynamic/page2">Page 2</a>
      </nav>
      <Switch>
        <Route exact path="/dynamic/page1" component={Page1} />
        <Route exact path="/dynamic" component={Root} />
        <Route>
          <h2>Unmatch Component</h2>
        </Route>
      </Switch>
    </StaticRouter>
  );
}

function Root() {
  return (
    <div>
      <h1>Root Page</h1>
    </div>
  );
}

function Page1() {
  return (
    <div>
      <h1>Page 1</h1>
    </div>
  );
}
