import DefaultPageSetup from "../../Control/Components/DefaultPageSetup/DefaultPageSetup";
import { bookingData } from "./BookingData";

const BookedRoomDetails = () => {
  return (
    <DefaultPageSetup>
      <div className="overflow-x-auto p-4">
        <div className="overflow-hidden rounded-md shadow-lg border border-gray-300">
          <table className="table-auto w-full bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left rounded-tl-md">
                  Room Number
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Guest Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Check-In
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Check-Out
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left rounded-tr-md">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {bookingData.map((booking, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {booking.roomNumber}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {booking.guestName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {booking.checkIn}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {booking.checkOut}
                  </td>
                  <td
                    className={`border border-gray-300 px-4 py-2 ${
                      booking.status === "Booked"
                        ? "text-blue-500"
                        : booking.status === "Checked-In"
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  >
                    {booking.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultPageSetup>
  );
};

export default BookedRoomDetails;
