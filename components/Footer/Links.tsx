import Link from "next/link";
import { type Links } from "@/helpers/types";
import {memo} from "react";

function Links({ links }: { links: Links[] }) {
    return (
        <div className="flex gap-4 justify-center items-center">
            {links.map((link, index) => (
                <Link className="link" key={index} href={link.url}>{link.addPrefix ? link.addPrefix : "⋆"} {link.label}</Link>
            ))}
        </div>
    );
}

export default memo(Links);