"use client";
import { Button } from "@/components/button";
import { WalletModal } from "@/components/connect-modal";
import { MintedNFTModal } from "@/components/MintedNFTModal";
import { UserNFTs } from "@/components/UserNFTs";
import { useNFT } from "@/hooks/useNFTInteraction";
import { Header } from "@/layouts/header";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useAccount, useSwitchChain } from "wagmi";

const BackgroundWrapper = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
      {/* <div className="h-[60px] md:h-[115px] flex items-center justify-center z-[1000] absolute top-[20px] md:top-[80px] left-[20px] md:left-[80px]">
        <img
          src="/icon/Logo_SVG.svg"
          alt="Logo"
          className="w-full h-full object-cover"
        />
      </div>{" "} */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover hidden lg:block"
      >
        <source src="/background/lost_disc.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover block lg:hidden"
      >
        <source src="/background/lost_disc_mobile.mp4" type="video/mp4" />
      </video>
      <motion.div
        className="absolute bottom-0 left-0 "
        initial={{ y: "10%", scale: 1.4, x: "-10%", opacity: 1 }}
        animate={{ y: 0, scale: 1, opacity: 1, x: "-10%" }}
        transition={{
          duration: 1.4,
        }}
      >
        <img
          src="/background/left.png"
          alt="Left layer"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0"
        initial={{ y: "10%", scale: 1.4, x: "10%", opacity: 1 }}
        animate={{ y: 0, scale: 1.1, opacity: 1, x: "10%" }}
        transition={{
          duration: 1.4,
        }}
      >
        <img
          src="/background/right.png"
          alt="Right layer"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const tracks = ["/music/unlocked_fate.wav", "/music/we_are_monshape.wav"];

  // Tentative de lecture automatique au chargement
  useEffect(() => {
    const attemptAutoplay = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error: unknown) {
          setIsPlaying(false);
        }
      }
    };

    attemptAutoplay();
  }, []);

  const playNext = () => {
    const nextTrack = (currentTrack + 1) % tracks.length;
    setCurrentTrack(nextTrack);
    if (audioRef.current) {
      audioRef.current.src = tracks[nextTrack];
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Erreur lors de la lecture:", error);
        });
      }
    }
  };

  const playPrevious = () => {
    const prevTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    setCurrentTrack(prevTrack);
    if (audioRef.current) {
      audioRef.current.src = tracks[prevTrack];
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Erreur lors de la lecture:", error);
        });
      }
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Erreur lors de la lecture:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      playNext();
    };

    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrack]);

  return (
    <div className="fixed min-w-[200px] sm:min-w-[342px] w-fit sm:bottom-[60px] bottom-[20px] bg-white/10 border rounded-xl border-white/30 h-[50px] sm:h-[57px] left-[20px] sm:left-[90px] lg:left-[100px] z-50 backdrop-blur-sm sm:block hidden">
      <div className="relative sm:pl-[60px] pl-[60px] flex items-center justify-between gap-2 p-2 ">
        <img
          src="/background/music_player.gif"
          alt="Music"
          className="w-[60px] sm:w-[126px] h-[80px] sm:h-[173px] absolute bottom-1/2  translate-y-1/2 sm:translate-y-1/2 translate-x-1/4 sm:-left-[115px] -left-[30px] z-50"
        />
        <audio ref={audioRef} src={tracks[currentTrack]} />
        <div className="flex flex-col justify-center -mt-[5px] sm:-mt-[3px]">
          <p
            className="text-white text-[12px] sm:text-base uppercase "
            style={{
              fontWeight: "800",
            }}
          >
            {" "}
            {currentTrack ? "We Are Monshape" : "Unlocked Fate"}
          </p>
          <p className="text-white/50 text-[9px]">Monshape.club</p>
        </div>
        <div className="flex items-center ml-auto sm:ml-10">
          <button
            onClick={playPrevious}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-opacity-80 sm:mt-0 -mt-1 transition-all"
          >
            <img
              src="/icon/Playlist_Previous.svg"
              alt="Previous"
              className="w-4 h-4"
            />
          </button>{" "}
          <button
            onClick={togglePlay}
            className="sm:w-10 sm:h-10  flex items-center justify-center rounded-full hover:bg-opacity-80 transition-all sm:mt-0 -mt-1"
          >
            {isPlaying ? (
              <img
                src="/icon/Playlist_Pause.svg"
                alt="Pause"
                className="w-4 h-5"
              />
            ) : (
              <img
                src="/icon/Playlist_Play.svg"
                alt="Play"
                className="w-4 h-5 rotate-180"
              />
            )}
          </button>
          <button
            onClick={playNext}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-opacity-80 transition-all sm:mt-0 -mt-1"
          >
            <img src="/icon/Playlist_Next.svg" alt="Next" className="w-4 h-4" />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export function NFT() {
  const { address, chainId } = useAccount();
  const { switchChain } = useSwitchChain();
  const isWrongNetwork = chainId !== 10143;
  const [open, setOpen] = useState(false);
  const [mintingStep, setMintingStep] = useState<
    "idle" | "preparing" | "confirming" | "success" | "error"
  >("idle");

  const {
    maxSupply,
    totalMinted,
    isPaused,
    mintWithSignature,
    userMintStatus,
    mintPhaseInfo,
    lastMintedTokenId,
  } = useNFT();

  const canCurrentlyMint = userMintStatus?.canCurrentlyMint;
  const userStatusInfo = userMintStatus?.userStatus || "";
  const isWhitelisted =
    userStatusInfo.includes("WHITELIST") || userStatusInfo.includes("OG");
  const whitelistOnly =
    mintPhaseInfo?.currentPhase === "WHITELIST" ||
    mintPhaseInfo?.currentPhase === "OG_SALE";

  const handleSwitchNetwork = async () => {
    try {
      await switchChain({ chainId: 10143 });
    } catch (error) {
      console.error("Network switching error:", error);
      alert(
        "Erreur lors du changement de réseau. Veuillez essayer de changer manuellement dans votre wallet."
      );
    }
  };

  const handleMint = async () => {
    try {
      setMintingStep("preparing");

      if (chainId !== 10143) {
        await handleSwitchNetwork();
        return;
      }

      const result = await mintWithSignature();
      setMintingStep("confirming");
      if (result) {
        setMintingStep("success");
      } else {
        setMintingStep("idle");
      }
    } catch (error) {
      console.error("Mint error:", error);
      setMintingStep("error");
    }
  };

  const isSoldOut = totalMinted >= maxSupply;
  const userCanMint =
    canCurrentlyMint && !isPaused && (!whitelistOnly || isWhitelisted);

  return (
    <>
      <MintedNFTModal
        mintingStep={mintingStep}
        onClose={() => setMintingStep("idle")}
        mintedTokenId={lastMintedTokenId?.toString()}
      />
      <main className="min-h-screen font-montserrat w-screen text-white flex flex-col sm:pt-0 transition-all duration-1000 ease-in-out relative justify-center">
        <BackgroundWrapper />
        <Header />
        <div className="relative z-10 mt-[260px] sm:mt-[350px] lg:-mt-[150px]">
          <div className="max-w-[2200px] w-[90%] mx-auto mt-[40px] lg:mt-[220px] flex lg:flex-row flex-col  lg:justify-between">
            <div className="max-w-[436px] flex-col lg:items-start items-center text-white font-medium text-xl hidden lg:flex">
              <div className="w-full p-5 sm:p-9 rounded-xl bg-[#ffffff13] border border-[rgba(255,255,255,0.37)] relative">
                <h1
                  className="uppercase text-white text-3xl mb-1"
                  style={{
                    fontWeight: "900",
                  }}
                >
                  300 Lost discs.
                </h1>
                <p
                  className="text-white/90 text-base text-center sm:text-left sm:text-lg font-light"
                  style={{
                    fontWeight: "300",
                  }}
                >
                  4 energy codes. One path to unlock the legend. Each disc holds
                  a fragment of the Legendary Code - echoing Astraea&apos;
                  memory, resonating with NADS, pulsing through the Monad
                  ecosystem, and sparking ancient legacy. Mint now to receive
                  one of four mysterious traits, each unlocking real benefits
                  from Monshape or its ecosystem partners.
                </p>
              </div>
            </div>
            {/* MINT BUTTON */}
            <div className="max-w-[466px] w-full lg:mx-0 mx-auto">
              <div className="w-full flex flex-col items-center justify-center">
                {address && isWrongNetwork ? (
                  <Button
                    style={{
                      fontWeight: "800",
                      background:
                        "linear-gradient(90deg, #49FFFF70 0%, #9900FF70 100%)",
                      boxShadow: "0px 0px 7.1px 1px #5F2AFF",
                    }}
                    onClick={handleSwitchNetwork}
                  >
                    Switch Network
                  </Button>
                ) : null}

                {!address && (
                  <WalletModal open={open} setOpen={setOpen}>
                    <Button
                      style={{
                        fontWeight: "800",
                        background:
                          "linear-gradient(90deg, #49FFFF70 0%, #9900FF70 100%)",
                        boxShadow: "0px 0px 7.1px 1px #5F2AFF",
                      }}
                      onClick={() => setOpen(true)}
                    >
                      Connect Wallet
                    </Button>
                  </WalletModal>
                )}

                {address && !isWrongNetwork && (
                  <div className="flex items-center flex-col lg:flex-row gap-3 w-full mb-0 uppercase">
                    {isSoldOut ? (
                      <Button
                        style={{
                          fontWeight: "800",
                        }}
                      >
                        Sold out!
                      </Button>
                    ) : userCanMint ? (
                      <div className="flex items-center gap-5 w-full justify-center">
                        <Button
                          style={{
                            fontWeight: "800",
                            background:
                              "linear-gradient(90deg, #49FFFF70 0%, #9900FF70 100%)",
                            boxShadow: "0px 0px 7.1px 1px #5F2AFF",
                          }}
                          className={`
                          ${
                            mintingStep === "idle" ||
                            mintingStep === "preparing" ||
                            mintingStep === "confirming"
                              ? "bg-[#A314B4] hover:bg-opacity-80"
                              : mintingStep === "success"
                              ? "bg-[#241F6F]"
                              : "bg-[#858585] cursor-not-allowed"
                          } 
                        `}
                          onClick={handleMint}
                          disabled={
                            mintingStep !== "idle" && mintingStep !== "error"
                          }
                        >
                          {mintingStep === "preparing" && (
                            <div className="flex items-center gap-2">
                              Preparing...
                            </div>
                          )}
                          {mintingStep === "confirming" && (
                            <div className="flex items-center gap-2">
                              Confirmation...
                            </div>
                          )}
                          {mintingStep === "success" && (
                            <div className="flex items-center gap-2">
                              Success
                            </div>
                          )}
                          {mintingStep === "idle" && (
                            <>
                              <div className="w-full">MINT</div>
                            </>
                          )}
                        </Button>
                      </div>
                    ) : !userCanMint ? (
                      <Button
                        style={{
                          fontWeight: "800",
                          background:
                            "linear-gradient(90deg, #49FFFF70 0%, #9900FF70 100%)",
                          boxShadow: "0px 0px 7.1px 1px #5F2AFF",
                        }}
                      >
                        NOT ELIGIBLE
                      </Button>
                    ) : (
                      <Button
                        style={{
                          fontWeight: "800",
                          background:
                            "linear-gradient(90deg, #49FFFF70 0%, #9900FF70 100%)",
                          boxShadow: "0px 0px 7.1px 1px #5F2AFF",
                        }}
                      >
                        MINTED
                      </Button>
                    )}
                  </div>
                )}

                {/* USER STATUS */}
                {/* <div className="flex justify-between items-center mb-3">
                  <div
                    className={`pb-1 rounded-full flex items-center text-base sm:text-xl`}
                  >
                    <div
                      className={`${
                        isUserWL || isUserFCFS || isUserTeam
                          ? "bg-green-600"
                          : "bg-red-600"
                      } h-4 w-4 mr-3 `}
                    />

                    {isDisconnected
                      ? "NOT CONNECTED"
                      : isUserTeam
                      ? "ELIGIBLE TEAM"
                      : isUserWL
                      ? "ELIGIBLE WL"
                      : isUserFCFS
                      ? "ELIGIBLE FCFS"
                      : "NOT ELIGIBLE"}
                  </div>
                  {address && (
                    <div className="text-center">
                      <span className="text-base sm:text-xl text-gray-300 uppercase">
                        mints:
                      </span>
                      <span className="ml-2 text-base sm:text-xl text-white font-medium">
                        {userMints}/{maxMintsPerAddress}
                      </span>
                    </div>
                  )}
                </div> */}

                <div className="mt-4 sm:mt-6 w-full">
                  <div
                    className="w-full h-4 rounded-full overflow-hidden border border-white/30"
                    style={{
                      boxShadow: "0px 0px 7.1px 1px #5F2AFF",
                      background: "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <div
                      className="h-full transition-all duration-500"
                      style={{
                        width: `${(totalMinted / (maxSupply || 1000)) * 100}%`,
                        background:
                          "linear-gradient(90deg, #49FFFF 0%, #9900FF 100%)",
                      }}
                    ></div>
                  </div>
                  <div
                    className="flex justify-between items-center mt-4"
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    <span className="text-base sm:text-xl text-gray-200 uppercase">
                      Total minted
                    </span>
                    <span className="text-base sm:text-xl font-medium text-white">
                      {totalMinted || 0} / {maxSupply || 377}
                    </span>
                  </div>
                  <div className="h-[1px] w-full bg-white/50 my-2 sm:my-4" />
                  <div className="flex items-center justify-between">
                    <p
                      className="text-white font-medium text-base sm:text-xl sm:text-[20px] mb-4 uppercase"
                      style={{
                        background:
                          "linear-gradient(90deg, #49FFFF 0%, #9900FF 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: "700",
                      }}
                    >
                      Current phase:{" "}
                      <span className="">
                        {mintPhaseInfo?.currentPhase ===
                        "First Come First Served"
                          ? "FCFS"
                          : mintPhaseInfo?.currentPhase === "Team Only"
                          ? "TEAM"
                          : mintPhaseInfo?.currentPhase === "Whitelist"
                          ? "WHITELIST"
                          : "ENDED"}
                      </span>
                    </p>
                    {/* <p className="text-white font-bold text-lg sm:text-[22px] uppercase">
                        {!isSoldOut && (
                          <CountdownTimer
                            currentPhase={mintPhaseInfo?.currentPhase}
                          />
                        )}
                      </p> */}
                  </div>
                </div>
              </div>
              <UserNFTs />{" "}
            </div>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-[20px] sm:bottom-[50px] right-[20px] sm:right-[60px] gap-4 z-50 flex">
        <a
          href="https://monshape.club"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icon/Footer_monshapeLogo.svg"
            alt="Monshape"
            className="h-[25px] w-[25px] hover:scale-110 transition-all duration-300"
          />
        </a>
        <a
          href="https://discord.gg/monshape"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icon/Footer_DiscordLogo.svg"
            alt="Discord"
            className="h-[25px] w-[25px] hover:opacity-80 transition-opacity"
          />
        </a>
        <a
          href="https://x.com/Monshape"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icon/Footer_XLogo.svg"
            alt="Twitter"
            className="h-[25px] w-[25px] hover:opacity-80 transition-opacity"
          />
        </a>
        <a
          href="https://monshapes-documents.gitbook.io/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icon/Footer_Gitbookicon.svg"
            alt="Gitbook"
            className="h-[25px] w-[25px] hover:opacity-80 transition-opacity"
          />
        </a>
      </footer>
      <AudioPlayer />
    </>
  );
}
