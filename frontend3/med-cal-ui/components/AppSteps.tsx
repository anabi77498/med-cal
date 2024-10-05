import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {GiftIcon, MapIcon, MedalIcon, PlaneIcon} from "lucide-react";

interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const features: FeatureProps[] = [
    {
        icon: <MedalIcon />,
        title: "Accessibility",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    },
    {
        icon: <MapIcon />,
        title: "Community",
        description:
            "Learn what could be affecting you. Bring up relevant conversations to your doctor. This is a starting point and a solution",
    },
    {
        icon: <PlaneIcon />,
        title: "Exporting",
        description:
            "Use our tool to generate the data and advice you need, and take it to wherever works best for you. Fully integrable with Apple Calendar, Google Calendar and More",
    },
    {
        icon: <GiftIcon />,
        title: "Gamification",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    },
];

export default function AppSteps () {
    return (
        <section
            id="steps"
            className="container text-center py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold ">
                How It{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
                Step-by-Step Guide
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                Heres how we give you accurate and update information on your local health
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map(({ icon, title, description }: FeatureProps) => (
                    <Card
                        key={title}
                        className="bg-muted/50"
                    >
                        <CardHeader>
                            <CardTitle className="grid gap-4 place-items-center">
                                {icon}
                                {title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>{description}</CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};