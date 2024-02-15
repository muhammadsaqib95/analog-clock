import minuteNeedle from "../assets/minute-needle.png";
import hourNeedle from "../assets/hour-needle.png";
import dial from "../assets/dial.png";

export default function AnalogClock() {
  const minutes = new Date().getMinutes();
  const hours = new Date().getHours() % 12 || 12;
  const seconds = new Date().getSeconds();
  // 1 hour equal to 30 deg angle
  // 1 min = 6 deg
  // 1 sec = 0.1 deg
  console.log(hours, minutes, seconds);

  setInterval(function () {
    var date = new Date();
    let positions = {
      hours: date.getHours() / 24,
      minutes: date.getMinutes() / 60,
    };
    for (const key in positions) {
      document.getElementById(key).style.transform =
        "rotate(" + positions[key] + "turn)";
    }
  }, 1000);
  return (
    <>
      <div className=" clock w-28 h-28 rounded-full shadow-md border border-gray-100 flex items-center justify-center relative">
        <img
          src={dial}
          alt="Dial png"
          className="absolute top-[6px] left-[5px]"
        />
        <div className="relative h-[100px] w-[2px]">
          <div
            id="hours"
            className=" w-[2px] h-[35px] absolute bottom-1/2 z-[2] origin-bottom bg-gray-400"
          />
          <div
            id="minutes"
            className="w-[4px] h-[45px] absolute bottom-1/2 z-[1] origin-bottom bg-gray-800"
          />
        </div>
      </div>
    </>
  );
}
