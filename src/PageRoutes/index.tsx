
import { Switch, Route, } from "react-router-dom";
import { routes, } from "./routes";
import { NotFound } from "../components/pages";
import { HeadAppBar } from "../components/widgets";

const PageRoutes = (props: any) => {

  return (
    <>  
      <HeadAppBar />
      <Switch>
        {routes.map((route: any) => (
            <Route exact key={route.path} path={route.path} component={route.component} />
        ))}{" "}
        <Route component={NotFound} />

      </Switch>
    </>
  );
};
export default PageRoutes;
