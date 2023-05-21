// import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { NavList, LinkStyled } from "../components/nav.styled";
const LINKS = [
  { to: "/", text: "Home" },
  { to: "/Starred", text: "Starred" },
];
const Navs = () => {
  const location = useLocation();
  return (
    <div>
      <NavList>
        {LINKS.map((item) => (
          <li key={item.to}>
            <LinkStyled
              to={item.to}
              className={item.to === location.pathname ? "active" : ""}
            >
              {item.text}
            </LinkStyled>
          </li>
        ))}
        {/* <li>
          <Link to="/Starred.jsx">Go to Starred page</Link>
        </li> */}
      </NavList>
    </div>
  );
};

export default Navs;
