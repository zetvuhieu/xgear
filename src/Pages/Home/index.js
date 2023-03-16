import styles from "./Home.module.scss";
import className from "classnames/bind";
import slide0 from "~/assets/images/img/home_banner3.jpg";
import slide1 from "~/assets/images/img/home_banner2.jpeg";
import slide2 from "~/assets/images/img/home_banner5.png";
import slide3 from "~/assets/images/img/home_banner4.jpg";
import slideMini1 from "~/assets/images/img/banner_mini1.jpg";
import slideMini2 from "~/assets/images/img/banner_mini2.jpg";
import slideMini3 from "~/assets/images/img/banner_mini3.png";
import sales1 from "~/assets/images/img/sales1.jpg";
import sales2 from "~/assets/images/img/sales2.jpg";
import sales3 from "~/assets/images/img/sales3.jpg";
import sales4 from "~/assets/images/img/sales4.jpg";
import cpu from "~/assets/images/configuration/CPU.png";
import card from "~/assets/images/configuration/card.png";
import ram from "~/assets/images/configuration/ram.png";
import rom from "~/assets/images/configuration/rom.png";
import time from "~/assets/images/configuration/time.png";
import timer from "~/assets/images/configuration/timer.png";
import frequency from "~/assets/images/configuration/frequency.png";
import inch from "~/assets/images/configuration/inch.png";
import quality from "~/assets/images/configuration/quality.png";
import mode from "~/assets/images/configuration/mode.png";
import panel from "~/assets/images/configuration/panel.png";
import screen from "~/assets/images/configuration/screen.png";
import mainboard from "~/assets/images/configuration/mainboard.png";
import electricity from "~/assets/images/configuration/electricity.png";
import lap1 from "~/assets/images/product/1.png";
import lap2 from "~/assets/images/product/2.jpg";
import lap3 from "~/assets/images/product/3.png";
import lap4 from "~/assets/images/product/4.png";
import lap5 from "~/assets/images/product/5.jpg";
import lap6 from "~/assets/images/product/6.jpeg";
import lap7 from "~/assets/images/product/7.jpg";
import lap8 from "~/assets/images/product/8.jpg";
import pc1 from "~/assets/images/pc/1.jpg";
import pc2 from "~/assets/images/pc/2.jpg";
import pc3 from "~/assets/images/pc/3.jpg";
import pc4 from "~/assets/images/pc/4.jpg";
import screen1 from "~/assets/images/screen/1.jpg";
import screen2 from "~/assets/images/screen/2.jpg";
import screen3 from "~/assets/images/screen/3.jpg";
import screen4 from "~/assets/images/screen/4.jpg";
import headphone1 from "~/assets/images/gear/headphone1.jpg";
import headphone2 from "~/assets/images/gear/headphone2.jpg";
import keyboard1 from "~/assets/images/gear/keyboard1.jpg";
import microphone1 from "~/assets/images/gear/microphone1.jpg";
import webcam1 from "~/assets/images/gear/webcam1.jpg";
import mouse1 from "~/assets/images/gear/mouse1.jpg";
import mouse2 from "~/assets/images/gear/mouse2.jpg";
import mouse3 from "~/assets/images/gear/mouse3.jpg";
import mouse4 from "~/assets/images/gear/mouse4.jpg";
import mouse5 from "~/assets/images/gear/mouse5.jpeg";
import mouse6 from "~/assets/images/gear/mouse6.jpg";
import loudspeaker1 from "~/assets/images/gear/loudspeaker1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import {
  faAngleRight,
  faAnglesRight,
  faArrowRightArrowLeft,
  faBars,
  faChevronCircleLeft,
  faChevronCircleRight,
  faEllipsis,
  faEye,
  faMoneyBill1Wave,
  faShield,
  faShieldHalved,
  faStar,
  faStarHalfStroke,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { Children } from "react";

const cx = className.bind(styles);

