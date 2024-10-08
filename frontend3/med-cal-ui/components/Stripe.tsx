import {Button} from "./ui/button";

export default function Stripe() {
    return (
        <section
            id="stripe"
            className="bg-muted/50 py-16 my-24 sm:my-32 "
        >
            <div className="container lg:grid lg:grid-cols-2 place-items-center mx-20">
                <div className="lg:col-start-1">
                    <h2 className="text-3xl md:text-4xl font-bold ">
                        All Your
                        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
                            Health & Scheduling{" "}
            </span>
                        In One Interface
                    </h2>
                    <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
                        Learn about what works for you. How you health is impacted today. Medications and tests are
                        complicated. Let us simplify it for you.
                    </p>
                </div>

                <div className="space-y-4 lg:col-start-2">
                    <Button className="w-full md:mr-4 md:w-auto">Request a Demo</Button>
                    <Button
                        variant="outline"
                        className="w-full md:w-auto"
                    >
                        View all features
                    </Button>
                </div>
            </div>
        </section>
    );
};