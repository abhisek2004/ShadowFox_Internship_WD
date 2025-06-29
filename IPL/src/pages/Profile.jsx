import React, { useState, useEffect } from "react";
import bg from "../components/images/motera.webp";
import dhoni from "../components/images/dhoni.png";

import toast from 'react-hot-toast';
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
const sampleData = {
  "player": {
    "name": "Rohit Sharma",
    "nationality": "Indian",
    "overview": [
      {
        "IPL Debut": "2008"
      },
      {
        "Specialization": "Batter"
      },
      {
        "Date of Birth": "30 April 1987"
      },
      {
        "Matches": "258"
      }
    ],
    "about": "Rohit Sharma is a player that needs no introduction; he is the most successful player in the history of the league, having won six IPL titles, one with Deccan Chargers in 2009 and five as captain of Mumbai Indians (2013, 2015, 2017, 2019, 2020), making him the joint most successful captain in the league. Not just with his leadership, Rohit Sharma has also been instrumental with the bat and is currently the third-highest run-scorer in the history of the tournament. He also has the distinction of being the only player to score three ODI double-centuries and most recently also led India to back-to-back ICC trophies (the 2024 T20 World Cup and the 2025 Champions Trophy).",
    "image": "https://documents.iplt20.com/ipl/IPLHeadshot2025/6.png"
  }
}
const Profile = () => {
  const [playerData, setPlayerData] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(bg);
  const [playAudio, setPlayAudio] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  // useEffect(() => {
  //   const fetchPlayerData = async () => {
  //     try {
  //       // Extract teamname and playercode from the URL
  //       const urlParams = window.location.pathname.split("/");
  //       const teamname = urlParams[2];
  //       const playercode = urlParams[3];

  //       const response = await fetch(
  //         `/api/player/${teamname}/${playercode}`
  //       );
  //       const data = await response.json();
  //       setPlayerData([data.player]); // Wrap player data in an array
  //       setBackgroundImage(getBackgroundImage(teamname));
  //       setLoading(false); // Update loading state once data is fetched

  //       if (teamname === "chennai-super-kings" && playercode === "1") {
  //         setPlayAudio(true);
  //         toast.success("Thala Supremacy 😎");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching player data:", error);
  //     }
  //   };

  //   fetchPlayerData();
  // }, []);
  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
      
       const teamname = "mumbai-indians";
       
        setPlayerData([sampleData.player]); // Wrap player data in an array
        setBackgroundImage(getBackgroundImage(teamname));
        setLoading(false); // Update loading state once data is fetched
        
       
          setPlayAudio(true);
          toast.success("RO-HIT Supremacy 😎");
        
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    fetchPlayerData();
  }, []);

  const getBackgroundImage = (teamname) => {
    // Mapping object of team names and their background image URLs
    const teamBackgrounds = {
      "chennai-super-kings":
        "https://4kwallpapers.com/images/walls/thumbs_3t/4938.png",
      "mumbai-indians":
        "https://4kwallpapers.com/images/walls/thumbs_3t/4934.png",
      "delhi-capitals":
        "https://i.pinimg.com/736x/33/1a/5a/331a5a63cf1b7f78f53433ae778e1ca3.jpg",
      "sunrisers-hyderabad":
        "https://wallpapers.com/images/high/sunrisers-hyderabad-orange-and-white-logo-die68jcmuvtg8iir.webp",
      "royal-challengers-bangalore":
        "https://4kwallpapers.com/images/walls/thumbs_3t/4937.png",
      "gujarat-titans": "https://wallpapercave.com/wp/wp11073261.jpg",
      "kolkata-knight-riders":
        "https://4kwallpapers.com/images/walls/thumbs_3t/4940.png",
      "lucknow-super-giants":
        "https://imgk.timesnownews.com/media/Lucknow_Super_Giants_logo_1.png",
      "punjab-kings":
        "https://i.pinimg.com/736x/58/6e/a0/586ea0e5338219f6d4cebda77d789932.jpg",
      "rajasthan-royals":
        "https://wallpapers.com/images/high/rajasthan-royals-pink-background-pq1ac3zfrvq4wy4f.webp",
    };

    // Check if the team name exists in the mapping object
    if (teamname in teamBackgrounds) {
      return teamBackgrounds[teamname];
    } else {
      // Return default background image if team name not found
      return bg;
    }
  };

  return (
    <> 
    {loading ? (
    <Loader/>
   ) : (
    <main className="profile-page">
      <section className="relative block h-screen">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
          <span
            id="blackOverlay"
            className="absolute w-full h-full bg-black opacity-20"
          ></span>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none h-70-px"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-current text-blueGray-200"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-blueGray-200">
        <div className="container px-4 mx-auto">
          {playerData.map((player, index) => (
            <div
              key={index}
              className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-[25%]"
            >
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="flex justify-center w-full px-4 lg:order-2 -mt-96">
                    <div className="relative">
                      <div
                        style={{
                          position: "relative",
                          overflow: "hidden",
                          width: "30rem",
                          height: "auto",
                          borderRadius: "1rem",
                        }}
                      >
                        <img
                          alt={player.name}
                          src={player.image}
                          className="object-cover w-full h-full"
                          
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "40%", // Adjust the height of the gradient layer as needed
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="w-full px-4 lg:w-4/12 lg:order-3 lg:text-right lg:self-center">
                    <div className="flex justify-center px-3 py-6 mt-32 sm:mt-0">
                      <div className="p-3 mr-4 text-center">
                        <span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
                         " Sixes : 100"
                        </span>
                        <span className="text-sm text-blueGray-400">Sixes</span>
                      </div>
                      <div className="p-3 mr-4 text-center">
                        <span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
                        "Fours : 200"
                        </span>
                        <span className="text-sm text-blueGray-400">Fours</span>
                      </div>
                      <div className="p-3 text-center lg:mr-4">
                        <span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
                          "Centuries : 500"
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Centuries
                        </span>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="mt-12 text-center">
                  <h3 className="mb-2 text-4xl font-semibold leading-normal text-blueGray-700">
                    {player.name}
                  </h3>
                

                  <div className="w-full px-4 lg:order-1">
                    <div className="flex flex-col justify-start py-4 pt-8 lg:pt-4">
                      {player.overview.map((item, index) => (
                        <div key={index} className="mb-2 text-blueGray-600">
                          {Object.entries(item).map(([key, value]) => (
                            <React.Fragment key={key}>
                              <i className="mr-2 text-lg fas fa-university text-blueGray-400"></i>
                             <span style={{
                              fontWeight: "bold",
                             }}> {key} </span> : {value}
                              <br />
                            </React.Fragment>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional details */}
                </div>
                <div className="py-10 mt-10 text-center border-t border-blueGray-200">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:w-9/12">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {player.about}
                      </p>
                    </div>
                  </div>
                </div>
                {playAudio && (
                  <div className="text-center audio-player">
                    <audio autoPlay hidden>
                      <source
                        src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/RO-HIT%20Theme%20Song%20_%20Bole%20Jo%20Koyal%20Bago%20Mein%20(Lyrics)%20-%20Rawmats%20Chudi%20jo%20Khanke.mp3?alt=media&token=a385f17a-99c9-463c-9d7c-4c37e3a52d51"
                        type="audio/mpeg"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )}
        </>
  );
};

export default Profile;
