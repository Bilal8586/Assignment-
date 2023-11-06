import React, { useState } from "react";

const PostalCodeInput = ({ setPostalCode, setCountry }) => {
  const [inputData, setInputData] = useState(null);
  const options = [
    "AD",
    "AR",
    "AS",
    "AT",
    "AU",
    "BD",
    "BE",
    "BG",
    "BR",
    "CA",
    "CH",
    "CZ",
    "DO",
    "DK",
    "DE",
    "ES",
    "FI",
    "FR",
    "FO",
    "GP",
    "GT",
    "GG",
    "GL",
    "GF",
    "GB",
    "GU",
    "GY",
    "HR",
    "HU",
    "IM",
    "IN",
    "IS",
    "IT",
    "JE",
    "JP",
    "LU",
    "LT",
    "LK",
    "LI",
    "MY",
    "MX",
    "MQ",
    "MP",
    "MK",
    "MH",
    "MD",
    "MC",
    "NZ",
    "NO",
    "NL",
    "TR",
    "PH",
    "PL",
    "PT",
    "PK",
    "PM",
    "PR",
    "US",
    "TH",
    "VA",
    "SM",
    "SK",
    "SJ",
    "RU",
    "RE",
    "SE",
    "SI",
    "VI",
    "YT",
    "ZA",
  ];


  return (
    <>
      <select
        onChange={(e)=>setCountry(e.target.value)}
        className="bg-blue-600 mx-4 text-white outline-none"
      >
        <option>Country</option>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>

      <input
        className=" border-blue-700 border-2 "
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Enter Postal Code"
      />
      <button
        className="border-2 border-blue-600 mx-4 bg-blue-600 hover:text-black text-white"
        onClick={() => setPostalCode(inputData)}
      >
        Search
      </button>
    </>
  );
};

export default PostalCodeInput;
