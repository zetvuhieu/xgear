import classNames from "classnames/bind";
import styles from "./Pc.module.scss";
import pc1 from "~/assets/images/pc/1.jpg";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowRight,
  faChevronCircleDown,
  faChevronDown,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Pc() {
  return (
    <div className={cx("laptop")}>
      <div className={cx("laptop_wrap")}>
        <div className={cx("laptop_title")}>Xgear PC</div>
        <div className={cx("laptop_bar")}>
          <button className={cx("laptop_button")}>Mini PC</button>
          <button className={cx("laptop_button")}>Mini PC Asus</button>
          <button className={cx("laptop_button")}>Mini PC Gigabyte</button>
          <button className={cx("laptop_button")}>PC AMD</button>
          <button className={cx("laptop_button")}>PC Gen 13</button>
          <button className={cx("laptop_button")}>PC Intel</button>
          <button className={cx("laptop_button")}>PC Nvidia</button>
          <button className={cx("laptop_button")}>PC Văn phòng</button>
        </div>
        <div className={cx("pages_number")}>
          <div>Hiển thị 1–12 của 54 kết quả</div>
          <div className={cx("arrange_style")}>
            <button className={cx("arrange_button")}>
              <div className={cx("arrange_button_item")}>
                Thứ tự theo mức độ phổ biến
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={cx("arrange_button_icon")}
                />
              </div>
            </button>
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
                    Laptop Asus VivoBook Pro 15 M6500QC-MA002W RTX 3050 4GB
                    Ryzen 5 5600H 16GB 512GB 15.6″ 2.8K 120Hz OLED Win 11 Cool
                    Silver
                  </h9>
                  <div className={cx("product_cost")}>
                    <span className={cx("product_cost_initial")}>
                      27,490,000 đ
                    </span>
                    <span className={cx("product_cost_sale")}>
                      23,290,000 đ
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
                    src={pc1}
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
                    Laptop Asus VivoBook Pro 15 M6500QC-MA002W RTX 3050 4GB
                    Ryzen 5 5600H 16GB 512GB 15.6″ 2.8K 120Hz OLED Win 11 Cool
                    Silver
                  </h9>
                  <div className={cx("product_cost")}>
                    <span className={cx("product_cost_initial")}>
                      27,490,000 đ
                    </span>
                    <span className={cx("product_cost_sale")}>
                      23,290,000 đ
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
                    src={pc1}
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
                    Laptop Asus VivoBook Pro 15 M6500QC-MA002W RTX 3050 4GB
                    Ryzen 5 5600H 16GB 512GB 15.6″ 2.8K 120Hz OLED Win 11 Cool
                    Silver
                  </h9>
                  <div className={cx("product_cost")}>
                    <span className={cx("product_cost_initial")}>
                      27,490,000 đ
                    </span>
                    <span className={cx("product_cost_sale")}>
                      23,290,000 đ
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
                    src={pc1}
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
                    Laptop Asus VivoBook Pro 15 M6500QC-MA002W RTX 3050 4GB
                    Ryzen 5 5600H 16GB 512GB 15.6″ 2.8K 120Hz OLED Win 11 Cool
                    Silver
                  </h9>
                  <div className={cx("product_cost")}>
                    <span className={cx("product_cost_initial")}>
                      27,490,000 đ
                    </span>
                    <span className={cx("product_cost_sale")}>
                      23,290,000 đ
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
                    src={pc1}
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
                    Laptop Asus VivoBook Pro 15 M6500QC-MA002W RTX 3050 4GB
                    Ryzen 5 5600H 16GB 512GB 15.6″ 2.8K 120Hz OLED Win 11 Cool
                    Silver
                  </h9>
                  <div className={cx("product_cost")}>
                    <span className={cx("product_cost_initial")}>
                      27,490,000 đ
                    </span>
                    <span className={cx("product_cost_sale")}>
                      23,290,000 đ
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
                    src={pc1}
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
                    Laptop Asus VivoBook Pro 15 M6500QC-MA002W RTX 3050 4GB
                    Ryzen 5 5600H 16GB 512GB 15.6″ 2.8K 120Hz OLED Win 11 Cool
                    Silver
                  </h9>
                  <div className={cx("product_cost")}>
                    <span className={cx("product_cost_initial")}>
                      27,490,000 đ
                    </span>
                    <span className={cx("product_cost_sale")}>
                      23,290,000 đ
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
                    src={pc1}
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
                    Laptop Asus VivoBook Pro 15 M6500QC-MA002W RTX 3050 4GB
                    Ryzen 5 5600H 16GB 512GB 15.6″ 2.8K 120Hz OLED Win 11 Cool
                    Silver
                  </h9>
                  <div className={cx("product_cost")}>
                    <span className={cx("product_cost_initial")}>
                      27,490,000 đ
                    </span>
                    <span className={cx("product_cost_sale")}>
                      23,290,000 đ
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
                    src={pc1}
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
                    Laptop Asus VivoBook Pro 15 M6500QC-MA002W RTX 3050 4GB
                    Ryzen 5 5600H 16GB 512GB 15.6″ 2.8K 120Hz OLED Win 11 Cool
                    Silver
                  </h9>
                  <div className={cx("product_cost")}>
                    <span className={cx("product_cost_initial")}>
                      27,490,000 đ
                    </span>
                    <span className={cx("product_cost_sale")}>
                      23,290,000 đ
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
                    src={pc1}
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
                    Laptop Asus VivoBook Pro 15 M6500QC-MA002W RTX 3050 4GB
                    Ryzen 5 5600H 16GB 512GB 15.6″ 2.8K 120Hz OLED Win 11 Cool
                    Silver
                  </h9>
                  <div className={cx("product_cost")}>
                    <span className={cx("product_cost_initial")}>
                      27,490,000 đ
                    </span>
                    <span className={cx("product_cost_sale")}>
                      23,290,000 đ
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
                    src={pc1}
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
                    Laptop Asus VivoBook Pro 15 M6500QC-MA002W RTX 3050 4GB
                    Ryzen 5 5600H 16GB 512GB 15.6″ 2.8K 120Hz OLED Win 11 Cool
                    Silver
                  </h9>
                  <div className={cx("product_cost")}>
                    <span className={cx("product_cost_initial")}>
                      27,490,000 đ
                    </span>
                    <span className={cx("product_cost_sale")}>
                      23,290,000 đ
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
                    src={pc1}
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
                    Laptop Asus VivoBook Pro 15 M6500QC-MA002W RTX 3050 4GB
                    Ryzen 5 5600H 16GB 512GB 15.6″ 2.8K 120Hz OLED Win 11 Cool
                    Silver
                  </h9>
                  <div className={cx("product_cost")}>
                    <span className={cx("product_cost_initial")}>
                      27,490,000 đ
                    </span>
                    <span className={cx("product_cost_sale")}>
                      23,290,000 đ
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
                    src={pc1}
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
                    Laptop Asus VivoBook Pro 15 M6500QC-MA002W RTX 3050 4GB
                    Ryzen 5 5600H 16GB 512GB 15.6″ 2.8K 120Hz OLED Win 11 Cool
                    Silver
                  </h9>
                  <div className={cx("product_cost")}>
                    <span className={cx("product_cost_initial")}>
                      27,490,000 đ
                    </span>
                    <span className={cx("product_cost_sale")}>
                      23,290,000 đ
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
        </div>
        <div className={cx("view_all_product")}>
          <a className={cx("view_all_laptop")}>1</a>
          <a className={cx("view_all_laptop")}>2</a>
          <a className={cx("view_all_laptop")}>3</a>
          <a className={cx("view_all_laptop")}>4</a>
          <a className={cx("view_all_laptop")}>5</a>
          <a className={cx("view_all_laptop")}>6</a>
          <a className={cx("view_all_laptop")}>7</a>
          <a className={cx("view_all_laptop")}>8</a>
          <a className={cx("view_all_laptop")}>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pc;
