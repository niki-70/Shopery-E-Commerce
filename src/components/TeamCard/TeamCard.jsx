import a80883dc1ed057e28b4f1bee4e87ed572c7cf693 from "../../assets/Images/Teams/a80883dc1ed057e28b4f1bee4e87ed572c7cf693.jpg";
import Vector from "../../assets/Images/icons/Vector.png";
import Vector1 from "../../assets/Images/icons/Vector (1).png";
import Vector2 from "../../assets/Images/icons/Vector (2).png";
import Vector3 from "../../assets/Images/icons/Vector (3).png";
 function TeamCard() {
  return (
    <div className="group mt-7 bg-white w-max rounded border border-white overflow-hidden">

      <div className="relative w-80 h-72">

        <img
          src={a80883dc1ed057e28b4f1bee4e87ed572c7cf693}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30 opacity-0 
                        group-hover:opacity-100
                        transition-opacity duration-300
                        flex items-center justify-center">
          <div className="flex gap-2">

            <div className="w-10 h-10 grid place-items-center rounded-full cursor-pointer hover:bg-green-500 transition">
              <img src={Vector} alt="" />
            </div>

            <div className="w-10 h-10 grid place-items-center rounded-full cursor-pointer hover:bg-green-500 transition">
              <img src={Vector1} alt="" />
            </div>

            <div className="w-10 h-10 grid place-items-center rounded-full cursor-pointer hover:bg-green-500 transition">
              <img src={Vector2} alt="" />
            </div>

            <div className="w-10 h-10 grid place-items-center rounded-full cursor-pointer hover:bg-green-500 transition">
              <img src={Vector3} alt="" />
            </div>

          </div>
        </div>
      </div>

      <div className="my-5 ml-5">
        <h2 className="mb-1">Jenny Wilson</h2>
        <p className="text-gray-500">Ceo & Founder</p>
      </div>
    </div>
  );
}

export default TeamCard;