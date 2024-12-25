import Card from "../../Control/Components/Card/Card";
import CardBody from "../../Control/Components/Card/CardBody";
import CardHeader from "../../Control/Components/Card/CardHeader";
import HotelLook from "../../../src/Backbone/Assests/HotelLook.jpg";
import Divider from "../../Control/Components/Divider/Divider";
import CardFooter from "../../Control/Components/Card/CardFooter";
import PrimaryBtn from "../../Control/Components/Button/PrimaryBtn";
import wifi from "../../Backbone/Assests/wifi.png";
import breakfast from "../../Backbone/Assests/breakfast.png";
import standDardRoom from "../../Backbone/Assests/room.png";
import suite from "../../Backbone/Assests/suite.png";
import pool from "../../Backbone/Assests/swimming.png";
import hotel from "../../Backbone/Assests/hotel.png";

const HotelDetails = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-gradient-to-r from-[#a5b9be] to-[#7d8f97]">
      <Card className="p-4">
        <header>
          <CardHeader title="Bookings" leftImage={hotel} rightImage={hotel} />
        </header>
        <main>
          <CardBody>
            <div className="relative">
              <img
                src={HotelLook}
                alt="Hotel"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-1 left-12 text-white text-sm font-bold">
                <p>Your Perfect Stay, Just a Click Away!</p>
              </div>
            </div>
            <div className="flex items-stretch">
              <div className="p-4">
                <div className="font-bold mb-2">Basic</div>
                <ul className="list-none text-gray-700">
                  <li className="flex items-center mb-2">
                    <img src={wifi} alt="Wi-Fi" className="w-5 h-5 mr-2" />
                    Free Wi-Fi
                  </li>
                  <li className="flex items-center mb-2">
                    <img
                      src={breakfast}
                      alt="Breakfast"
                      className="w-5 h-5 mr-2"
                    />
                    Complimentary Breakfast
                  </li>
                  <li className="flex items-center mb-2">
                    <img
                      src={standDardRoom}
                      alt="Standard Room"
                      className="w-5 h-5 mr-2"
                    />
                    Standard Room
                  </li>
                </ul>
              </div>
              <Divider />
              <div className="p-4">
                <div className="font-bold mb-2">Premium</div>
                <ul className="list-none text-gray-700">
                  <li className="flex items-center mb-2">
                    <img src={wifi} alt="Wi-Fi" className="w-5 h-5 mr-2" />
                    Free Wi-Fi
                  </li>
                  <li className="flex items-center mb-2">
                    <img
                      src={breakfast}
                      alt="Breakfast"
                      className="w-5 h-5 mr-2"
                    />
                    Complimentary Breakfast
                  </li>
                  <li className="flex items-center mb-2">
                    <img
                      src={suite}
                      alt="Suite Room"
                      className="w-5 h-5 mr-2"
                    />
                    Suite Room
                  </li>
                  <li className="flex items-center mb-2">
                    <img src={pool} alt="Pool & Gym" className="w-5 h-5 mr-2" />
                    Access to Pool & Gym
                  </li>
                </ul>
              </div>
            </div>
          </CardBody>
          <footer>
            <CardFooter>
              <div className="flex justify-between">
                <PrimaryBtn>Sign Up</PrimaryBtn>
                <PrimaryBtn>Login</PrimaryBtn>
              </div>
            </CardFooter>
          </footer>
        </main>
      </Card>
    </div>
  );
};

export default HotelDetails;
