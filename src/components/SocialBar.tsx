import React from "react";
import { Facebook } from "./svgs/Facebook";
import { Instagram } from "./svgs/Instagram";
import { Twitter } from "./svgs/Twitter";
const link = (Comp: JSX.Element, href: string): JSX.Element => {
    return (
        <a href={href} className="hoverable">
            {Comp}
        </a>
    );
}
export const SocialBar: React.FC = () => {
    return (
        <section className="social-media flex" id="social-media">
            {link(<Facebook />, 'https://www.facebook.com/The-Stable-Club-104182435234207')}
            {link(<Instagram />, 'https://instagram.com')}
            {link(<Twitter />, 'https://twitter.com')}
        </section>
    );
}