import { atom } from "jotai";

// array of objects for all lights for all areas of the house with their properties (id, name, isOn)
export const currentLights = atom([
  {
    id: 1,
    name: "Kitchen",
    isOn: false,
  },
  {
    id: 2,
    name: "Living Room",
    isOn: false,
  },
  {
    id: 3,
    name: "Bedroom",
    isOn: false,
  },
  {
    id: 4,
    name: "Bathroom",
    isOn: false,
  },
  {
    id: 5,
    name: "Garage",
    isOn: false,
  },
  {
    id: 6,
    name: "Basement",
    isOn: false,
  },
  {
    id: 7,
    name: "Attic",
    isOn: false,
  },
  {
    id: 8,
    name: "Porch",
    isOn: false,
  },
  {
    id: 9,
    name: "Backyard",
    isOn: false,
  },
  {
    id: 10,
    name: "Front Yard",
    isOn: false,
  },
  {
    id: 11,
    name: "Driveway",
    isOn: false,
  },
  {
    id: 12,
    name: "Hallway",
    isOn: false,
  },
]);
