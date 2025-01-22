// import Banner from "../components/Banner";

import Banner from "./Banner";
import HeighLights from "./overview/HeighLights";
import RestuarantDetails from "./RestuarantDetails";

const Home = () => {
  return (
    <div>
      <Banner />
      <RestuarantDetails />
      <HeighLights />
    </div>
  );
};

export default Home;
