import React, { useState, useContext } from "react";
import styled from "styled-components";
import { color } from "styled-system";
import { Box } from "../Core";
import GlobalContext from "../../context/GlobalContext";

const BoxWrapper = styled(Box)`
  transition: 0.4s;
  position: fixed;
  right: 0;
  transform: translateX(100%);
  top: 30%;
  z-index: 99;
  &.opened {
    transform: translate(0);
  }
`;

const Panel = styled(Box)`
  box-shadow: 0 22px 34px rgba(22, 28, 45, 0.18);
  border: transparent;
  max-width: 185px;
  padding-left: 13px;
  padding-right: 13px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  border-bottom-left-radius: 25px;
`;

const TextBox = styled(Box)`
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.09px;
  line-height: 26px;
  padding-bottom: 8px;
`;

const ButtonGroup = styled(Box)`
  box-shadow: 0 12px 34px rgba(22, 28, 45, 0.2);
  border-radius: 33px;
  background-color: #ffffff;
  overflow: hidden;
  display: flex;
  max-width: 153px;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  width: 50%;
  font-size: 11px;
  font-weight: 700;
  height: 42px;
  padding-left: 15px;
  padding-right: 15px;
  letter-spacing: 1.38px;
  text-transform: uppercase;
  outline: none !important;
  &.active {
    background-color: #ced4e7;
  }
`;

const ButtonToggle = styled.button`
  width: 30px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  color: #fff;
  font-size: 30px;
  position: absolute;
  left: 1px;
  top: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  transform: translateX(-100%);
  outline: none !important;
  ${color};
  i {
    font-size: inherit;
    pointer-events: none;
    transition: 0.4s;
    .opened & {
      transform: scaleX(-1);
    }
  }
`;

const ThemeSwitch = (props) => {
  const [active, setActive] = useState(false);
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Footer section --> */}
      <BoxWrapper
        className={`position-fixed ${active ? "opened" : ""}`}
        {...props}
      >
        <Panel bg="primary" className="position-relative">
          <TextBox>Change Version</TextBox>
          <ButtonGroup>
            <Button
              className={!gContext.theme.bodyDark ? "active" : ""}
              onClick={() =>
                gContext.changeTheme({
                  bodyDark: false,
                  headerDark: false,
                  footerDark: false,
                })
              }
            >
              Light
            </Button>
            <Button
              className={gContext.theme.bodyDark ? "active" : ""}
              onClick={() =>
                gContext.changeTheme({
                  bodyDark: true,
                  headerDark: true,
                  footerDark: true,
                })
              }
            >
              dark
            </Button>
          </ButtonGroup>
          <ButtonToggle
            bg="primary"
            onClick={() => setActive(!active)}
            className={active ? "opened" : ""}
          >
            <i className="icon icon-small-left"></i>
          </ButtonToggle>
        </Panel>
      </BoxWrapper>
    </>
  );
};

export default ThemeSwitch;
