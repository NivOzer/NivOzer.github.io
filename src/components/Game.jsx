import { useParams, Link } from "react-router-dom";

const gameData = {
    "pass-through": {
      title: "Pass Through",
      description: "Aerial Combat Simulator",
      longDescription:
        "Experience the thrill of navigating through the sky in Pass Through, \n the latest 3D cross-platform puzzle flying game. \n Control your aircraft with precision using a joystick and navigate through challenging rings in multiple levels that progressively increase in difficulty",
      image: "/images/PassThroughThumbnail.png",
      video: "/assets/pass-video.mp4",
      iframeSrc:
        "https://play.unity.com/api/v1/games/game/5621bccf-2d6c-44c3-acc2-0b2236b80faa/build/latest/frame",
    },
    "falling-swords": {
      title: "Falling Swords",
      description: "Epic Battle Royale",
      longDescription:
        "Falling Swords. Experience the thrill of dodging falling swords from the sky in the exciting cross-platform game. With each passing moment, more clouds approach, testing your reflexes and skill. Strap on your helmet for an extra life and immerse yourself in this fun and challenging adventure. Dive into the world of Falling Swords today!",
      image: "/images/FallingSwordsThumbnail.jpg",
      video: "/assets/swords-video.mp4",
      iframeSrc:
        "https://play.unity.com/api/v1/games/game/634562e7-03d3-4d7c-9103-83ca06147d13/build/latest/frame",
    },
    "chicken-invaders": {
      title: "Chicken Invaders Remastered",
      description: "Space Combat",
      longDescription:
        "This project showcases a space-themed game as a remake / Spin-off to the famous game Chicken Invaders. With various flying objects, enemy types, healing power-up, and game instructions. The game also includes a score system and controls for the player to destroy & navigate through the challenges.",
      image: "/images/ChickenInvadersRemasteredThumbnail.jpg",
      video: "/assets/chicken-video.mp4",
      iframeSrc:
        "https://play.unity.com/api/v1/games/game/dde4905b-36fe-4425-b422-52110b9198fb/build/latest/frame",
    },
  };
  

const Game = () => {
  const { gameId } = useParams();
  const game = gameData[gameId];

  if (!game) {
    return <h1 className="text-center text-3xl font-bold mt-20">Game Not Found</h1>;
  }

  return (
    <div className="min-h-screen ">
      {/* Main content */}

        {/* Back Button */}
        <div className="text-center py-3">
        <Link
            to="/Unity"
            className="inline-block border-2 border-amber-800 px-8 py-3 font-serif tracking-widest text-amber-900 hover:bg-amber-800 hover:text-white transition-colors"
        >
            ← Back
        </Link>
        </div>

      <div className="container mx-auto lg:px-4 md:px-4">
        
        <div className="max-w-4xl  mx-auto bg-[#f8f3e8] border-2 border-amber-800 p-8">
          

          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl tracking-wide text-amber-900">{game.title}</h1>
            <p className="font-serif tracking-widest text-sm mt-2">UNITY GAME</p>
          </div>

          {/* Game Description */}
          <div className="p-6 mb-8 border-2 border-amber-800 bg-white">
            <p className="xs:text-xs text-lg text-amber-900 font-serif leading-relaxed">
              {game.longDescription || game.description}
            </p>
          </div>

        {/* Play Game */}
        <div className="mb-8">
            <h2 className="font-serif text-2xl mb-4 text-amber-900 border-b-2 border-amber-800 pb-2">
                Play
            </h2>
            <div className="xs:max-h-64 xs:mb-20 border-2 border-amber-800 h-[600px] relative">
                {/* Unity Play iframe */}
                <iframe
                id="gameIframe"
                className="EmbeddedGame_iframe__NkZUm w-full h-full"
                src={game.iframeSrc}
                allow="autoplay; xr-spatial-tracking"
                allowFullScreen
                title={game.title}
                ></iframe>

                {/* Fullscreen Button */}
                <button
                onClick={() => {
                    const iframe = document.getElementById("gameIframe");
                    if (iframe && iframe.requestFullscreen) {
                    iframe.requestFullscreen();
                    } else if (iframe && iframe.webkitRequestFullscreen) {
                    iframe.webkitRequestFullscreen(); // Safari
                    } else if (iframe && iframe.mozRequestFullScreen) {
                    iframe.mozRequestFullScreen(); // Firefox
                    } else if (iframe && iframe.msRequestFullscreen) {
                    iframe.msRequestFullscreen(); // IE/Edge
                    }
                }}
                className="xs:mb-8 xs:w-full mt-2 block mx-auto bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition"
                >
                Fullscreen
                </button>
            </div>
        </div>


          {/* Game Screenshot */}
          <div className="mb-8 xs:max-h-64">
            <h2 className="font-serif text-2xl mb-4 text-amber-900 border-b-2 border-amber-800 pb-2">IMAGES</h2>
            <div className="relative h-64 w-full border-2 border-amber-800">
              <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Gameplay Video */}
          <div className="mb-8 xs:max-h-64">
            <h2 className="font-serif text-2xl mb-4 text-amber-900 border-b-2 border-amber-800 pb-2">VIDEOS</h2>
            <div className="border-2 border-amber-800">
              <video width="100%" height="auto" controls className="bg-black">
                <source src={game.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>


        {/* Back Button */}
        <div className="text-center py-3">
        <Link
            to="/Unity"
            className="inline-block border-2 border-amber-800 px-8 py-3 font-serif tracking-widest text-amber-900 hover:bg-amber-800 hover:text-white transition-colors"
        >
            ← Back
        </Link>
        </div>


        </div>
      </div>
    </div>
  );
};

export default Game;
