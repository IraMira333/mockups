import { Section } from "@/shared/Section";

export const VideoSection = () => {
    return (
        <Section className="pt-10 pb-[80px]">
            <video
                width="320"
                height="240"
                controls
                preload="none"
                poster="/servicesImage1.png"
            >
                <source
                    src="https://drive.google.com/uc?id=1yd8mVGkVjrZ-y4FxpUcZVPRoSx3zeUOJ&export=download"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </Section>
    );
};
