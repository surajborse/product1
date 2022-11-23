// import React, { Fragment } from "react";
// import { capitalize } from "lodash";
// import { withRouter, Link, useNavigate } from "react-router-dom";
// import { paths as routePaths } from "./Utils";

// // console.log(routePaths)
// const Breadcrumbs = ({ match, location }) => {
//   // console.log('pathname', location.pathname)
//   const navigate = useNavigate();
//   const paths = location.pathname.split("/").filter(Boolean);
//   const len = paths.length;
//   let crumbs = paths.map((p, i) => {
//     if (i === len - 1) {
//       return capitalize(p);
//     }
//     return <Link to={routePaths[p]}>capitalize(p)</Link>;
//   });
//   len
//     ? crumbs.unshift(<Link to={routePaths["Dashboard"]}>Dashboard</Link>)
//     : crumbs.unshift("Dashboard");
//   console.log(crumbs);
//   return (
//     <div>
//       {crumbs.map((c, i) => (
//         <Fragment key={i}>{c}</Fragment>
//       ))}
//     </div>
//   );
// };

// export default withRouter(Breadcrumbs);
// // export const Breadcrumbs = () => (
// //   <Route
// //     path="*"
// //     render={props => {
// //       let parts = props.location.pathname.split('/')
// //       console.log({ parts })
// //       const place = parts[parts.length - 1]
// //       console.log({ place })
// //       parts = parts.slice(1, parts.length - 1)
// //       return (
// //         <p>
// //           {parts.map(crumb)}
// //           {paths[`/${place}`]}
// //         </p>
// //       )
// //     }}
// //   />
// // )

// // const crumb = (part, partIndex, parts) => {
// //   const path = ['', ...parts.slice(0, partIndex + 1)].join('/')
// //   console.log('other path', path)
// //   return (
// //     <Link key={path} to={path}>
// //       {part}
// //     </Link>
// //   )
// // }

import React, { Fragment } from "react";
import { Breadcrumb } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { useNavigate, useLocation, NavLink } from "react-router-dom";

const Breadcrumbs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pathnames = pathname.split("/").filter(Boolean);

  return (
    <>
      <nav className="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/dashboards/analytics">
              <AiFillHome className="mb-1" />
            </NavLink>
          </li>
          {/* <li className="breadcrumb-item">
            <NavLink to="/analytics">dashboards</NavLink>
          </li> */}

          {/* {pathnames.length ? (
            <li className="breadcrumb-item">
              <NavLink onClick={() => navigate("/Dashboard")}>
                dashboards
              </NavLink>
            </li>
          ) : (
            <li className="breadcrumb-item hh"> Dashboard </li>
          )} */}

          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Fragment key={index}>
                <Breadcrumb.Item active>{name}</Breadcrumb.Item>
                <h6 className="breadh6 d-block w-100">{name}</h6>
              </Fragment>
            ) : (
              <Fragment key={index}>
                {/* <Link
                  className="hello3"
                  onClick={() => navigate(routeTo)}
                >
                  {name}
                </Link> */}
                <li className="breadcrumb-item h">
                  <NavLink onClick={() => navigate(routeTo)}>{name}</NavLink>
                </li>
              </Fragment>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
/* <nav className="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/analytics">
              <AiFillHome className="mb-1" />
            </NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink to="/analytics">dashboards</NavLink>
          </li>
          <Breadcrumb.Item active>Analytics</Breadcrumb.Item>
        </ol>
      </nav>
      <h6 className="breadh6">Analytics</h6> */
