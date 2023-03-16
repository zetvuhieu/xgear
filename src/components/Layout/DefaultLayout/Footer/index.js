import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar1 from "~/assets/images/footer/avatar1.png";
import certificate from "~/assets/images/footer/certificate.png";
import { faLocationDot, faMinus } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("footer")}>
      <div className={cx("footer_wall")}>
        <div className={cx("footer_column")}>
          <div className={cx("footer_avatar")}>
            <img
              src={avatar1}
              style={{
                width: "199.3px",
                height: "80.55px",
              }}
            />
          </div>
          <div className={cx("footer_introduce")}>
            <p className={cx("introduce_content")}>
              Được biết đến là đơn vị ủy quyền bán lẻ chính thức tại Việt Nam,
              chuyên kinh doanh các sản phẩm Laptop Gaming cao cấp, PC đồ họa,
              linh-phụ kiện, thiết bị giải trí của nhiều nhãn hàng lớn như Acer,
              Asus, Apple, Dell, HP, Lenovo, MSI, Gigabyte, Razer, HyperX,
              Logitech, Samsung…
            </p>
          </div>
        </div>
        <div className={cx("footer_column")}>
          <div className={cx("footer_info")}>
            <div className={cx("heading_info")}>
              <h12 className={cx("h12")}>Thông tin</h12>
              <ul className={cx("footer_list_info")}>
                <li className={cx("footer_item_info")}>Giới thiệu</li>
                <li className={cx("footer_item_info")}>Shop</li>
                <li className={cx("footer_item_info")}>Xgear News</li>
                <li className={cx("footer_item_info")}>Tuyển dụng</li>
                <li className={cx("footer_item_info")}>
                  Phương thức thanh toán
                </li>
                <li className={cx("footer_item_info")}>Tra cứu vận đơn</li>
              </ul>
            </div>
          </div>
          <div className={cx("time_work")}>
            <h12>Giờ làm việc</h12>
            <div className={cx("info_time")}>
              <div className={cx("time_item_info")}>
                Thứ 2 – Thứ 7 : 9h00 – 20h00
              </div>
              <div className={cx("time_item_info")}>
                Chủ nhật : 9h00 – 19h00
              </div>
            </div>
          </div>
        </div>
        <div className={cx("footer_column")}>
          <div className={cx("footer_policy")}>
            <div className={cx("heading_policy")}>
              <div className={cx("h12")}>Chính sách</div>
              <ul className={cx("footer_list_info")}>
                <li className={cx("footer_item_info")}>Trả góp</li>
                <li className={cx("footer_item_info")}>Giao hàng</li>
                <li className={cx("footer_item_info")}>Đổi trả</li>
                <li className={cx("footer_item_info")}>Bảo hành</li>
                <li className={cx("footer_item_info")}>Bảo mật thông tin</li>
              </ul>
            </div>
          </div>
          <div className={cx("footer_contact")}>
            <div className={cx("h12")}>Liên hệ</div>
            <div className={cx("hotline")}>
              <h12>Hotline: </h12>
              <a className={cx("item_contact")}>028 7108 1881</a>
              <FontAwesomeIcon
                className={cx("item_contact_space")}
                icon={faMinus}
              />
              <a className={cx("item_contact")}>093 373 1881</a>
            </div>
            <div className={cx("hotline_mail")}>
              <h12>Mail: </h12>
              <a className={cx("item_contact")}>sales@thenewxgear.com</a>
            </div>
          </div>
        </div>
        <div className={cx("footer_column")}>
          <div className={cx("footer_policy")}>
            <div className={cx("h12_location")}>Địa chỉ cửa hàng</div>
            <div className={cx("footer_location")}>
              <FontAwesomeIcon icon={faLocationDot} />
              <p className={cx("location_item")}>
                08 Tự Lập, Phường 4, Tân Bình, TP.HCM
              </p>
            </div>
            <div className={cx("footer_location")}>
              <FontAwesomeIcon icon={faLocationDot} />
              <p className={cx("location_item")}>
                08 Tự Lập, Phường 4, Tân Bình, TP.HCM
              </p>
            </div>
          </div>
        </div>
        <div className={cx("footer_column")}>
          <div className={cx("footer_social")}>
            <div className={cx("icon_social")}>
              <FontAwesomeIcon
                className={cx("icon_social_item")}
                icon={faFacebook}
              />
            </div>
            <div className={cx("icon_social")}>
              <FontAwesomeIcon
                className={cx("icon_social_item")}
                icon={faInstagram}
              />
            </div>
            <div className={cx("icon_social")}>
              <FontAwesomeIcon
                className={cx("icon_social_item")}
                icon={faYoutube}
              />
            </div>
          </div>
          <div className={cx("footer_certificate")}>
            <img src={certificate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
