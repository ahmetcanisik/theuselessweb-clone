import {memo} from "react";
import Link from "next/link";

import Links from "./Links";
import { links } from "@/helpers/data";


function Footer() {
    return (
        <div className="w-full flex flex-col justify-center items-center hover:border-t-4 hover:border-t-pink-500 bg-slate-950 text-white h-24">
            <Link className="link" href="/about">Read About The Sites</Link>
            <div>The Useless Web Clone... because some websites, we just couldn&apos;t do without.</div>
            <Links links={links} />
        </div>
    );
}

export default memo(Footer);