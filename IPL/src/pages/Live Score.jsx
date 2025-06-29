import React, { useState, useEffect } from "react";
import { FaRunning } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import { GiCricketBat } from "react-icons/gi";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { IoIosRefresh } from "react-icons/io";

import { GrStatusGood } from "react-icons/gr";
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="loader"> <svg role="img" aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all parts rotate and merge into 3:00" class="smiley" viewBox="0 0 128 128" width="128px" height="128px">
<defs>
<clipPath id="smiley-eyes">
<circle class="smiley__eye1" cx="64" cy="64" r="8" transform="rotate(-40,64,64) translate(0,-56)" />
<circle class="smiley__eye2" cx="64" cy="64" r="8" transform="rotate(40,64,64) translate(0,-56)" />
</clipPath>
<linearGradient id="smiley-grad" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stop-color="#000" />
<stop offset="100%" stop-color="#fff" />
</linearGradient>
<mask id="smiley-mask">
<rect x="0" y="0" width="128" height="128" fill="url(#smiley-grad)" />
</mask>
</defs>
<g stroke-linecap="round" stroke-width="12" stroke-dasharray="175.93 351.86">
<g>
<rect fill="hsl(193,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
<g fill="none" stroke="hsl(193,90%,50%)">
    <circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
    <circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
</g>
</g>
<g mask="url(#smiley-mask)">
<rect fill="hsl(223,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
<g fill="none" stroke="hsl(223,90%,50%)">
    <circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
    <circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
