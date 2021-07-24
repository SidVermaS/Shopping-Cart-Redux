import { Home, Orders } from "../components/pages";
import { RouteI } from "../interfaces";
enum routePaths {
  Home = "/",
  Checkout = "/checkout",
  Feedback = "/feedback",
}

const routes: Array<RouteI> = [
  {
    path: routePaths.Home,
    component: Home,
  },
  {
    path: routePaths.Feedback,
    component: Home,
  },
  {
    path: routePaths.Checkout,
    component: Orders,
  },
];

export { routePaths, routes };
