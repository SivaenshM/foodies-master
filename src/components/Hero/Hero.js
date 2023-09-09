import React from "react";
import "../../tailwind.generated.css";
import classes from "./Hero.module.css";

function Hero() {
    return (
        <div className={classes.Hero}>
    <div className="font-sans py-6 px-12 h-full flex content-between justify-between md:justify-around flex-row md:flex-col">
        <div className="self-center md:text-center p-4">
            <h1>Discover Flavor</h1>
            <h2>Savor Life</h2>
        </div>
        <div className="self-center md:text-justify max-w-xl p-4">
            <p className="text-base">
                Exploring the world of flavors and savoring life to the fullest is a delightful journey. A flavorful diet is the key to a joyful existence. It goes beyond just food; it's an experience that nourishes not only your body but also your soul. Embrace the richness of life through a diverse and flavorful culinary adventure. There are countless reasons why savoring delicious cuisine is so rewarding.
            </p>
        </div>
    </div>
</div>

    );
}

export default Hero;
