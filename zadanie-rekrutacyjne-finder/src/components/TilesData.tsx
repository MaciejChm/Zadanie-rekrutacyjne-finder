import {
  FaRegCreditCard,
  FaHouseChimney,
  FaServer,
  FaHeartPulse,
  FaCar,
  FaBuildingColumns,
  FaBolt,
  FaMoneyBill,
  FaMobileScreenButton,
  FaStar,
  FaChartLine,
  FaUmbrella,
  FaPlaneUp,
  FaCalendarDays,
  FaBitcoin,
  FaPaw,
  FaDollarSign,
  FaEarthAmericas,
  FaBagShopping,
  FaTv,
  FaRegHourglassHalf,
} from "react-icons/fa6";

// ^ importuję ikony SVG

// v moja "baza danych" co zawiera każdy kafelek

const tilesData = [
  {
    title: "Credit Cards",
    url: "https://www.finder.com.au/",
    icon: <FaRegCreditCard style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Home Loans",
    url: "https://www.finder.com.au/",
    icon: <FaHouseChimney style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Health Insurance",
    url: "https://www.finder.com.au/",
    icon: <FaHeartPulse style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Car Insurance",
    url: "https://www.finder.com.au/",
    icon: <FaCar style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "High-Interest Savings",
    url: "https://www.finder.com.au/",
    icon: <FaBuildingColumns style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Electricity & Gas",
    url: "https://www.finder.com.au/",
    icon: <FaBolt style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Personal Loans",
    url: "https://www.finder.com.au/",
    icon: <FaMoneyBill style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Mobile Plans",
    url: "https://www.finder.com.au/",
    icon: <FaMobileScreenButton style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Broadband & NBN",
    url: "https://www.finder.com.au/",
    icon: <FaServer style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Super Funds",
    url: "https://www.finder.com.au/",
    icon: <FaStar style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Share Trading",
    url: "https://www.finder.com.au/",
    icon: <FaChartLine style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Life Insurance",
    url: "https://www.finder.com.au/",
    icon: <FaUmbrella style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Home Insurance",
    url: "https://www.finder.com.au/",
    icon: <FaHouseChimney style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Travel Insurance",
    url: "https://www.finder.com.au/",
    icon: <FaPlaneUp style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Travel Deals",
    url: "https://www.finder.com.au/",
    icon: <FaCalendarDays style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Crypto",
    url: "https://www.finder.com.au/",
    icon: <FaBitcoin style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Car Loans",
    url: "https://www.finder.com.au/",
    icon: <FaCar style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Pet Insurance",
    url: "https://www.finder.com.au/",
    icon: <FaPaw style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Transaction Accounts",
    url: "https://www.finder.com.au/",
    icon: <FaDollarSign style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Money Transfers",
    url: "https://www.finder.com.au/",
    icon: <FaEarthAmericas style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Shopping Deals",
    url: "https://www.finder.com.au/",
    icon: <FaBagShopping style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Streaming",
    url: "https://www.finder.com.au/",
    icon: <FaTv style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Business Insurance",
    url: "https://www.finder.com.au/",
    icon: <FaMoneyBill style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Short Term Loans",
    url: "https://www.finder.com.au/",
    icon: <FaRegHourglassHalf style={{ width: "40px", height: "40px" }} />,
  },
];

export default tilesData;
