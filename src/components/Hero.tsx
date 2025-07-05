import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { WavesBackground } from "@/components/ui/waves-background";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const Hero = () => {
    return (
        <main className="overflow-x-hidden">
            <WavesBackground />
            <section>
                <div className="py-24 md:pb-32 lg:pb-36 lg:pt-32">
                    <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                        <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                            <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl text-white">Powering Tomorrow's Possibilities</h1>
                            <p className="mt-8 max-w-2xl text-balance text-lg text-white/70">We bridge the gap between customers and services through reliable, scalable IT ecosystems.</p>

                            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                <Button
                                    size="lg"
                                    className="h-12 rounded-full pl-5 pr-3 text-base">
                                    <span className="text-nowrap">Connect With Us</span>
                                    <ChevronRight className="ml-1" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="ghost"
                                    className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                                    <span className="text-nowrap">Learn More</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-transparent pb-2">
                <div className="group relative m-auto max-w-7xl px-6">
                    <div className="flex flex-col items-center md:flex-row">
                        <div className="md:max-w-44 md:border-r md:pr-6">
                            <p className="text-end text-sm text-white/70">Our Technology Partners</p>
                        </div>
                        <div className="relative py-6 md:w-[calc(100%-11rem)]">
                            <InfiniteSlider
                                duration={40}
                                durationOnHover={20}
                                gap={112}>
                                <div className="flex">
                                    <img
                                        className="mx-auto h-8 w-fit filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                        src="https://cpwowrsesrefnugctpos.supabase.co/storage/v1/object/public/logos//Google_2015_logo.svg.png"
                                        alt="Google Logo"
                                        height="32"
                                        width="auto"
                                    />
                                </div>
                                <div className="flex">
                                    <img
                                        className="mx-auto h-10 w-fit filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                        src="https://cpwowrsesrefnugctpos.supabase.co/storage/v1/object/public/logos//NET_BIG.W-f674e786.png"
                                        alt=".NET Logo"
                                        height="40"
                                        width="auto"
                                    />
                                </div>
                                <div className="flex">
                                    <img
                                        className="mx-auto h-8 w-fit filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                        src="https://cpwowrsesrefnugctpos.supabase.co/storage/v1/object/public/logos//pngimg.com%20-%20microsoft_PNG3.png"
                                        alt="Microsoft Logo"
                                        height="32"
                                        width="auto"
                                    />
                                </div>
                                <div className="flex">
                                    <img
                                        className="mx-auto h-8 w-fit filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                        src="https://cpwowrsesrefnugctpos.supabase.co/storage/v1/object/public/logos//Supabase_Logo.png"
                                        alt="Supabase Logo"
                                        height="32"
                                        width="auto"
                                    />
                                </div>
                                <div className="flex">
                                    <img
                                        className="mx-auto h-10 w-fit filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                        src="https://cpwowrsesrefnugctpos.supabase.co/storage/v1/object/public/logos//pngimg.com%20-%20apple_logo_PNG19680.png"
                                        alt="Apple Logo"
                                        height="40"
                                        width="auto"
                                    />
                                </div>
                                <div className="flex">
                                    <img
                                        className="mx-auto h-8 w-fit filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                        src="https://cpwowrsesrefnugctpos.supabase.co/storage/v1/object/public/logos//github.png"
                                        alt="GitHub Logo"
                                        height="32"
                                        width="auto"
                                    />
                                </div>
                                <div className="flex">
                                    <img
                                        className="mx-auto h-8 w-fit filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                        src="https://cpwowrsesrefnugctpos.supabase.co/storage/v1/object/public/logos//282-2824123_stripe-logo-png-stripe-logo-white-transparent-clipart.png"
                                        alt="Stripe Logo"
                                        height="32"
                                        width="auto"
                                    />
                                </div>
                            </InfiniteSlider>

                            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                            <ProgressiveBlur
                                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                direction="left"
                                blurIntensity={1}
                            />
                            <ProgressiveBlur
                                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                direction="right"
                                blurIntensity={1}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Hero;