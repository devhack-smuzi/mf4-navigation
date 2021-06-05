import React, { FC } from "react";
import { Header as AntdHeader } from "antd/lib/layout/layout";
import { Menu } from "antd";
import logo from "../../assets/logo.png";
import Search from "antd/lib/input/Search";

export const Header: FC = (props) => {
  const onSearch = (value: any) => console.log(value);

  return (
    <AntdHeader style={{ backgroundColor: "#323242", width: "100%" }}>
      <Menu
        style={{ backgroundColor: "#323242", color: "white" }}
        mode="horizontal"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1" style={{ paddingRight: "5%" }}>
          <img src={logo} alt="" style={{ width: "100px" }} />
        </Menu.Item>
        <Menu.Item key="2">Главная</Menu.Item>
        <Menu.Item key="3">Платежи</Menu.Item>
        <Menu.Item key="4">История</Menu.Item>
        <Menu.Item key="5">Каталог</Menu.Item>
        <Menu.Item key="6">Настройки</Menu.Item>
        <Menu.Item key="7" style={{ float: "right", paddingTop: "1%" }}>
          <Search
            placeholder="поиск"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </Menu.Item>
      </Menu>
    </AntdHeader>
  );
};