/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        {/* <div> */}
        <CloseBtn onClick={onDismiss}>
          <Icon id={"close"} />
          <VisuallyHidden>Dissmiss menu</VisuallyHidden>
        </CloseBtn>
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
        {/* </div> */}
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  /* position: relative; */
  padding: ${32 / 16}rem;
  padding-top: ${24 / 16}rem;
  padding-right: ${16 / 16}rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: white;
  justify-content: space-between;
  /* width: 100%; */
`;

const CloseBtn = styled(UnstyledButton)`
  align-self: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;

  & > a {
    text-decoration: none;
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: var(--color-gray-900);
    /* identical to box height */

    text-transform: uppercase;

    :visited {
      color: var(--color-secondary);
    }
  }
`;
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;

  & > a {
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-decoration: none;
    color: var(--color-gray-700);
  }
`;

export default MobileMenu;
