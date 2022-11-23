export const routes = {
  analytics: {
    path: "/dashboard/analytics",
    name: "Analytics",
  },
  sales: {
    path: "/dashboard/sales",
    name: "Sales",
  },
};

const getRoutes = () => {
  let paths = {};
  for (let r in routes) {
    paths[routes[r].name] = routes[r].path;
  }
  return paths;
};

export const paths = getRoutes();
