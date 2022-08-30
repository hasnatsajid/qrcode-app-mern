import React from "react";
import { Dropdown, Menu, Space } from "antd";
import { Container } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { Head, HeadDropLink } from "./header.style";

const Header = () => {
  const menu = (
    <Menu
      items={[
        {
          label: (
            <HeadDropLink>
              <Link to="/">Home</Link>
            </HeadDropLink>
          ),
          key: "0",
        },
        {
          label: (
            <HeadDropLink>
              <Link to="/privacy">Privacy</Link>
            </HeadDropLink>
          ),
          key: "1",
        },
        {
          label: (
            <HeadDropLink>
              <Link to="/trackOrder">Where is my order?</Link>
            </HeadDropLink>
          ),
          key: "3",
        },
        {
          label: <HeadDropLink>Contact</HeadDropLink>,
          key: "4",
        },
      ]}
    />
  );

  return (
    <>
      <Head>
        <Container>
          <a className="brand" href="/">
            <img src="/images/LOGO.svg" alt="click here" />
          </a>
          <div className="links">
            <Dropdown overlay={menu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <div className="toggler"></div>
                  <div className="toggler"></div>
                  <div className="toggler"></div>
                </Space>
              </a>
            </Dropdown>
          </div>
        </Container>
      </Head>
    </>
  );
};

export default Header;
