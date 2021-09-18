import { useState } from "react";
import Overlay from "../layouts/Overlay";
import HomeNav from "../layouts/HomeNav";
import Container from "../layouts/Container";
import RandomImage1 from "../assets/shoes.jpg";
import RandomImage2 from "../assets/football.jpg";
import RandomImage3 from "../assets/tv.jpg";
import styles from "../layouts/header.module.css";

const Home = () => {
  const images = [RandomImage1, RandomImage2, RandomImage3];
  const [imgId] = useState(0);
  const backgroud = {
    backgroundImage: "url('./bg.jpg')",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     setImageId(prev => (prev +1)% images.length)
  //   },3000);
  // },[]);
  return (
    <div>
      <header className={styles.header} style={backgroud}>
        <Overlay />
        <div className="relative z-10 text-white">
          <HomeNav />
          <Container>
            <section className="mt-12 p-4">
              <div className="h-2 w-32 bg-purple-700 rounded"></div>
              <div className="mt-4 flex">
                <h1
                  className="text-5xl flex-1 font-semibold  md:text-6xl lg:text-7xl md:font-bold"
                  style={{ lineHeight: "1.1" }}
                >
                  Modern Reliable Fast services. The right place for everything
                  you need.{" "}
                </h1>
                <div className="h-80 w-72 hidden lg:block border-r-4 border-t-4 bg-purple-700 p-2 border-purple-400">
                  <img
                    className="object-cover h-full w-full mt-2 mr-3 rounded-md transform shadow-lg -rotate-2"
                    src={images[imgId]}
                    alt="random products"
                  />
                </div>
              </div>
            </section>
          </Container>
        </div>
      </header>
    </div>
  );
};

export default Home;
