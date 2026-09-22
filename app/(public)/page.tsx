import EventSlider from "@/components/event-slider";
import Header from "@/components/header";
import Search from "@/components/search";

export default function Home() {
  return (
    <div>
      <Header />
      <Search />
      <EventSlider />
    </div>
  );
}
