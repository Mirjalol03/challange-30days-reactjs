import { Button, Dropdown, Menu, Space } from "antd";
import React from "react";
import useTheme from "../../hooks/useTheme";
import "./NavMenu.scss";
import useMenu from "../../hooks/useMenu";
import { DownOutlined } from "@ant-design/icons";
import { SET_THEME } from "../../context/theme/types";

const NavMenu = () => {
  const [theme, dispatch] = useTheme();

  const [menu] = useMenu();

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
    <div className="nav-menu">
      
      <Menu
        style={{
          borderRight: 0,
          position: "absolute",
          top: "0",
          height: "100%", 
          right: menu ? 0 : "-300px", // Hide the menu by default
          transition: "right 0.3s ease-in-out", // Add a transition effect
        }}
        // defaultSelectedKeys={['2']}
        defaultOpenKeys={[1]}
        mode="inline"
        theme={theme.theme}
      >
        <Menu.Item key="1">
          <a href="#link">Home</a>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="#link">About</a>
        </Menu.Item>
        <Menu.Item key="3">
          <a href="#link">Contact</a>
        </Menu.Item>
        <Menu.Item key="4">
          <a href="#link">Blog</a>
        </Menu.Item>

        <Menu.Item key="5">
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
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavMenu;
