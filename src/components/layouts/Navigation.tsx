import Link from "next/link";
import styled from "@emotion/styled";
import { ROUTES } from "../../constants";

interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
  SUBS?: Array<ROUTE>;
}

export const Navigation = () => {
  return (
    <header>
      <NavContainer>
        <Title href="/">Futurama</Title>
        <Nav>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <Menu key={`main-menu-${routeObject.ID}`}>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
              </Menu>
            );
          })}
        </Nav>
      </NavContainer>
    </header>
  );
};


const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vw 10vw;
    min-width: min-content; 
`
const Title = styled.a`
    font-size: 3rem;
    font-weight: 700;
    color: #f3585d;
`

const Nav = styled.ul`
    display: flex;
`

const Menu = styled.li`
    margin: 20px;
    font-weight: 600;
    };
`


