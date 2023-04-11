import React from "react";
import "./Navbar.scss";
import { Button, Dropdown, Space } from "antd";
import { DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import useTheme from "../../hooks/useTheme";
import { SET_THEME } from "../../context/theme/types";
import useMenu from "../../hooks/useMenu";

const Navbar = () => {
  const [theme, dispatch] = useTheme();
  const [menu, setMenu] = useMenu();

  const items = [
    {
      label: "Light",
      key: "light",
    },
    {
      label: "Dark",
      key: "dark",
    },
  ];

  const handleThemeChange = (e) => {
    dispatch({
      type: SET_THEME,
      payload: e.key,
    });
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <div className="navbar__brand">
            <a
              className="navbar__brand__item"
              href="https://www.linkedin.com/in/mirjalol-jabborov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Challange
            </a>
          </div>
          <div className="navbar__menu">
            <ul className="navbar__menu__list">
              <li className="navbar__menu__item">
                <a href="#link">Home</a>
              </li>
              <li className="navbar__menu__item">
                <a href="#link">About</a>
              </li>
              <li className="navbar__menu__item">
                <a href="#link">Contact</a>
              </li>
              <li className="navbar__menu__item">
                <a href="#link">Blog</a>
              </li>
              <li className="navbar__menu__item">
                <a
                  href="https://www.linkedin.com/in/mirjalol-jabborov/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <Dropdown
                menu={{ items, onClick: handleThemeChange }}
                placement="bottom"
              >
                <Button style={{ textTransform: "capitalize" }}>
                  <Space>
                    {theme.theme}
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>

            </ul>
          </div>
              <Button
                type="primary"
                onClick={() => {setMenu(p => !p)}}
                className="menu-button"
              >
                {React.createElement(
                  menu ? MenuUnfoldOutlined : MenuFoldOutlined
                )}
              </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
