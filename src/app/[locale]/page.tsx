import { AboutUs } from "@/components/HomePage/AboutUsSection/AboutUs";
import { Hero } from "@/components/HomePage/Hero/Hero";
import { Services } from "@/components/HomePage/ServicesSection/Services";
import { Toolkits } from "@/components/HomePage/Toolkits/Toolkits";
import { VideoSection } from "@/components/HomePage/VideoSection/VideoSection";

export default function Home() {
    return (
        <>
            <Hero />
            <AboutUs />
            <Services />
            <Toolkits />
            <VideoSection />
        </>
    );
}
