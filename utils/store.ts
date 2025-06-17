import { create } from "zustand";
import { Booking } from "./types";
import { DateRange } from "react-day-picker";

//define state's shape

type PropertyState = {
  propertyId: string;
  price: number;
  bookings: Booking[];
  range: DateRange | undefined;
};

//Create store

export const useProperty = create<PropertyState>(() => {
  return {
    propertyId: "",
    price: 0,
    bookings: [],
    range: undefined,
  };
});
