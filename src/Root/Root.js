import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { RouteProvider } from "./RouteProvider";

// eslint-disable-next-line import/prefer-default-export
export const Root = () => {
  return (
    <div>
      <RouteProvider>
        <BrowserRouter>
          <Switch>
            {Routes.map(route => {
              const MyComponent = route.sidebarName;
              return (
                <Route
                  key={route.path}
                  exact={route.exact ? route.exact : false}
                  path={route.path}
                  render={() => (
                    <MyComponent
                      content={route.content ? <route.content /> : null}
                    />
                  )}
                />
              );
            })}
          </Switch>
        </BrowserRouter>
      </RouteProvider>
    </div>
  );
};
