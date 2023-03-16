import Home from "~/Pages/Home";
import Laptop from "~/Pages/Laptop";
import Pc from "~/Pages/Pc";
import Screen from "~/Pages/Screen";
import Accessory from "~/Pages/Accessory";
import Gaming from "~/Pages/Gaming";
import Device from "~/Pages/Device";
import Apple from "~/Pages/Apple";
import More from "~/Pages/More";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/laptop", component: Laptop },
  { path: "/pc", component: Pc },
  { path: "/screen", component: Screen },
  { path: "/accessory", component: Accessory },
  { path: "/gaming", component: Gaming },
  { path: "/device", component: Device },
  { path: "/apple", component: Apple },
  { path: "/more", component: More },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
