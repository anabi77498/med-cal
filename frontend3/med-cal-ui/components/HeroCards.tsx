import { Button, buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Check, Calendar } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function HeroCards() {
    return (
        <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[600px] h-[600px]">
            {/* Testimonial */}
            <Card className="absolute w-[300px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    {/*<Avatar>*/}
                    {/*    <AvatarImage*/}
                    {/*        alt=""*/}
                    {/*        src="https://github.com/shadcn.png"*/}
                    {/*    />*/}
                    {/*    <AvatarFallback>SH</AvatarFallback>*/}
                    {/*</Avatar>*/}

                    <div className="flex flex-col">
                        <CardTitle className="text-lg">Personalized Medical Advice</CardTitle>
                        <CardDescription>See what works for you</CardDescription>
                    </div>
                </CardHeader>

                <CardContent>See what you might be susceptible to</CardContent>
            </Card>

            {/* Team */}
            <Card className="absolute right-[20px] top-4 w-64 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                    {/*<img*/}
                    {/*    src="https://i.pravatar.cc/150?img=58"*/}
                    {/*    alt="user avatar"*/}
                    {/*    className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"*/}
                    {/*/>*/}
                    <Calendar/>
                    <CardTitle className="text-center">Calendar</CardTitle>
                    <CardDescription className="font-normal text-primary ">
                        Schedule Years in Advance
                    </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-10">
                    <p>
                        Get reminders, doctors appointments, checkups notifications and more
                    </p>
                </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="absolute top-[150px] left-[20px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader>
                    <CardTitle className="flex item-center justify-between">
                        Free
                        {/*<Badge*/}
                        {/*    variant="secondary"*/}
                        {/*    className="text-sm text-primary"*/}
                        {/*>*/}
                        {/*    Most popular*/}
                        {/*</Badge>*/}
                    </CardTitle>
                    <div>
                        <span className="text-3xl font-bold">$0</span>
                        <span className="text-muted-foreground"> /month</span>
                    </div>

                    <CardDescription>
                        100% Access to all our features, tools, and advice
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Button className="w-full">Sign Up Today</Button>
                </CardContent>

                <hr className="w-4/5 m-auto mb-4" />

                <CardFooter className="flex">
                    <div className="space-y-4">
                        {["Unlimited Events and Reminders", "Personalized Advice", "Easily Integratable"].map(
                            (benefit: string) => (
                                <span
                                    key={benefit}
                                    className="flex"
                                >
                  <Check className="text-green-500" />{" "}
                                    <h3 className="ml-2">{benefit}</h3>
                </span>
                            )
                        )}
                    </div>
                </CardFooter>
            </Card>

            {/* Service */}
            <Card className="absolute w-[200px] -right-[0px] bottom-[20px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    </div>
                    <div>
                        <CardTitle>Light & dark mode</CardTitle>
                        <CardDescription className="text-md mt-2">
                            Lorem ipsum dolor sit amet consect adipisicing elit. Consectetur
                            natusm.
                        </CardDescription>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
};