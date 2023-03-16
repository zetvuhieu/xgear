import React, { useState } from "react";
import className from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBriefcase,
  faMagnifyingGlass,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import logo from "~/assets/images/img/logo.png";
import { useNavigate } from "react-router-dom";

const cx = className.bind(styles);

function Header() {
  let navigate = useNavigate();
  function BackHome() {
    navigate("/");
  }
  function MoveLaptop() {
    navigate("/laptop");
  }
  function MovePc() {
    navigate("/pc");
  }
  function MoveScreen() {
    navigate("/screen");
  }

  return (
    <div className={cx("Header")}>
      <div className={cx("home_header")}>
        <div className={cx("header_wrap")}>
          <div className={cx("header_top")}>
            <div onClick={BackHome} className={cx("logo")}>
              <img className={cx("logo_img")} src={logo} alt="logo" />
            </div>
            <div className={cx("header_search")}>
              <input
                className={cx("search_input")}
                placeholder=" Bạn cần tìm sản phẩm gì ?"
              />
              <button className={cx("search_icon")}>
                <FontAwesomeIcon
                  className={cx("icon_magnify")}
                  icon={faMagnifyingGlass}
                />
              </button>
            </div>
            <div className={cx("bag")}>
              <button className={cx("bag_button")}>
                <FontAwesomeIcon
                  className={cx("bag_icon")}
                  icon={faBagShopping}
                />
              </button>
            </div>
          </div>
          <div className={cx("header_menu")}>
            <div className={cx("list_menu")}>
              <div className={cx("type_item")}>
                <span onClick={MoveLaptop} className={cx("list_item")}>
                  <h4 className={cx("h4_item")}>Laptop</h4>
                </span>
                <div className={cx("type_link")}>
                  <ul className={cx("list_link")}>
                    <li className={cx("link_item")}>Laptop Acer</li>
                    <li className={cx("link_item")}>Laptop Asus</li>
                    <li className={cx("link_item")}>Laptop Dell</li>
                    <li className={cx("link_item")}>Laptop Lenovo</li>
                    <li className={cx("link_item")}>Laptop MSI</li>
                    <li className={cx("link_item")}>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className={cx("type_item")}>
                <span onClick={MovePc} className={cx("list_item")}>
                  <h4 className={cx("h4_item")}>Xgear PC</h4>
                </span>
                <div className={cx("type_link")}>
                  <ul className={cx("list_link")}>
                    <li className={cx("link_item")}>Laptop Acer</li>
                    <li className={cx("link_item")}>Laptop Asus</li>
                    <li className={cx("link_item")}>Laptop Dell</li>
                    <li className={cx("link_item")}>Laptop Lenovo</li>
                    <li className={cx("link_item")}>Laptop MSI</li>
                    <li className={cx("link_item")}>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className={cx("type_item")}>
                <span onClick={MoveScreen} className={cx("list_item")}>
                  <h4 className={cx("h4_item")}>Màn Hình</h4>
                </span>
                <div className={cx("type_link")}>
                  <ul className={cx("list_link")}>
                    <li className={cx("link_item")}>Laptop Acer</li>
                    <li className={cx("link_item")}>Laptop Asus</li>
                    <li className={cx("link_item")}>Laptop Dell</li>
                    <li className={cx("link_item")}>Laptop Lenovo</li>
                    <li className={cx("link_item")}>Laptop MSI</li>
                    <li className={cx("link_item")}>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className={cx("type_item")}>
                <span className={cx("list_item")}>
                  <h4 className={cx("h4_item")}>Linh Kiện</h4>
                </span>
                <div className={cx("type_link")}>
                  <ul className={cx("list_link")}>
                    <li className={cx("link_item")}>Laptop Acer</li>
                    <li className={cx("link_item")}>Laptop Asus</li>
                    <li className={cx("link_item")}>Laptop Dell</li>
                    <li className={cx("link_item")}>Laptop Lenovo</li>
                    <li className={cx("link_item")}>Laptop MSI</li>
                    <li className={cx("link_item")}>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className={cx("type_item")}>
                <span className={cx("list_item")}>
                  <h4 className={cx("h4_item")}>Gaming Gear</h4>
                </span>
                <div className={cx("type_link")}>
                  <ul className={cx("list_link")}>
                    <li className={cx("link_item")}>Laptop Acer</li>
                    <li className={cx("link_item")}>Laptop Asus</li>
                    <li className={cx("link_item")}>Laptop Dell</li>
                    <li className={cx("link_item")}>Laptop Lenovo</li>
                    <li className={cx("link_item")}>Laptop MSI</li>
                    <li className={cx("link_item")}>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className={cx("type_item")}>
                <span className={cx("list_item")}>
                  <h4 className={cx("h4_item")}>Phụ kiện</h4>
                </span>
                <div className={cx("type_link")}>
                  <ul className={cx("list_link")}>
                    <li className={cx("link_item")}>Laptop Acer</li>
                    <li className={cx("link_item")}>Laptop Asus</li>
                    <li className={cx("link_item")}>Laptop Dell</li>
                    <li className={cx("link_item")}>Laptop Lenovo</li>
                    <li className={cx("link_item")}>Laptop MSI</li>
                    <li className={cx("link_item")}>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className={cx("type_item")}>
                <span className={cx("list_item")}>
                  <h4 className={cx("h4_item")}>Xgear Corner</h4>
                </span>
                <div className={cx("type_link")}>
                  <ul className={cx("list_link")}>
                    <li className={cx("link_item")}>Laptop Acer</li>
                    <li className={cx("link_item")}>Laptop Asus</li>
                    <li className={cx("link_item")}>Laptop Dell</li>
                    <li className={cx("link_item")}>Laptop Lenovo</li>
                    <li className={cx("link_item")}>Laptop MSI</li>
                    <li className={cx("link_item")}>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className={cx("type_item")}>
                <span className={cx("list_item")}>
                  <h4 className={cx("h4_item")}>Apple</h4>
                </span>
                <div className={cx("type_link")}>
                  <ul className={cx("list_link")}>
                    <li className={cx("link_item")}>Laptop Acer</li>
                    <li className={cx("link_item")}>Laptop Asus</li>
                    <li className={cx("link_item")}>Laptop Dell</li>
                    <li className={cx("link_item")}>Laptop Lenovo</li>
                    <li className={cx("link_item")}>Laptop MSI</li>
                    <li className={cx("link_item")}>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className={cx("type_item")}>
                <span className={cx("list_item")}>
                  <h4 className={cx("h4_item")}>Apple</h4>
                </span>
                <div className={cx("type_link")}>
                  <ul className={cx("list_link")}>
                    <li className={cx("link_item")}>Laptop Acer</li>
                    <li className={cx("link_item")}>Laptop Asus</li>
                    <li className={cx("link_item")}>Laptop Dell</li>
                    <li className={cx("link_item")}>Laptop Lenovo</li>
                    <li className={cx("link_item")}>Laptop MSI</li>
                    <li className={cx("link_item")}>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("menu_bag")} id={"id_menu_bag"}>
        <button className={cx("close_active")}>
          <FontAwesomeIcon className={cx("close_icon")} icon={faXmark} />
        </button>
        <div className={cx("menu_content")}>
          <h3 className={cx("h3_content")}>No products in the cart.</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
