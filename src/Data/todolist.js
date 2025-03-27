import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";

const todoData = [
  {
    id: 1,
    checked: false, // Checkbox default state
    icon: <FaPhoneAlt className="text-blue-500" />,
    task: "Call for Demo schedule",
    priority: "High",
    dueDate: "1 Dec, 2022, 12:30PM",
    associated: {
      name: "Kuenang Sherub",
      icon: <FaUserCircle className="text-blue-400" />,
    },
    assigned: {
      name: "Karan S",
      icon: <FaUserCheck className="text-green-500" />,
    },
  },
  {
    id: 2,
    checked: false,
    icon: <MdEmail className="text-yellow-500" />,
    task: "Email to be sent to all the members",
    priority: "Medium",
    dueDate: "1 Dec, 2022, 12:30PM",
    associated: {
      name: "Gopichand",
      icon: <FaUserCircle className="text-teal-400" />,
    },
    assigned: {
      name: "Gopichand",
      icon: <FaUserCheck className="text-green-500" />,
    },
  },
  {
    id: 3,
    checked: false,
    icon: <FaListUl className="text-gray-500" />,
    task: "Email to be sent to all the employees",
    priority: "Low",
    dueDate: "1 Dec, 2022, 12:30PM",
    associated: {
      name: "Aditya",
      icon: <FaUserCircle className="text-red-400" />,
    },
    assigned: {
      name: "Aditya",
      icon: <FaUserCheck className="text-orange-500" />,
    },
  },
];

export default todoData;