</g>
</g>
</g>
</svg></div>
</div>
  )
}
//sample API response
const dataSample = [
  {
    "id": "043bb613-d8ee-4287-9ccb-a298a0f9c389",
    "dateTimeGMT": "2025-06-03T14:00:00",
    "matchType": "t20",
    "status": "Punjab Kings opt to bowl",
    "series": "Indian Premier League 2025",
    "venue": "Narendra Modi Stadium, Ahmedabad 03 Jun 2025 7:30 pm IST",
    "result": "Royal Challengers Bengaluru Won by 6 Runs (Winners)",
    "ms": "live",
    "t1": "Royal Challengers Bengaluru [RCB]",
    "t2": "Punjab Kings [PBKS]",
    "t1s": "190/9 (20)",
    "t2s": "184/7 (20)",
    "t1img": "https://g.cricapi.com/iapi/135-637852956181378533.png?w=48",
    "t2img": "https://g.cricapi.com/iapi/21439-638468478038395955.jpg?w=48",
  }
]
const LiveScore = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const teamCaptains = {
    "Chennai Super Kings [CSK]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png",
    "Royal Challengers Bengaluru [RCB]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2025/597.png",
    "Mumbai Indians [MI]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/54.png",
    "Rajasthan Royals [RR]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/190.png",
    "Sunrisers Hyderabad [SRH]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/33.png",
    "Kolkata Knight Riders [KKR]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/12.png",
    "Lucknow Super Giants [LSG]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/19.png",
    "Gujarat Titans [GT]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/62.png",
    "Delhi Capitals [DC]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/18.png",
    "Punjab Kings [PBKS]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2025/12.png",
  };

  const teamLogos = {
    "Chennai Super Kings [CSK]":
      "https://scores.iplt20.com/ipl/teamlogos/CSK.png",
    "Royal Challengers Bengaluru [RCB]":
      "https://scores.iplt20.com/ipl/teamlogos/aFPMviEPyJ1710927747rcb.png",
    "Mumbai Indians [MI]": "https://scores.iplt20.com/ipl/teamlogos/MI.png",
    "Rajasthan Royals [RR]": "https://scores.iplt20.com/ipl/teamlogos/RR.png",
    "Sunrisers Hyderabad [SRH]":
      "https://scores.iplt20.com/ipl/teamlogos/SRH.png",
    "Kolkata Knight Riders [KKR]":
      "https://scores.iplt20.com/ipl/teamlogos/KKR.png",
    "Lucknow Super Giants [LSG]":
      "https://scores.iplt20.com/ipl/teamlogos/gPLvfvSC1X1711457972LSG.png",
    "Gujarat Titans [GT]": "https://scores.iplt20.com/ipl/teamlogos/GT.png",
    "Delhi Capitals [DC]": "https://scores.iplt20.com/ipl/teamlogos/DC.png",
    "Punjab Kings [PBKS]": "https://scores.iplt20.com/ipl/teamlogos/PBKS.png",
  };

  // useEffect(() => {
  //   const fetchLiveScore = async () => {
  //     try {
  //       const response = await fetch("/api/livescore");
  //       const data = await response.json();
  //       setMatches(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching live score:", error);
  //     }
  //   };

  //   fetchLiveScore();
  // }, []);
  useEffect(() => {
    const fetchLiveScore = async () => {
      try {
     
        setMatches(dataSample);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching live score:", error);
      }
    };

    fetchLiveScore();
  }, []);

  const calculateRunRate = (scoreString) => {
    const [runsString, oversString] = scoreString.split("/");
    const runsScored = parseInt(runsString);

    let oversPlayed;

    if (oversString.includes("(")) {
      const match = oversString.match(/\((\d+(\.\d+)?)\)/);
      oversPlayed = match ? parseFloat(match[1]) : NaN;
    } else {
      oversPlayed = parseFloat(oversString);
    }

    if (isNaN(oversPlayed) || oversPlayed === 0 || isNaN(runsScored)) {
      return "N/A";
    }
    const runRate = runsScored / oversPlayed;
    return runRate.toFixed(2);
  };

  const calculateStrikeRate = (scoreString) => {
    const [runsString, oversString] = scoreString.split("/");
    const runsScored = parseInt(runsString);

    let oversPlayed;

    if (oversString.includes("(")) {
      const match = oversString.match(/\((\d+(\.\d+)?)\)/);
      oversPlayed = match ? parseFloat(match[1]) : NaN;
    } else {
      oversPlayed = parseFloat(oversString);
    }

    if (isNaN(oversPlayed) || oversPlayed === 0 || isNaN(runsScored)) {
      return "N/A";
    }
    const ballsFaced = oversPlayed * 6;
    const strikeRate = (runsScored / ballsFaced) * 100;
    return strikeRate.toFixed(2);
  };

  const getWicketsLost = (scoreString) => {
    const [, oversString] = scoreString.split("/");
    const wicketsLost = oversString.split(" ")[1]?.slice(1, -1) || "0";
    return wicketsLost;
  };

  const handleRefresh = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/aa");
      const data = await response.json();
      setMatches(data);
    } catch (error) {
      console.error("Error fetching live score:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-48">
          <div className="flex justify-center mb-4 ">
            <button
              type="button"
              onClick={handleRefresh}
              className="flex items-center px-4 py-2 mr-16 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              <IoIosRefresh className="mr-2" />
              Refresh
            </button>
          </div>
          <div className="flex-wrap justify-center gap-4 lg:flex">
            {matches.map((match) => (
              <div key={match.id} className="flex flex-wrap justify-center gap-4">
                {/* Team 1 Card */}
                <div className="flex flex-col items-center w-full p-4 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl lg:w-auto h-60 md:w-80 lg:flex-row ">
                  <img
                    src={teamCaptains[match.t1]}
                    className="mb-4 w-72 h-72 drop-shadow-2xl lg:mr-4"
                    alt={match.t1}
                    style={{marginTop:"-10rem"}}
                  />
                  <div className="flex flex-col items-start lg:w-3/4">
                    <p className="mb-2 text-xl font-medium text-black">
                      {match.t1}
                    </p>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center justify-center w-16 h-16 mr-4 border-2 border-blue-400 rounded-full">
                        <img
                          src={teamLogos[match.t1]}
                          className="w-12 h-12 rounded-full"
                          alt="Team Logo"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold">
                          {match.t1s}
                        </p>
                        <p className="font-bold text-gray-600">
                          Run-rate: {match.t1s ? calculateRunRate(match.t1s) : "Yet to bat"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team 2 Card */}
                <div className="flex flex-col items-center w-full p-4 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl lg:w-auto h-60 md:w-80 lg:flex-row ">
                  <div className="flex flex-col items-start lg:w-3/4">
                    <p className="mb-2 text-xl font-medium text-black">
                      {match.t2}
                    </p>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center justify-center w-16 h-16 mr-4 border-2 border-red-800 rounded-full">
                        <img
                          src={teamLogos[match.t2]}
                          className="w-12 h-12 rounded-full"
                          alt="Team Logo"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold">
                          {match.t2s || "Yet to bat"}
                        </p>
                        <p className="font-bold text-gray-600">
                          Run-rate: {match.t2s && match.t2s !== "" ? calculateRunRate(match.t2s) : match.t2s ? "Yet to bat" : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    src={teamCaptains[match.t2]}
                    className="mb-4 w-72 h-72 drop-shadow-2xl lg:mr-4"
                    alt={match.t2}
                    style={{marginTop:"-10rem"}}
                  />
                </div>

                {/* Match Info Card */}
                <div className="flex flex-wrap justify-center gap-6 mt-4">
                  <div className="flex flex-col items-center justify-between w-auto p-6 text-center bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl">
                    <div className="mb-2">
                      <span className="font-bold text-gray-700">Series:</span>
                      <span className="ml-2">{match.series}</span>
                    </div>
                    <div className="mb-2">
                      <span className="font-bold text-gray-700">Venue:</span>
                      <span className="ml-2">{match.venue}</span>
                    </div>
                    <div className="mb-2">
                      <span className="font-bold text-gray-700">Result:</span>
                      <span className="ml-2">{match.result}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-auto p-6 text-center bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl">
                    <button
                      type="button"
                      style={{ color: "#2154bce6", backgroundColor: "#e5fafb" }}
                      className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                    >
                      <GiCricketBat />
                    </button>
                    <div className="text-left">
                      <p className="mt-3 ml-4 text-lg font-semibold">
                        {calculateStrikeRate(match.t2s)}
                      </p>
                      <p className="mt-1 ml-4 text-xl font-bold text-gray-800">
                        Strike Rate
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 text-center bg-white dark:text-gray-200 dark:bg-secondary-dark-bg pt-9 rounded-2xl">
                    <button
                      type="button"
                      style={{ color: "#2154bce6", backgroundColor: "#e5fafb" }}
                      className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                    >
                      <GoPrimitiveDot />
                    </button>
                    <div className="text-left">
                      <p className="mt-3 ml-4 text-lg font-semibold">
                        0
                      </p>
                      <p className="mt-1 ml-4 text-xl font-bold text-gray-800">
                        Wickets Lost
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 text-center bg-white dark:text-gray-200 dark:bg-secondary-dark-bg pt-9 rounded-2xl">
                    <button
                      type="button"
                      style={{ color: "#2154bce6", backgroundColor: "#e5fafb" }}
                      className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                    >
                      <GrStatusGood />
                    </button>
                    <div className="text-left">
                      <p className="mt-3 ml-4 text-lg font-semibold">
                        {match.status}
                      </p>
                      <p className="mt-1 ml-4 text-xl font-bold text-gray-800">
                        Match Status
                      </p>
                    </div>
                  </div>
                </div>

                {/* Punjab Kings Batting Scorecard Card */}
                <div className="w-full mt-8">
                  <div className="p-6 bg-white shadow dark:bg-secondary-dark-bg rounded-2xl">
                    <h2 className="mb-4 text-xl font-bold text-center text-blue-700">Punjab Kings Batting Scorecard</h2>
                    <h2 className="mb-4 text-xl font-bold text-center text-blue-700">Overs (20.0) 184/7</h2>
                    <div className="mb-6 overflow-x-auto">
                      <table className="min-w-full text-sm text-left">
                        <thead>
                          <tr className="bg-blue-100">
                            <th className="px-4 py-2 font-bold">Batter</th>
                            <th className="px-4 py-2 font-bold">How Out</th>
                            <th className="px-4 py-2 font-bold">R</th>
                            <th className="px-4 py-2 font-bold">B</th>
                            <th className="px-4 py-2 font-bold">4s</th>
                            <th className="px-4 py-2 font-bold">6s</th>
                            <th className="px-4 py-2 font-bold">SR</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-4 py-2">Priyansh Arya</td>
                            <td className="px-4 py-2">c Phil Salt b Josh Hazlewood</td>
                            <td className="px-4 py-2">24</td>
                            <td className="px-4 py-2">19</td>
                            <td className="px-4 py-2">4</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">126.32</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Prabhsimran Singh</td>
                            <td className="px-4 py-2">c Bhuvneshwar Kumar b Krunal Pandya</td>
                            <td className="px-4 py-2">26</td>
                            <td className="px-4 py-2">22</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">118.18</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Josh Inglis (wk)</td>
                            <td className="px-4 py-2">c Liam Livingstone b Krunal Pandya</td>
                            <td className="px-4 py-2">39</td>
                            <td className="px-4 py-2">23</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">4</td>
                            <td className="px-4 py-2">169.57</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Shreyas Iyer (c)</td>
                            <td className="px-4 py-2">c Jitesh Sharma b Romario Shepherd</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">50.00</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Nehal Wadhera</td>
                            <td className="px-4 py-2">c Krunal Pandya b Bhuvneshwar Kumar</td>
                            <td className="px-4 py-2">15</td>
                            <td className="px-4 py-2">18</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">83.33</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Shashank Singh</td>
                            <td className="px-4 py-2">not out</td>
                            <td className="px-4 py-2">61</td>
                            <td className="px-4 py-2">30</td>
                            <td className="px-4 py-2">3</td>
                            <td className="px-4 py-2">6</td>
                            <td className="px-4 py-2">203.33</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Marcus Stoinis</td>
                            <td className="px-4 py-2">c Yash Dayal b Bhuvneshwar Kumar</td>
                            <td className="px-4 py-2">6</td>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">300.00</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Azmatullah Omarzai</td>
                            <td className="px-4 py-2">c (Sub) Manoj Bhandage b Yash Dayal</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">50.00</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Kyle Jamieson</td>
                            <td className="px-4 py-2">not out</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">0.00</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 font-bold">Extras</td>
                            <td className="px-4 py-2">(nb 0, w 3, b 0, lb 8, pen 0)</td>
                            <td className="px-4 py-2">11</td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 font-bold">Did Not Bat:</td>
                            <td className="px-4 py-2" colSpan={6}>Vyshak Vijaykumar, Yuzvendra Chahal, Arshdeep Singh</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Fall of Wickets */}
                    <h2 className="mt-8 mb-2 text-lg font-bold text-blue-700">Fall of Wickets</h2>
                    <div className="mb-4 text-sm text-gray-800">
                      <ul className="ml-6 list-disc">
                        <li>1-43 Priyansh Arya (Over 4.6)</li>
                        <li>2-72 Prabhsimran Singh (Over 8.3)</li>
                        <li>3-79 Shreyas Iyer (Over 9.4)</li>
                        <li>4-98 Josh Inglis (Over 12.1)</li>
                        <li>5-136 Nehal Wadhera (Over 16.2)</li>
                        <li>6-142 Marcus Stoinis (Over 16.4)</li>
                        <li>7-145 Azmatullah Omarzai (Over 17.2)</li>
                      </ul>
                    </div>
                    {/* Partnership Info */}
                    <h2 className="mb-2 text-lg font-bold text-blue-700">Partnerships</h2>
                    <div className="mb-4 text-sm text-gray-800">
                      <ul className="ml-6 list-disc">
                        <li>Prabhsimran Singh 14 (11) &mdash; Partnership: 43 (30), Extras: 5, Priyansh Arya 24 (19)</li>
                        <li>Josh Inglis 17 (10) &mdash; Partnership: 29 (21), Extras: 0, Prabhsimran Singh 12 (11)</li>
                        <li>Shreyas Iyer 1 (2) &mdash; Partnership: 7 (7), Extras: 0, Josh Inglis 6 (5)</li>
                        <li>Nehal Wadhera 2 (7) &mdash; Partnership: 19 (15), Extras: 1, Josh Inglis 16 (8)</li>
                        <li>Shashank Singh 22 (14) &mdash; Partnership: 38 (25), Extras: 3, Nehal Wadhera 13 (11)</li>
                        <li>Marcus Stoinis 6 (2) &mdash; Partnership: 6 (2), Extras: 0, Shashank Singh 0 (0)</li>
                        <li>Shashank Singh 1 (2) &mdash; Partnership: 3 (4), Extras: 1, Azmatullah Omarzai 1 (2)</li>
                        <li>Shashank Singh 38 (14) &mdash; Partnership: 39* (16), Extras: 1, Kyle Jamieson 0 (2)</li>
                      </ul>
                    </div>
                    {/* Bowling Scorecard */}
                    <h2 className="mb-4 text-xl font-bold text-center text-blue-700">Bowling Scorecard</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm text-left">
                        <thead>
                          <tr className="bg-blue-100">
                            <th className="px-4 py-2 font-bold">Bowler</th>
                            <th className="px-4 py-2 font-bold">O</th>
                            <th className="px-4 py-2 font-bold">M</th>
                            <th className="px-4 py-2 font-bold">R</th>
                            <th className="px-4 py-2 font-bold">W</th>
                            <th className="px-4 py-2 font-bold">Econ</th>
                            <th className="px-4 py-2 font-bold">Dots</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-4 py-2">Bhuvneshwar Kumar</td>
                            <td className="px-4 py-2">4</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">38</td>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">9.5</td>
                            <td className="px-4 py-2">9</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Yash Dayal</td>
                            <td className="px-4 py-2">3</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">18</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">6</td>
                            <td className="px-4 py-2">10</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Josh Hazlewood</td>
                            <td className="px-4 py-2">4</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">54</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">13.5</td>
                            <td className="px-4 py-2">7</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Krunal Pandya</td>
                            <td className="px-4 py-2">4</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">17</td>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">4.25</td>
                            <td className="px-4 py-2">12</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Suyash Sharma</td>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">19</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">9.5</td>
                            <td className="px-4 py-2">4</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Romario Shepherd</td>
                            <td className="px-4 py-2">3</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">30</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">10</td>
                            <td className="px-4 py-2">5</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* Royal Challengers Bengaluru Batting & Bowling Scorecard Card */}
                <div className="w-full mt-8">
                  <div className="p-6 bg-white shadow dark:bg-secondary-dark-bg rounded-2xl">
                    <h2 className="mb-4 text-xl font-bold text-center text-red-700">Royal Challengers Bengaluru Batting Scorecard</h2>
                    <h2 className="mb-4 text-xl font-bold text-center text-red-700">Overs (20.0) 190/9</h2>
                    <div className="mb-6 overflow-x-auto">
                      <table className="min-w-full text-sm text-left">
                        <thead>
                          <tr className="bg-red-100">
                            <th className="px-4 py-2 font-bold">Batter</th>
                            <th className="px-4 py-2 font-bold">How Out</th>
                            <th className="px-4 py-2 font-bold">R</th>
                            <th className="px-4 py-2 font-bold">B</th>
                            <th className="px-4 py-2 font-bold">4s</th>
                            <th className="px-4 py-2 font-bold">6s</th>
                            <th className="px-4 py-2 font-bold">SR</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-4 py-2">Phil Salt</td>
                            <td className="px-4 py-2">c Shreyas Iyer b Kyle Jamieson</td>
                            <td className="px-4 py-2">16</td>
                            <td className="px-4 py-2">9</td>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">177.78</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Virat Kohli</td>
                            <td className="px-4 py-2">c & b Azmatullah Omarzai</td>
                            <td className="px-4 py-2">43</td>
                            <td className="px-4 py-2">35</td>
                            <td className="px-4 py-2">3</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">122.86</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Mayank Agarwal</td>
                            <td className="px-4 py-2">c Arshdeep Singh b Yuzvendra Chahal</td>
                            <td className="px-4 py-2">24</td>
                            <td className="px-4 py-2">18</td>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">133.33</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Rajat Patidar (c)</td>
                            <td className="px-4 py-2">lbw Kyle Jamieson</td>
                            <td className="px-4 py-2">26</td>
                            <td className="px-4 py-2">16</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">162.50</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Liam Livingstone</td>
                            <td className="px-4 py-2">lbw Kyle Jamieson</td>
                            <td className="px-4 py-2">25</td>
                            <td className="px-4 py-2">15</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">166.67</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Jitesh Sharma (wk)</td>
                            <td className="px-4 py-2">b Vyshak Vijaykumar</td>
                            <td className="px-4 py-2">24</td>
                            <td className="px-4 py-2">10</td>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">240.00</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Romario Shepherd</td>
                            <td className="px-4 py-2">lbw Arshdeep Singh</td>
                            <td className="px-4 py-2">17</td>
                            <td className="px-4 py-2">9</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">188.89</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Krunal Pandya</td>
                            <td className="px-4 py-2">c Shreyas Iyer b Arshdeep Singh</td>
                            <td className="px-4 py-2">4</td>
                            <td className="px-4 py-2">5</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">80.00</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Bhuvneshwar Kumar</td>
                            <td className="px-4 py-2">c Priyansh Arya b Arshdeep Singh</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">50.00</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Yash Dayal</td>
                            <td className="px-4 py-2">not out</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">100.00</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 font-bold">Extras</td>
                            <td className="px-4 py-2">(nb 0, w 9, b 0, lb 0, pen 0)</td>
                            <td className="px-4 py-2">9</td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 font-bold">Did Not Bat:</td>
                            <td className="px-4 py-2" colSpan={6}>Suyash Sharma, Josh Hazlewood</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Fall of Wickets */}
                    <h2 className="mt-8 mb-2 text-lg font-bold text-red-700">Fall of Wickets</h2>
                    <div className="mb-4 text-sm text-gray-800">
                      <ul className="ml-6 list-disc">
                        <li>1-18 Phil Salt (Over 1.4)</li>
                        <li>2-56 Mayank Agarwal (Over 6.2)</li>
                        <li>3-96 Rajat Patidar (Over 10.5)</li>
                        <li>4-131 Virat Kohli (Over 14.5)</li>
                        <li>5-167 Liam Livingstone (Over 16.5)</li>
                        <li>6-171 Jitesh Sharma (Over 17.4)</li>
                        <li>7-188 Romario Shepherd (Over 19.2)</li>
                        <li>8-189 Krunal Pandya (Over 19.4)</li>
                        <li>9-190 Bhuvneshwar Kumar (Over 19.6)</li>
                      </ul>
                    </div>
                    {/* Partnership Info */}
                    <h2 className="mb-2 text-lg font-bold text-red-700">Partnerships</h2>
                    <div className="mb-4 text-sm text-gray-800">
                      <ul className="ml-6 list-disc">
                        <li>Virat Kohli 1 (1) &mdash; Partnership: 18 (10), Extras: 1, Phil Salt 16 (9)</li>
                        <li>Virat Kohli 13 (10) &mdash; Partnership: 38 (28), Extras: 1, Mayank Agarwal 24 (18)</li>
                        <li>Rajat Patidar 26 (16) &mdash; Partnership: 40 (27), Extras: 0, Virat Kohli 14 (11)</li>
                        <li>Virat Kohli 15 (13) &mdash; Partnership: 35 (24), Extras: 4, Liam Livingstone 16 (11)</li>
                        <li>Jitesh Sharma 24 (8) &mdash; Partnership: 36 (12), Extras: 3, Liam Livingstone 9 (4)</li>
                        <li>Jitesh Sharma 0 (2) &mdash; Partnership: 4 (5), Extras: 0, Romario Shepherd 4 (3)</li>
                        <li>Krunal Pandya 4 (4) &mdash; Partnership: 17 (10), Extras: 0, Romario Shepherd 13 (6)</li>
                        <li>Bhuvneshwar Kumar 1 (1) &mdash; Partnership: 1 (2), Extras: 0, Krunal Pandya 0 (1)</li>
                        <li>Yash Dayal 1 (1) &mdash; Partnership: 1 (2), Extras: 0, Bhuvneshwar Kumar 0 (1)</li>
                      </ul>
                    </div>
                    {/* Bowling Scorecard */}
                    <h2 className="mb-4 text-xl font-bold text-center text-red-700">Bowling Scorecard</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm text-left">
                        <thead>
                          <tr className="bg-red-100">
                            <th className="px-4 py-2 font-bold">Bowler</th>
                            <th className="px-4 py-2 font-bold">O</th>
                            <th className="px-4 py-2 font-bold">M</th>
                            <th className="px-4 py-2 font-bold">R</th>
                            <th className="px-4 py-2 font-bold">W</th>
                            <th className="px-4 py-2 font-bold">Econ</th>
                            <th className="px-4 py-2 font-bold">Dots</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-4 py-2">Arshdeep Singh</td>
                            <td className="px-4 py-2">4</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">40</td>
                            <td className="px-4 py-2">3</td>
                            <td className="px-4 py-2">10</td>
                            <td className="px-4 py-2">8</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Kyle Jamieson</td>
                            <td className="px-4 py-2">4</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">48</td>
                            <td className="px-4 py-2">3</td>
                            <td className="px-4 py-2">12</td>
                            <td className="px-4 py-2">9</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Azmatullah Omarzai</td>
                            <td className="px-4 py-2">4</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">35</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">8.75</td>
                            <td className="px-4 py-2">3</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Vyshak Vijaykumar</td>
                            <td className="px-4 py-2">4</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">30</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">7.5</td>
                            <td className="px-4 py-2">5</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Yuzvendra Chahal</td>
                            <td className="px-4 py-2">4</td>
                            <td className="px-4 py-2">0</td>
                            <td className="px-4 py-2">37</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">9.25</td>
                            <td className="px-4 py-2">3</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* End RCB Batting & Bowling Scorecard Card */}

                {/* Match Details Card */}
                <div className="w-full mt-8">
                  <div className="p-6 bg-white shadow dark:bg-secondary-dark-bg rounded-2xl">
                    <h2 className="mb-4 text-xl font-bold text-center text-gray-700">Match Details</h2>
                    <div className="mb-2 text-base text-gray-800">
                      <div><span className="font-bold">Tournament:</span> TATA IPL 2025</div>
                      <div><span className="font-bold">Match:</span> Royal Challengers Bengaluru vs Punjab Kings</div>
                      <div><span className="font-bold">Toss Details:</span> Punjab Kings Won The Toss And Elected To Field</div>
                      <div><span className="font-bold">Venue:</span> Narendra Modi Stadium, Ahmedabad</div>
                      <div><span className="font-bold">On Field Umpires:</span> Nitin Menon, Madanagopal Jayaraman</div>
                      <div><span className="font-bold">Third Umpire:</span> Chris Gaffaney</div>
                      <div><span className="font-bold">Referee:</span> Javagal Srinath</div>
                      <div><span className="font-bold">MOM:</span> Krunal Pandya (Royal Challengers Bengaluru)</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default LiveScore;
