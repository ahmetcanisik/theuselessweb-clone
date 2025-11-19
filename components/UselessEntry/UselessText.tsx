import {clsx} from "clsx";
import {memo} from "react";

function UselessText({ texts }: { texts: string[] }) {
    return (
        <div className="text-7xl">
            {texts.map((text, index) => (
                <div className={clsx(
                    "useless-text",
                    {
                        "text-[30px]": text === "TO ANOTHER",
                    }
                )} key={index}>{text}</div>
            ))}
        </div>
    );
}

export default memo(UselessText);