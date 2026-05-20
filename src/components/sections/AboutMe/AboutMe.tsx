import { AboutMeFirstWorks } from "./AboutMeFirstWorks";
import { AboutMeHeader } from "./AboutMeHeader";
import { AboutMeMyBeginnings } from "./AboutMeMeginnings";
import { AboutMeUrpe } from "./AboutMeUrpe";

export const AboutMe = ({
	open,
	setCurrentContent,
}: {
	open: boolean;
	setCurrentContent: (key: string | null) => void;
}) => {
	return (
		<div className={`about-me ${open && "open"}`}>
			<AboutMeHeader open={open} />
			{open && (
				<div className="about-me__first-works">
					<AboutMeUrpe />
					<AboutMeFirstWorks setCurrentContent={setCurrentContent} />
					<AboutMeMyBeginnings />
				</div>
			)}
		</div>
	);
};
