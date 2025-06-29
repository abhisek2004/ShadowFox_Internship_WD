import React, {useEffect,useState} from 'react';
import kkrLogo from "../components/images/kkr.png";
import rrLogo from "../components/images/rr.png";
import cskLogo from "../components/images/csk.png";
import srhLogo from "../components/images/srh.png";
import dcLogo from "../components/images/dc.png";
import rcbLogo from "../components/images/rcb.png";
import lsgLogo from "../components/images/lsg.png";
import gtLogo from "../components/images/gt.png";
import pbksLogo from "../components/images/pk.png";
import miLogo from "../components/images/mi.png"
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
const sampleData = [
  {
    "position": "1",
    "team": "PBKS",
    "played": "14",
    "won": "9",
    "lost": "4",
    "points": "19",
    "nr": "1",
    "nrr": "0.37",
    "for": "2447",
    "against": "2395"
  },
  {
    "position": "2",
    "team": "RCB",
    "played": "14",
    "won": "9",
    "lost": "4",
    "points": "19",
    "nr": "1",
    "nrr": "0.37",
    "for": "2447",
    "against": "2395"
  },
  {
    "position": "3",
    "team": "GT",
    "played": "14",
    "won": "9",
    "lost": "5",
    "points": "18",
    "nr": "1",
    "nrr": "0.37",
    "for": "2447",
    "against": "2395"
  },
  {
    "position": "4",
    "team": "MI",
    "played": "14",
    "won": "8",
    "lost": "6",
    "points": "16",
    "nr": "1",
    "nrr": "0.37",
    "for": "2447",
    "against": "2395"
  },
  {
    "position": "5",
    "team": "DC",
    "played": "14",
    "won": "7",
    "lost": "6",
    "points": "15",
    "nr": "1",
    "nrr": "0.37",
    "for": "2447",
    "against": "2395"
  },
  {
    "position": "6",
    "team": "SRH",
    "played": "14",
    "won": "6",
    "lost": "7",
    "points": "13",
    "nr": "1",
    "nrr": "0.37",
    "for": "2447",
    "against": "2395"
  },
  {
    "position": "7",
    "team": "LSG",
    "played": "14",
    "won": "6",
    "lost": "8",
    "points": "12",
    "nr": "1",
    "nrr": "0.37",
    "for": "2447",
    "against": "2395"
  },
  {
    "position": "8",
    "team": "KKR",
    "played": "14",
    "won": "5",
    "lost": "7",
    "points": "12",
    "nr": "1",
    "nrr": "0.37",
    "for": "2447",
    "against": "2395"
  },
  {
    "position": "9",
    "team": "RR",
    "played": "14",
    "won": "4",
    "lost": "10",
    "points": "8",
    "nr": "1",
    "nrr": "0.37",
    "for": "2447",
    "against": "2395"
  },
  {
    "position": "10",
    "team": "CSK",
    "played": "14",
    "won": "4",
    "lost": "10",
    "points": "8",
    "nr": "1",
    "nrr": "0.37",
    "for": "2447",
    "against": "2395"
  },

]
const IPLStandings = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  // useEffect(() => {
  //   const fetchTeamsData = async () => {
  //     try {
  //       const response = await fetch("/api/ipl-points-table");
  //       const data = await response.json();
        
  //       setTeams(data);
  //       setLoading(false); // Update loading state once data is fetched

  //     } catch (error) {
  //       console.error("Error fetching teams data:", error);
  //     }
  //   };

  //   fetchTeamsData();
  // }, []);
  useEffect(() => {
    const fetchTeamsData = async () => {
      try {
       
        
        setTeams(sampleData);
        setLoading(false); // Update loading state once data is fetched

      } catch (error) {
        console.error("Error fetching teams data:", error);
      }
    };

    fetchTeamsData();
  }, []);



  const teamLogos = {
    "KKR": kkrLogo,
    "RR": rrLogo,
    "CSK": cskLogo,
    "SRH" :srhLogo,
    "DC" :dcLogo,
    "RCB" :rcbLogo,
    "LSG" :lsgLogo,
    "GT" :gtLogo,
    "PBKS" :pbksLogo,
    "MI" :miLogo,
  };
  // Function to generate class name based on team name
  const getTeamClass = (teamName) => {
    return teamName.toLowerCase(); // Example: 'CSK' will become 'csk'
  };

  return (
    <>
      {loading ? (
         <Loader/>
        ) : (
      <div className='flex flex-wrap justify-center mt-28'>
        {teams.map((team, index) => (
          <div key={index} className={`parent m-2 mb-10 ${getTeamClass(team.team)}`}>
            <div className="parentcard">
              <div className="logo">
              <span className="parentcircle parentcircle3"></span>
                <span className="parentcircle parentcircle4"></span>
                <span className="parentcircle parentcircle5">
                <h1 className='text-4xl font-extrabold text-white text-stroke-black' >{team.position}</h1>
                </span>
                {/* Use team logo image */}
                <img src={teamLogos[team.team]} alt={`${team.team} Logo`} />
                              </div>
              <div className="glass"></div>
              <div className="flex justify-center text-center parentcontent">
                {/* <span className="flex justify-center mt-6 text-5xl title">{team.team}</span> */}
              </div>
              <div className="bottom">
  <div className="grid gap-2">
    {/* Main stats row */}
    <div className="grid w-full grid-cols-4 gap-2 social-buttons-container">
      <button className="bg-white social-button">{team.played}</button>
      <button className="bg-green-400 social-button">{team.won}</button>
      <button className="bg-red-400 social-button">{team.lost}</button>
      <button className="bg-white social-button">{team.points}</button>
    </div>
    <div className="grid w-full grid-cols-4 gap-2 social-buttons-container">
      <p className="text-center text-white text-md">Played</p>
      <p className="text-center text-white text-md">Won</p>
      <p className="text-center text-white text-md">Lost</p>
      <p className="text-center text-white text-md">Points</p>
    </div>
    {/* NR, NRR, For, Against row */}
    <div className="grid w-full grid-cols-4 gap-2 social-buttons-container">
      <button className="bg-gray-200 social-button">{team.nr || '-'}</button>
      <button className="bg-yellow-200 social-button">{team.nrr || '-'}</button>
      <button className="bg-blue-200 social-button">{team.for || '-'}</button>
      <button className="bg-pink-200 social-button">{team.against || '-'}</button>
    </div>
    <div className="grid w-full grid-cols-4 gap-2 social-buttons-container">
      <p className="text-center text-white text-md">NR</p>
      <p className="text-center text-white text-md">NRR</p>
      <p className="text-center text-white text-md">For</p>
      <p className="text-center text-white text-md">Against</p>
    </div>
  </div>
</div>
            </div>
          </div>
        ))}
      </div>
    )}
    </>
  );
};

export default IPLStandings;
