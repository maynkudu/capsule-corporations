"use client";
import { useEffect, useState } from "react";
import './cookie-popup.css'

export default function CookiePopup() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Check localStorage for consent
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setShow(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "true");
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="fixed bottom-8 right-4 bg-[#222222] text-white p-8 shadow-lg z-50 max-w-md font-poppins w-full mx-4">
            <p className="text-sm mb-5">
                This website uses cookies to ensure you get the best experience on our
                website.{" "}
                <a
                    href="/cookies-policy/"
                    className="cta"
                >
                    <span className="hover-underline-animation px-0.5">
                        Cookies Policy
                    </span>
                </a>
            </p>
            <div
                onClick={acceptCookies}
                className="button-borders ml-1"
            >
                <button className="primary-button">
                    GOT IT
                </button>
            </div>
        </div>
    );
}
