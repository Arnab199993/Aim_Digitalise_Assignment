import { lazy } from "react";
import PagePath from "./PagePath";
import BookedRoomDetails from "../../Page/BookedRoomDetails/BookedRoomDetails";
const AllPath = () => {
  const HotelDetails = lazy(
    () => import("../../Page/HotelDetails/HotelDetails")
  );
  const DashBoard = lazy(() => import("../../Page/DashBoard/DashBoard"));
  const rootPath: PagePath[] = [];
  rootPath.push(
    new PagePath("HotelDetails", "/hotelDetails", HotelDetails, false, false)
  );
  rootPath.push(new PagePath("DashBoard", "/DashBoard", DashBoard, true, true));
  rootPath.push(
    new PagePath("BookedRoom", "/BookedRoom", BookedRoomDetails, true, true)
  );

  const newList: PagePath[] = rootPath;
  return newList;
};

export default AllPath;
