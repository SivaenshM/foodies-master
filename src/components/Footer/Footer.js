import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHeart, faCode } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className="bg-background-tertiary text-copy-primary flex flex-row sm:flex-col sm:text-center sm:justify-around  bg-gray-800 h-32">
            <div className="container flex flex-col justify-center ml-12 sm:ml-0">
                <p className="text-gray-500 text-lg sm:text-sm">
                    Build for Foodies
                </p>
            </div>
        </div>
    );
}

export default Footer;
