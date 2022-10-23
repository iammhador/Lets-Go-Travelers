import React from "react";
import { Link } from "react-router-dom";
import france from "../Assets/france.jpg";
import switzerland from "../Assets/swizerland.jpg";
import turkey from "../Assets/turkey.jpg";
import italy from "../Assets/italy.jpg";
import { getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.init";
const Home = () => {
  const auth = getAuth(app);
  console.log(auth);
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Let's Go Traveler's
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="9a29985a-fc16-419b-ae53-1670f5ca4491"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#9a29985a-fc16-419b-ae53-1670f5ca4491)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Travel Makes Us Feel Alive</span>
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Travel is the movement of people between distant geographical
            locations. Travel can be done by foot, bicycle, automobile, train,
            boat, bus, airplane, ship or other means, with or without luggage,
            and can be one way or round trip.
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
          <Link to="/booking">
            <img
              className="object-cover w-full h-56 rounded shadow-lg"
              src={france}
              alt="France"
            />
          </Link>

          <Link to="/booking">
            <img
              src={switzerland}
              className="object-cover w-full h-56 rounded shadow-lg"
              alt="switzerland"
            />
          </Link>

          <Link to="/booking">
            <img
              className="object-cover w-full h-56 rounded shadow-lg"
              src={turkey}
              alt="Turkey"
            />
          </Link>
          <Link to="/booking">
            <img
              className="object-cover w-full h-56 rounded shadow-lg"
              src={italy}
              alt="Italy"
            />
          </Link>
        </div>
        <div className="flex items-center sm:justify-center">
          <Link
            to="/register"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:bg-indigo-900"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:bg-indigo-900"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
