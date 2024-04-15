import Navbar from "../../components/navbars/navbar";

export default function Landing() {
  const link = "https://google.com";
  return (
    <>
      <Navbar />
      <img src="top-right.svg" className="fixed right-0" alt="top-right"></img>
      <img
        src="bottom-right.svg"
        className="fixed bottom-0 right-0"
        alt="bottom-right"
      ></img>
      <img
        src="bottom-left.svg"
        className="fixed bottom-0 left-0"
        alt="bottom-left"
      ></img>
      <div className="flex justify-center w-screen h-screen z-50">
        <div className="grid grid-cols-2 gap-5 w-2/3 m-auto">
          <div className="flex flex-col justify-center gap-5">
            <h1 className="text-5xl font-bold">DOWNLOAD THIS APP</h1>
            <h2 className="text-xl font-semibold">
              HIVE PAY is a decentralized payment solution built on the HIVE
              blockchain, revolutionizing the way transactions are conducted in
              the digital economy.
            </h2>
            <div className="flex justify-between items-center">
              <div className="flex flex-col justify-between h-full">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white rounded-lg flex gap-1 p-2 w-64 justify-evenly items-center"
                >
                  <img
                    src="/playstoreIcon.svg"
                    className="h-12 w-12"
                    alt="playstore-icon"
                  ></img>
                  <div>
                    <h3 className="text-sm">available now</h3>
                    <p className="text-2xl">PLAYSTORE</p>
                  </div>
                </a>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white rounded-lg flex gap-1 p-2 w-64 justify-evenly items-center"
                >
                  <img
                    src="/appleIcon.png"
                    className="h-14 w-14 rounded-full"
                    alt="apple-icon"
                  ></img>
                  <div>
                    <h3 className="text-sm">available now</h3>
                    <p className="text-2xl">APPLESTORE</p>
                  </div>
                </a>
              </div>
              <img
                src="/scannerImage.png"
                alt="scanner"
                className="h-40 w-40"
              ></img>
            </div>
          </div>
          <img
            src="./landingImage.svg"
            alt="scanner"
            className="absolute right-0"
            style={{ zIndex: -1 }}
          ></img>
        </div>
      </div>
    </>
  );
}
