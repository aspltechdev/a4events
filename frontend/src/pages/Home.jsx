// function Home() {
//   return (
//     <div>
//       <h1>A4 Events</h1>
//       <p>Welcome to A4 Events Website</p>
//     </div>
//   );
// }

import About from "../components/home/About";
import ContactCTA from "../components/home/ContactCTA";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Gallery from "../components/home/Gallery";
import Hero from "../components/home/Hero";
import Testimonials from "../components/home/Testimonials";
import UpcomingEvents from "../components/home/UpcomingEvents";
import WhyChooseUs from "../components/home/WhyChooseUs";
import PublicLayout from "../layouts/PublicLayout";








function Home() {
  return (
    <PublicLayout>
<Hero/>
<About/>
<FeaturedProducts/>
<UpcomingEvents/>
<WhyChooseUs/>
<ContactCTA/>
<Gallery/>
<Testimonials/>
    </PublicLayout>
  );
}

export default Home;