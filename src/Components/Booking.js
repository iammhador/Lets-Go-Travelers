import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 my-20 mx-auto">
        <h1 className="text-2xl font-bold text-center">Booking</h1>
        <form
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label for="origin" className="block dark:text-gray-400">
              Origin
            </label>
            <input
              type="Location"
              name="origin"
              id="origin"
              placeholder="Location"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="destination" className="block dark:text-gray-400">
              Destination
            </label>
            <input
              type="Location"
              name="destination"
              id="destination"
              placeholder="Location"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>

          <div className="flex gap-3">
            <div className="space-y-1 text-sm ">
              <label for="from" className="block dark:text-gray-400">
                From
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                type="text"
                name="from"
                id="from"
                placeholder="Date"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm ">
              <label for="to" className="block dark:text-gray-400">
                To
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                type="text"
                name="to"
                id="to"
                placeholder="Date"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
            Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
