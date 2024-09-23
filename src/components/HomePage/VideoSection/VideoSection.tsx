import { Section } from "@/shared/Section";

export const VideoSection = () => {
    return (
        <Section id="showreel" className="pt-10 pb-[80px]">
            <video
                width="1320"
                height="742.5"
                controls
                preload="none"
                poster="/poster.png"
                className=" aspect-[288/162]"
            >
                <source src="/media/presentation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Section>
    );
};