function Home() {
  const arr_hinh = [slide0, slide1, slide2, slide3];
  let index = 1;

  function next() {
    const hinh = document.getElementById("slide_id");
    hinh.src = arr_hinh[index];
    index++;
    if (index > 3) {
      index = 0;
    }
  }
  function prev() {
    const hinh = document.getElementById("slide_id");
    hinh.src = arr_hinh[index];
    index--;
    if (index < 0) index = arr_hinh.length - 1;
    document.getElementById("slide111").src = arr_hinh[index];
  }
  setInterval(next, 8000);

  let navigate = useNavigate();
  function ViewAll() {
    navigate("/laptop");
  }

  return (
    <div className={cx("home")}>
      <div className={cx("home_wrap")}>
        <div className={cx("home_banner")}>
          <div className={cx("banner_slide")}>
            <img
              className={cx("slide_img")}
              id={"slide_id"}
              src={slide0}
              style={{ width: "874px", height: "450px" }}
              alt="slide"
            />
            <div className={cx("directional")}>
              <FontAwesomeIcon
                onClick={prev}
                className={cx("icon_chevron_left")}
                icon={faChevronCircleLeft}
              />
              <FontAwesomeIcon
                onClick={next}
                className={cx("icon_chevron_right")}
                icon={faChevronCircleRight}
              />
            </div>
          </div>
          <div className={cx("banner_mini")}>
            <div className={cx("banner_mini_child")}>
              <img
                src={slideMini1}
                style={{
                  width: "297px",
                  height: "128.5px",
                  borderRadius: "8x",
                }}
              />
            </div>
            <div className={cx("banner_mini_child")}>
              <img
                src={slideMini2}
                style={{
                  width: "297px",
                  height: "128.5px",
                  borderRadius: "8x",
                }}
              />
            </div>
            <div className={cx("banner_mini_child3")}>
              <img
                src={slideMini3}
                style={{
                  width: "282.15px",
                  height: "122.075px",
                }}
              />
            </div>
          </div>
        </div>
        <div className={cx("home_policy")}>
          <div className={cx("bar_policy")}>
            <div className={cx("policy_content")}>
              <FontAwesomeIcon
                className={cx("icon_policy")}
                icon={faShieldHalved}
              />
              <span className={cx("title_content")}>
                <h6 className={cx("heading_title")}>Bảo hành</h6>
                <p className={cx("p_title")}>Chính hãng 100%</p>
              </span>
            </div>
            <div className={cx("policy_content")}>
              <FontAwesomeIcon
                className={cx("icon_policy")}
                icon={faArrowRightArrowLeft}
              />
              <span className={cx("title_content")}>
                <h6 className={cx("heading_title")}>Đổi mới</h6>
                <p className={cx("p_title")}>Trong 7 ngày</p>
              </span>
            </div>
            <div className={cx("policy_content")}>
              <FontAwesomeIcon
                className={cx("icon_policy")}
                icon={faMoneyBill1Wave}
              />
              <span className={cx("title_content")}>
                <h6 className={cx("heading_title")}>Hỗ trợ</h6>
                <p className={cx("p_title")}>Trả góp 0%</p>
              </span>
            </div>
            <div className={cx("policy_content")}>
              <FontAwesomeIcon
                className={cx("icon_policy")}
                icon={faTruckFast}
              />
              <span className={cx("title_content")}>
                <h6 className={cx("heading_title")}>Giao nhanh 2h</h6>
                <p className={cx("p_title")}>Nội thành HN & HCM</p>
              </span>
            </div>
          </div>
          <div className={cx("list_sales")}>
            <div className={cx("sales_slide")}>
              <img
                className={cx("sale_img")}
                src={sales1}
                style={{ width: "280px", height: "140px" }}
                alt="sales"
              />
            </div>
            <div className={cx("sales_slide")}>
              <img
                className={cx("sale_img")}
                src={sales2}
                style={{ width: "280px", height: "140px" }}
                alt="sales"
              />
            </div>
            <div className={cx("sales_slide")}>
              <img
                className={cx("sale_img")}
                src={sales3}
                style={{ width: "280px", height: "140px" }}
                alt="sales"
              />
            </div>
            <div className={cx("sales_slide")}>
              {" "}
              <img
                className={cx("sale_img")}
                src={sales4}
                style={{ width: "280px", height: "140px" }}
                alt="sales"
              />
            </div>
          </div>
        </div>
        <div className={cx("home_product_1")}>
          <div className={cx("product_bar")}>
            <div className={cx("heading_products")}>
              <h5 className={cx("h5_titlte")}>LAPTOP</h5>
            </div>
            <div className={cx("heading_product_child")}>
              <h7 className={cx("h7_tittle")}>Tuf Gaming</h7>
            </div>
            <div className={cx("heading_product_child")}>
              <h7 className={cx("h7_tittle")}>Ideapad Gaming</h7>
            </div>
            <div className={cx("heading_product_child")}>
              <h7 className={cx("h7_tittle")}>Legion</h7>
            </div>
            <div className={cx("heading_product_child")}>
              <h7 className={cx("h7_tittle")}>Nitro 5g</h7>
            </div>
            <div className={cx("heading_product_child")}>
              <h7 className={cx("h7_tittle")}>Strix G</h7>
            </div>
            <div className={cx("heading_product_child")}>
              <h7 className={cx("h7_tittle")}>Envy</h7>
            </div>
          </div>
          <div className={cx("products_list_row")}>
            <div className={cx("column_products_list")}>
              <div className={cx("column_products_list_wall")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={lap1}
                      style={{
                        borderRadius: "8px",
                        width: "267.5px",
                        height: "267.5px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading")}>
                    <h9 className={cx("heading_name-product")}>
                      Laptop Gaming Asus TUF A15 FA506IHRB-HN080W / HN019W
                      Geforce GTX 1650 4GB AMD Ryzen 5 4600H 8GB 512GB 15.6″
                      144Hz IPS Win 11 Gray Metal RGB
                    </h9>
                    <div className={cx("product_cost")}>
                      <span className={cx("product_cost_initial")}>
                        19,990,000 đ
                      </span>
                      <span className={cx("product_cost_sale")}>
                        15,490,000 đ
                      </span>
                    </div>
                    <div className={cx("configuration_information")}>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={cpu} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>R5 4600H</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={card} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>GTX 1650</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={ram} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>DDR4 8GB</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={rom} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>512GB</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={time} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>24 tháng</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={screen} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>15.6" FHD 144Hz</h10>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list")}>
              <div className={cx("column_products_list_wall")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={lap2}
                      style={{
                        borderRadius: "8px",
                        width: "267.5px",
                        height: "267.5px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading")}>
                    <h9 className={cx("heading_name-product")}>
                      Laptop Gaming Acer Aspire 7 A715-43G-R8GA RTX 3050 4GB
                      Ryzen 5 5625U 8GB 512GB 15.6 FHD 144Hz IPS Win 11
                    </h9>
                    <div className={cx("product_cost")}>
                      <span className={cx("product_cost_initial")}>
                        21,990,000 đ
                      </span>
                      <span className={cx("product_cost_sale")}>
                        16,990,000 đ
                      </span>
                    </div>
                    <div className={cx("configuration_information")}>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={cpu} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>R5 5625U</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={card} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>RTX 3050</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={ram} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>DDR4 8GB</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={rom} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>512GB</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={time} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>12 tháng</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={screen} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>15.6" FHD 144Hz</h10>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list")}>
              <div className={cx("column_products_list_wall")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={lap3}
                      style={{
                        borderRadius: "8px",
                        width: "267.5px",
                        height: "267.5px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading")}>
                    <h9 className={cx("heading_name-product")}>
                      Laptop Gigabyte A5 K1-AVN1030SB RTX 3060 6GB Ryzen 5 5600H
                      8GB 512GB 15.6″ FHD 144Hz Black Win11
                    </h9>
                    <div className={cx("product_cost")}>
                      <span className={cx("product_cost_initial")}>
                        23,490,000 đ
                      </span>
                      <span className={cx("product_cost_sale")}>
                        21,990,000 đ
                      </span>
                    </div>
                    <div className={cx("configuration_information")}>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={cpu} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>R5 5600H</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={card} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>RTX 3060</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={ram} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>DDR4 8GB</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={rom} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>512GB</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={time} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>24 tháng</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={screen} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>15.6" FHD 144Hz</h10>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list")}>
              <div className={cx("column_products_list_wall")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={lap4}
                      style={{
                        borderRadius: "8px",
                        width: "267.5px",
                        height: "267.5px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading")}>
                    <h9 className={cx("heading_name-product")}>
                      Laptop Lenovo Legion 5 15AIH7 82RC0036VN RTX 3050Ti 4GB i7
                      12700H 8GB 512GB 15.6″ FHD 165Hz G-sync IPS 100%sRGB Win
                      11 Storm Grey
                    </h9>
                    <div className={cx("product_cost")}>
                      <span className={cx("product_cost_initial")}>
                        37,990,000 đ
                      </span>
                      <span className={cx("product_cost_sale")}>
                        29,990,000 đ
                      </span>
                    </div>
                    <div className={cx("configuration_information")}>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={cpu} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>i7 12700H</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={card} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>RTX 3050Ti</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={ram} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>DDR5 8GB</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={rom} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>512GB</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={time} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>36 tháng</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={screen} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>15.6" FHD 165Hz</h10>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list")}>
              <div className={cx("column_products_list_wall")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={lap5}
                      style={{
                        borderRadius: "8px",
                        width: "267.5px",
                        height: "267.5px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading")}>
                    <h9 className={cx("heading_name-product")}>
                      Laptop ASUS ROG Zephyrus G14 GA401QC-K2199W RTX 3050 4GB
                      Ryzen 7 5800HS 8GB 512GB 14″ QHD IPS 120Hz Win 11 Xám
                    </h9>
                    <div className={cx("product_cost")}>
                      <span className={cx("product_cost_initial")}>
                        32,990,000 đ
                      </span>
                      <span className={cx("product_cost_sale")}>
                        27,790,000 đ
                      </span>
                    </div>
                    <div className={cx("configuration_information")}>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={cpu} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>R7 5800HS</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={card} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>RTX 3050</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={ram} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>DDR4 8GB</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={rom} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>512GB</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={time} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>24 tháng</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={screen} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>14" 2K 120Hz</h10>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list")}>
              <div className={cx("column_products_list_wall")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={lap6}
                      style={{
                        borderRadius: "8px",
                        width: "267.5px",
                        height: "267.5px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading")}>
                    <h9 className={cx("heading_name-product")}>
                      Laptop Gaming MSI Crosshair 15 B12UEZ-620VN / 460VN
                      Geforce RTX 3060 6GB Intel Core i7 12700H 16GB 1TB 15.6”
                      QHD 165Hz IPS RGB Win 11
                    </h9>
                    <div className={cx("product_cost")}>
                      <span className={cx("product_cost_initial")}>
                        42,990,000 đ
                      </span>
                      <span className={cx("product_cost_sale")}>
                        36,990,000 đ
                      </span>
                    </div>
                    <div className={cx("configuration_information")}>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={cpu} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>i7 12700H</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={card} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>RTX 3060</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={ram} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>DDR4 16GB</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={rom} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>1TB</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={time} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>24 tháng</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={screen} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>15.6" 2K 165Hz</h10>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list")}>
              <div className={cx("column_products_list_wall")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={lap7}
                      style={{
                        borderRadius: "8px",
                        width: "267.5px",
                        height: "267.5px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading")}>
                    <h9 className={cx("heading_name-product")}>
                      Laptop Gaming Asus ROG Strix G15 G513IE-HN729W Geforce RTX
                      3050 4GB AMD R7 4800H 8GB 512GB 15.6″ 144Hz FHD IPS 4
                      Zones Win 11
                    </h9>
                    <div className={cx("product_cost")}>
                      <span className={cx("product_cost_initial")}>
                        25,990,000 đ
                      </span>
                      <span className={cx("product_cost_sale")}>
                        20,990,000 đ
                      </span>
                    </div>
                    <div className={cx("configuration_information")}>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={cpu} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>R7 4800H</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={card} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>RTX 3050</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={ram} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>DDR4 8GB</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={rom} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>512GB</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={time} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>24 tháng</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={screen} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>15.6" FHD 144Hz</h10>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list")}>
              <div className={cx("column_products_list_wall")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={lap8}
                      style={{
                        borderRadius: "8px",
                        width: "267.5px",
                        height: "267.5px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading")}>
                    <h9 className={cx("heading_name-product")}>
                      Laptop HP Victus 16 d1191TX 7C0S5PA RTX 3050Ti 4GB Intel
                      i5 12500H 16GB 512GB 16.1″ FHD IPS 144Hz Xanh Win 11
                    </h9>
                    <div className={cx("product_cost")}>
                      <span className={cx("product_cost_initial")}>
                        19,990,000 đ
                      </span>
                      <span className={cx("product_cost_sale")}>
                        15,490,000 đ
                      </span>
                    </div>
                    <div className={cx("configuration_information")}>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={cpu} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>i5 12500H</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={card} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>RTX 3050Ti</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={ram} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>DDR5 16GB</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={rom} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>512GB</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={time} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>24 tháng</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={screen} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>16.1" FHD 144Hz</h10>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("view_all_product")}>
            <button onClick={ViewAll} className={cx("view_all_laptop")}>
              <FontAwesomeIcon icon={faEye} />
              <h11 className={cx("btn_view")}>Xem tất cả</h11>
              <FontAwesomeIcon icon={faAnglesRight} />
            </button>
          </div>
        </div>
        <div className={cx("home_product_2")}>
          <div className={cx("product_bar")}>
            <div className={cx("heading_products")}>
              <h5 className={cx("h5_titlte")}>MÀN HÌNH,PC</h5>
            </div>
            <div className={cx("heading_product_child")}>
              <h7 className={cx("h7_tittle")}>Màn hình Gaming</h7>
            </div>
            <div className={cx("heading_product_child")}>
              <h7 className={cx("h7_tittle")}>Màn hình Đồ họa</h7>
            </div>
            <div className={cx("heading_product_child")}>
              <h7 className={cx("h7_tittle")}>PC Gaming</h7>
            </div>
            <div className={cx("heading_product_child")}>
              <h7 className={cx("h7_tittle")}>PC Đồ họa</h7>
            </div>
          </div>
          <div className={cx("products_list_row")}>
            <div className={cx("column_products_list")}>
              <div className={cx("column_products_list_wall")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={pc1}
                      style={{
                        borderRadius: "8x",
                        width: "267.5px",
                        height: "267.5px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading")}>
                    <h9 className={cx("heading_name-product")}>
                      PC Xgear UD5 Intel i5-12400F 16GB RTX 3060 12G 250GB SSD
                      Nvme
                    </h9>
                    <div className={cx("product_cost")}>
                      <span className={cx("product_cost_initial")}>
                        23,990,000 đ
                      </span>
                      <span className={cx("product_cost_sale")}>
                        19,190,000 đ
                      </span>
                    </div>
                    <div className={cx("configuration_information")}>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={cpu} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>i5 12400F</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={card} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>RTX 3060</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={ram} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>DDR4 16GB</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={rom} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>250GB NVMe</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={mainboard} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>B660M</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={electricity} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>650W</h10>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list")}>
              <div className={cx("column_products_list_wall")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={pc2}
                      style={{
                        borderRadius: "8px",
                        width: "267.5px",
                        height: "267.5px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading")}>
                    <h9 className={cx("heading_name-product")}>
                      PC Xgear MAG7i Core I7-12700F 16GB RTX 3060 250GB Nvme SSD
                    </h9>
                    <div className={cx("product_cost")}>
                      <span className={cx("product_cost_initial")}>
                        33,990,000 đ
                      </span>
                      <span className={cx("product_cost_sale")}>
                        23,790,000 đ
                      </span>
                    </div>
                    <div className={cx("configuration_information")}>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={cpu} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>i7 12700F</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={card} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>RTX 3050</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={ram} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>DDR4 16GB</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={rom} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>250GB NVMe</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={mainboard} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>B660M</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={electricity} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>650W</h10>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list")}>
              <div className={cx("column_products_list_wall")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={pc3}
                      style={{
                        borderRadius: "8px",
                        width: "267.5px",
                        height: "267.5px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading")}>
                    <h9 className={cx("heading_name-product")}>
                      PC Xgear Fi3 Core i3-12100F 8GB RTX 2060 128GB SSD
                    </h9>
                    <div className={cx("product_cost")}>
                      <span className={cx("product_cost_initial")}>
                        15,990,000 đ
                      </span>
                      <span className={cx("product_cost_sale")}>
                        12,790,000 đ
                      </span>
                    </div>
                    <div className={cx("configuration_information")}>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={cpu} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>i3 12100F</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={card} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>RTX 2060</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={ram} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>DDR4 8GB</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={rom} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>128GB</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={mainboard} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>H610M</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={electricity} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>550W</h10>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list")}>
              <div className={cx("column_products_list_wall")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={pc4}
                      style={{
                        borderRadius: "8px",
                        width: "267.5px",
                        height: "267.5px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading")}>
                    <h9 className={cx("heading_name-product")}>
                      PC Xgear FA1 Ryzen 5 5600G 16GB RAM 128GB SSD
                    </h9>
                    <div className={cx("product_cost")}>
                      <span className={cx("product_cost_initial")}>
                        9,990,000 đ
                      </span>
                      <span className={cx("product_cost_sale")}>
                        7,990,000 đ
                      </span>
                    </div>
                    <div className={cx("configuration_information")}>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={cpu} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>R5 5600G</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={card} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>AMD Radeon</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={ram} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>DDR5 16GB</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={rom} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>128GB</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={mainboard} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>B450M</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={electricity} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>450W</h10>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list")}>
              <div className={cx("column_products_list_wall")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={screen1}
                      style={{
                        borderRadius: "8px",
                        width: "267.5px",
                        height: "267.5px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading")}>
                    <h9 className={cx("heading_name-product")}>
                      Màn hình Asus ROG Strix XG249CM (24″/ Full HD/ IPS/ 1ms
                      GTG/ 270Hz)
                    </h9>
                    <div className={cx("product_cost")}>
                      <span className={cx("product_cost_initial")}>
                        10,490,000 đ
                      </span>
                      <span className={cx("product_cost_sale")}>
                        9,990,000 đ
                      </span>
                    </div>
                    <div className={cx("configuration_information")}>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={inch} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>24 inch</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={quality} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>FHD 1920 * 1080</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={panel} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>Fast IPS</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={frequency} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>270 Hz Max</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={timer} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>1ms GTG</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={mode} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>105% sRGB</h10>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list")}>
              <div className={cx("column_products_list_wall")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={screen2}
                      style={{
                        borderRadius: "8px",
                        width: "267.5px",
                        height: "267.5px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading")}>
                    <h9 className={cx("heading_name-product")}>
                      Màn hình Samsung Odyssey G3 LS27AG320NEXXV (27″/ VA/
                      FullHD/ 165Hz/ 1ms MPRT)
                    </h9>
                    <div className={cx("product_cost")}>
                      <span className={cx("product_cost_initial")}>
                        5,990,000 đ
                      </span>
                      <span className={cx("product_cost_sale")}>
                        5,490,000 đ
                      </span>
                    </div>
                    <div className={cx("configuration_information")}>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={inch} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>27 inch</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={quality} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>FHD 1920 * 1080</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={panel} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>VA</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={frequency} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>165 Hz</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={timer} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>1ms MPRT</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={mode} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>72% NTSC 1976</h10>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list")}>
              <div className={cx("column_products_list_wall")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={screen3}
                      style={{
                        borderRadius: "8px",
                        width: "267.5px",
                        height: "267.5px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading")}>
                    <h9 className={cx("heading_name-product")}>
                      Màn hình cong Gigabyte G27FC-A-EK (27″ cong/ VA/ Full HD/
                      165Hz/ 1ms MPRT)
                    </h9>
                    <div className={cx("product_cost")}>
                      <span className={cx("product_cost_initial")}>
                        5,990,000 đ
                      </span>
                      <span className={cx("product_cost_sale")}>
                        4,890,000 đ
                      </span>
                    </div>
                    <div className={cx("configuration_information")}>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={inch} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>27 inch</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={quality} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>FHD 1920 * 1080</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={panel} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>VA cong</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={frequency} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>165 Hz</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={timer} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>1ms MPRT</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={mode} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>120% sRGB</h10>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list")}>
              <div className={cx("column_products_list_wall")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={screen4}
                      style={{
                        borderRadius: "8px",
                        width: "267.5px",
                        height: "267.5px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading")}>
                    <h9 className={cx("heading_name-product")}>
                      Màn hình Asus TUF Gaming VG27AQ1A (27″/ QHD 2K/ IPS/ 1ms
                      MPRT/ 170Hz)
                    </h9>
                    <div className={cx("product_cost")}>
                      <span className={cx("product_cost_initial")}>
                        9,490,000 đ
                      </span>
                      <span className={cx("product_cost_sale")}>
                        8,490,000 đ
                      </span>
                    </div>
                    <div className={cx("configuration_information")}>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={inch} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>27 inch</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={quality} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>QHD 2560 * 1440</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={panel} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>IPS</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={frequency} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>170 Hz (OC)</h10>
                          </div>
                        </div>
                      </div>
                      <div className={cx("list_wall")}>
                        <div className={cx("configuration_information_child")}>
                          <img src={timer} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>1ms MPRT</h10>
                          </div>
                        </div>
                        <div className={cx("configuration_information_child")}>
                          <img src={mode} />
                          <div className={cx("heading_h10")}>
                            <h10 className={cx("h10")}>130% sRGB</h10>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("view_all_product")}>
            <button onClick={ViewAll} className={cx("view_all_laptop")}>
              <FontAwesomeIcon icon={faEye} />
              <h11 className={cx("btn_view")}>Xem tất cả</h11>
              <FontAwesomeIcon icon={faAnglesRight} />
            </button>
          </div>
        </div>
        <div className={cx("home_product_3")}>
          <div className={cx("product_bar")}>
            <div className={cx("heading_products")}>
              <h5 className={cx("h5_titlte")}>GAMING GEAR</h5>
            </div>
            <div className={cx("heading_product_child")}>
              <h7 className={cx("h7_tittle")}>Chuột Logitech</h7>
            </div>
            <div className={cx("heading_product_child")}>
              <h7 className={cx("h7_tittle")}>Bàn phím Razer</h7>
            </div>
            <div className={cx("heading_product_child")}>
              <h7 className={cx("h7_tittle")}>Tai nghe HyperX</h7>
            </div>
          </div>
          <div className={cx("products_list_row")}>
            <div className={cx("column_products_list_6")}>
              <div className={cx("column_products_list_wall_6")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={headphone1}
                      style={{
                        borderRadius: "8x",
                        width: "168.33px",
                        height: "168.33px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading_6")}>
                    <h9 className={cx("heading_name-product_6")}>
                      Tai nghe HyperX Cloud II 7.1 Surround
                    </h9>
                    <div className={cx("product_cost_6")}>
                      <div className={cx("product_cost_initial_6")}>
                        2,990,000 đ
                      </div>
                      <div className={cx("product_cost_sale_6")}>
                        2,050,000 đ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list_6")}>
              <div className={cx("column_products_list_wall_6")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={headphone2}
                      style={{
                        borderRadius: "8x",
                        width: "168.33px",
                        height: "168.33px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading_6")}>
                    <h9 className={cx("heading_name-product_6")}>
                      Tai nghe không dây Logitech G733 Lightspeed
                    </h9>
                    <div className={cx("product_cost_6")}>
                      <div className={cx("product_cost_initial_6")}>
                        3,490,000 đ
                      </div>
                      <div className={cx("product_cost_sale_6")}>
                        2,690,000 đ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list_6")}>
              <div className={cx("column_products_list_wall_6")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={keyboard1}
                      style={{
                        borderRadius: "8x",
                        width: "168.33px",
                        height: "168.33px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading_6")}>
                    <h9 className={cx("heading_name-product_6")}>
                      Bàn phím Asus ROG Strix Flare II NX
                    </h9>
                    <div className={cx("product_cost_6")}>
                      <div className={cx("product_cost_initial_6")}>
                        3,990,000 đ
                      </div>
                      <div className={cx("product_cost_sale_6")}>
                        2,990,000 đ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list_6")}>
              <div className={cx("column_products_list_wall_6")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={microphone1}
                      style={{
                        borderRadius: "8x",
                        width: "168.33px",
                        height: "168.33px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading_6")}>
                    <h9 className={cx("heading_name-product_6")}>
                      Microphone Razer Seiren V2 X (RZ19-04050100-R3M1)
                    </h9>
                    <div className={cx("product_cost_6")}>
                      <div className={cx("product_cost_initial_6")}>
                        2,790,000 đ
                      </div>
                      <div className={cx("product_cost_sale_6")}>
                        2,290,000 đ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list_6")}>
              <div className={cx("column_products_list_wall_6")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={webcam1}
                      style={{
                        borderRadius: "8x",
                        width: "168.33px",
                        height: "168.33px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading_6")}>
                    <h9 className={cx("heading_name-product_6")}>
                      Webcam Rapoo C260 FullHD 1080p
                    </h9>
                    <div className={cx("product_cost_6")}>
                      <div className={cx("product_cost_initial_6")}>
                        690,000 đ
                      </div>
                      <div className={cx("product_cost_sale_6")}>490,000 đ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list_6")}>
              <div className={cx("column_products_list_wall_6")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={loudspeaker1}
                      style={{
                        borderRadius: "8x",
                        width: "168.33px",
                        height: "168.33px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading_6")}>
                    <h9 className={cx("heading_name-product_6")}>
                      Loa vi tính HAVIT SK202 RGB
                    </h9>
                    <div className={cx("product_cost_6")}>
                      <div className={cx("product_cost_initial_6")}>
                        390,000 đ
                      </div>
                      <div className={cx("product_cost_sale_6")}>290,000 đ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list_6")}>
              <div className={cx("column_products_list_wall_6")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={mouse1}
                      style={{
                        borderRadius: "8x",
                        width: "168.33px",
                        height: "168.33px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading_6")}>
                    <h9 className={cx("heading_name-product_6")}>
                      Chuột gaming Asus ROG Keris Wireless
                    </h9>
                    <div className={cx("product_cost_6")}>
                      <div className={cx("product_cost_initial_6")}>
                        1,990,000 đ
                      </div>
                      <div className={cx("product_cost_sale_6")}>
                        1,590,000 đ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list_6")}>
              <div className={cx("column_products_list_wall_6")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={mouse2}
                      style={{
                        borderRadius: "8x",
                        width: "168.33px",
                        height: "168.33px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading_6")}>
                    <h9 className={cx("heading_name-product_6")}>
                      Chuột HyperX Pulsefire Haste Wireless
                    </h9>
                    <div className={cx("product_cost_6")}>
                      <div className={cx("product_cost_initial_6")}>
                        1,990,000 đ
                      </div>
                      <div className={cx("product_cost_sale_6")}>
                        1,690,000 đ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list_6")}>
              <div className={cx("column_products_list_wall_6")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={mouse3}
                      style={{
                        borderRadius: "8x",
                        width: "168.33px",
                        height: "168.33px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading_6")}>
                    <h9 className={cx("heading_name-product_6")}>
                      Chuột Logitech G102 Lightsync RGB
                    </h9>
                    <div className={cx("product_cost_6")}>
                      <div className={cx("product_cost_initial_6")}>
                        490,000 đ
                      </div>
                      <div className={cx("product_cost_sale_6")}>390,000 đ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list_6")}>
              <div className={cx("column_products_list_wall_6")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={mouse4}
                      style={{
                        borderRadius: "8x",
                        width: "168.33px",
                        height: "168.33px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading_6")}>
                    <h9 className={cx("heading_name-product_6")}>
                      Chuột Razer DeathAdder Essential
                    </h9>
                    <div className={cx("product_cost_6")}>
                      <div className={cx("product_cost_initial_6")}>
                        1,190,000 đ
                      </div>
                      <div className={cx("product_cost_sale_6")}>490,000 đ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list_6")}>
              <div className={cx("column_products_list_wall_6")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={mouse5}
                      style={{
                        borderRadius: "8x",
                        width: "168.33px",
                        height: "168.33px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading_6")}>
                    <h9 className={cx("heading_name-product_6")}>
                      Chuột Havit Model MS1026
                    </h9>
                    <div className={cx("product_cost_6")}>
                      <div className={cx("product_cost_initial_6")}>
                        390,000 đ
                      </div>
                      <div className={cx("product_cost_sale_6")}>150,000 đ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("column_products_list_6")}>
              <div className={cx("column_products_list_wall_6")}>
                <div className={cx("column_product_item")}>
                  <div className={cx("item_img")}>
                    <img
                      src={mouse6}
                      style={{
                        borderRadius: "8x",
                        width: "168.33px",
                        height: "168.33px",
                      }}
                    />
                  </div>
                </div>
                <div className={cx("column_product_content")}>
                  <div className={cx("product_content_heading_6")}>
                    <h9 className={cx("heading_name-product_6")}>
                      Chuột gaming Asus TUF M3
                    </h9>
                    <div className={cx("product_cost_6")}>
                      <div className={cx("product_cost_initial_6")}>
                        550,000 đ
                      </div>
                      <div className={cx("product_cost_sale_6")}>390,000 đ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("view_all_product")}>
            <button onClick={ViewAll} className={cx("view_all_laptop")}>
              <FontAwesomeIcon icon={faEye} />
              <h11 className={cx("btn_view")}>Xem tất cả</h11>
              <FontAwesomeIcon icon={faAnglesRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
