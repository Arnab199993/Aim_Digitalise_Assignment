import { lazy } from "react";
import PagePath from "./PagePath";
const AllPath = () => {
  const HotelDetails = lazy(
    () => import("../../Page/HotelDetails/HotelDetails")
  );
  const DashBoard = lazy(() => import("../../Page/DashBoard/DashBoard"));
  const rootPath: PagePath[] = [];
  rootPath.push(new PagePath("HotelDetails", "/hotelDetails", HotelDetails));
  rootPath.push(new PagePath("DashBoard", "/DashBoard", DashBoard));

  const newList: PagePath[] = rootPath;
  return newList;
};

export default AllPath;
