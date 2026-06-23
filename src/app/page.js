import Booking from "@/Component/Booking";
import CardSection from "@/Component/CardSection";
import HeroSection from "@/Component/HeroSection";
import Navbar from "@/Component/Navbar";
import RoomCard from "@/Component/HeadingCard";

export default function Home() {
  return (
  <div className="bg-white">
    <Navbar/>
    <HeroSection/>
    <RoomCard/>
    <CardSection/>
    <Booking/>
    {/* <Button/> */}
    
    
  </div>
  );
}
