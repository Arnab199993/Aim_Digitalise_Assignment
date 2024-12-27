export interface bookingData {
  roomNumber: string;
  guestName: string;
  checkIn: string;
  checkOut: string;
  status: string;
}

export const bookingData: bookingData[] = [
  {
    roomNumber: "101",
    guestName: "Arnab Dutta",
    checkIn: "2024-12-20",
    checkOut: "2024-12-25",
    status: "Booked",
  },
  {
    roomNumber: "102",
    guestName: "Animesh Dutta",
    checkIn: "2024-12-22",
    checkOut: "2024-12-26",
    status: "Checked-In",
  },
  {
    roomNumber: "103",
    guestName: "Raghav Chatterjee",
    checkIn: "2024-12-23",
    checkOut: "2024-12-27",
    status: "Checked-Out",
  },
];
