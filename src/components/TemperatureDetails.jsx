import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { GiSunset, GiSunrise } from "react-icons/gi";
import { FiWind } from "react-icons/fi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import Cloud_Sun_Icon from "../assets/cloud-sun-icon.png";

const TemperatureDetails = () => {
  const VerticalDetails = [
    {
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: "25°",
    },
    {
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: "34%",
    },
    {
      Icon: FiWind,
      title: "Wind",
      value: "11 Km/h",
    },
  ];

  const HorizontalDetails = [
    {
      Icon: GiSunrise,
      title: "Sunrise",
      value: "04:50 AM",
    },
    {
      Icon: GiSunset,
      title: "Sunset",
      value: "06:50 PM",
    },
    {
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: "39°",
    },
    {
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: "15°",
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-center py-6 text-cyan-300 text-xl">
        <p>Rain</p>
      </div>
      <div className="flex items-center justify-between py-3 flex-row">
        <img src={Cloud_Sun_Icon} alt="Cloud-sun-icon" className="size-10" />
        <p className="text-5xl">34°</p>
        <div className="flex flex-col space-y-3 items-start">
          {
            VerticalDetails.map(({index, Icon, value, title} )=> (
              <div key={index} className="flex font-light justify-center items-center text-sm">
              <Icon className="mr-1" size={20} />
              {`${title}:`} <span className="font-medium ml-1">{value}</span>
            </div>
            ))
          }
         
        </div>
      </div>

      <div className="flex flex-row justify-center items-center space-x-10 text-sm py-3">
        {
          HorizontalDetails.map(({index, Icon, value, title})=> (
            <div key={index} className="flex flex-row items-center">
              <Icon size={30} /> 
              <p className="font-light ml-1">{`${title}:`} <span className="font-medium ml-1">{value}</span></p>
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default TemperatureDetails;
