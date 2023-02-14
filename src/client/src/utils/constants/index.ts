import PowerIcon from "@mui/icons-material/Power";
import WcIcon from "@mui/icons-material/Wc";
import WifiIcon from "@mui/icons-material/Wifi";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CompassCalibrationIcon from "@mui/icons-material/CompassCalibration";
import SensorsIcon from "@mui/icons-material/Sensors";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import { IServices } from "../../types";

export const FOOTER_HEIGHT = 30;
export const HEADER_HEIGHT = 60;
export const DRAWER_WIDTH = 250;

// APP TEXT
export const APP_TITLE =
  "Warehouse, Best website to find your most suitable storage unit or renting it";
export const FOOTER_TEXT = `${new Date().getFullYear()} Proudly developed by Mohamed Salem`;

export const GOVERNORATES = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

export const LOCATIONS = [
  "6 October",
  "Enugu",
  "Asaba",
  "Onitsha",
  "Owerri",
  "Portharcourt",
  "Yaba",
  "Apapa",
  "Banana island",
  "Sabo Kaduna",
  "Wukari",
  "Jalingo",
  "Wuse 1",
  "Wuse 2",
  "Area5 1",
  "Area 1",
  "Area 2",
  "Area 3",
  "Area 4",
  "Barnawa",
  "Kaduna",
];

export const services: Array<IServices<typeof WifiIcon>> = [
  {
    label: "Power",
    Icon: PowerIcon,
  },
  {
    label: "Bathroom",
    Icon: WcIcon,
  },
  {
    label: "Thermostat",
    Icon: AcUnitIcon,
  },
  {
    label: "RFID",
    Icon: CompassCalibrationIcon,
  },
  {
    label: "Networked",
    Icon: SensorsIcon,
  },
  {
    label: "Alarm",
    Icon: UpcomingIcon,
  },
];
