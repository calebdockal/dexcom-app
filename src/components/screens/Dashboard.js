import React, { useState, useEffect } from "react";
import getCurrentTime from "../../helpers/getTime";

// Going to try different visualization methods here
function Dashboard(data) {
  const [deviceInfo, setDeviceInfo] = useState("");
  const [time, setTime] = useState("");
  const [bgData, setBgData] = useState([]);

  useEffect(() => {
    setTime(getCurrentTime());
    console.log(data.data);
    setBgData(data);
  }, []);
  return (
    <div>
      <p>Time is: {time}</p>
    </div>
  );
}

export default Dashboard;
