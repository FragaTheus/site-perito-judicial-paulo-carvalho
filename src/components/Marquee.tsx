import Marquee from "react-fast-marquee";

const logos = [
  "/logos/embraer.png",
  "/logos/cptm.png",
  "/logos/gpa.png",
  "/logos/tejofran.png",
  "/logos/mrs.png",
  "/logos/semar.png",
  "/logos/padrao.png",
  "/logos/veran.png",
  "/logos/suzano.png",
  "/logos/sindserv.png",
];

export const MyMarquee = () => {
  return (
    <Marquee
      gradient={false}
      speed={60}
      pauseOnHover={false}
      style={{ width: "100%" }}
    >
      {logos.map((m, i) => (
        <img
          key={i}
          src={m}
          style={{
            margin: 4,
            height: "150px",
            objectFit: "contain",
            width: "200px",
            padding: "40px",
          }}
        ></img>
      ))}
    </Marquee>
  );
};
