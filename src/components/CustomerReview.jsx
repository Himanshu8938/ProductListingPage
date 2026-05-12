import { ChevronRight, Star, StarHalf } from "lucide-react";
import React from "react";
import cr1 from "../assets/cr1.png";
import cr2 from "../assets/cr2.jpg";
import cr3 from "../assets/cr3.png";

const CustomerReview = () => {
  return (
    <section className="text-white mx-5">
      <h1 className="flex justify-center text-4xl">Customer Review</h1>
      <div className="grid md:grid-cols-3 gap-15 mt-15">
        <div className="text-white w-80 bg-white/5 rounded-2xl px-4 py-3">
          <div className="flex items-center gap-2">
            <img
              src={cr1}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="mx-2">
              <h1 className="text-xl">Shelly Russel</h1>
              <span className="flex gap-1.5">
                <Star fill="yellow" strokeWidth={0} size={10} />
                <Star fill="yellow" strokeWidth={0} size={10} />
                <Star fill="yellow" strokeWidth={0} size={10} />
                <Star fill="yellow" strokeWidth={0} size={10} />
                <StarHalf fill="yellow" strokeWidth={0} size={10} />
              </span>
            </div>
          </div>
          <p className="my-6 font-extralight mx-2">
            Just got my hands on some absolutely awesome plants, and I couldn’t
            be happier!
          </p>
        </div>
        <div className="text-white w-80 bg-white/5 rounded-2xl px-4 py-3">
          <div className="flex items-center gap-2">
            <img
              src={cr2}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="mx-4">
              <h1 className="text-xl">Lula Rolfson</h1>
              <span className="flex gap-1.5">
                <Star fill="yellow" strokeWidth={0} size={10} />
                <Star fill="yellow" strokeWidth={0} size={10} />
                <Star fill="yellow" strokeWidth={0} size={10} />
                <Star fill="yellow" strokeWidth={0} size={10} />
                <StarHalf fill="yellow" strokeWidth={0} size={10} />
              </span>
            </div>
          </div>
          <p className="my-6 font-extralight mx-2">
            Each one has its own unique charm and personality, and they’ve
            already started brightening up my space. The vibrant colors and
            fresh greenery make such a huge difference in my home.
          </p>
        </div>
        <div className="text-white w-80 bg-white/5 rounded-2xl px-4 py-3">
          <div className="flex items-center gap-2">
            <img
              src={cr3}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="mx-2">
              <h1 className="text-xl">Carol Huels</h1>
              <span className="flex gap-1.5">
                <Star fill="yellow" strokeWidth={0} size={10} />
                <Star fill="yellow" strokeWidth={0} size={10} />
                <Star fill="yellow" strokeWidth={0} size={10} />
                <Star fill="yellow" strokeWidth={0} size={10} />
                <StarHalf fill="yellow" strokeWidth={0} size={10} />
              </span>
            </div>
          </div>
          <p className="my-6 font-extralight mx-2">
            It's like bringing a little piece of nature indoors. Definitely
            worth the investment—my plant collection has never looked better!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
