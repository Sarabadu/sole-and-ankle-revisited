import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileBtns>
          <ShoppingBag>
            <Icon id="shopping-bag" strokeWidth={2} />
          </ShoppingBag>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
          </UnstyledButton>
        </MobileBtns>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  /* height: 72px; */
  border-bottom: 1px solid var(--color-gray-300);

  overflow-x: auto;
  @media ${QUERIES.tabletAndDown} {
    align-items: center;
  }
  @media ${QUERIES.phoneAndDown} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const ShoppingBag = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 7.7vw - 3.5rem, 3rem);
  margin: 0px clamp(1rem, 14vw - 7.25rem, 5rem);
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const MobileBtns = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  & > * {
    display: none;
  }
  @media ${QUERIES.tabletAndDown} {
    gap: 2rem;
    & > * {
      display: revert;
    }
  }
  @media ${QUERIES.phoneAndDown} {
    gap: 1rem;
    & > * {
      display: revert;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
