// import Banner from "../components/Banner";

import Banner from "./Banner";
// import OverView from "./overview/OverView";
import RestuarantDetails from "./RestuarantDetails";

const Home = () => {
  return (
    <div className="pb-20">
      <Banner />
      <RestuarantDetails />
    </div>
  );
};

export default Home;
