import UselessButton from "./UselessButton";
import UselessText from "./UselessText";
import { useless_message} from "@/helpers/data";
import {memo} from "react";

function UselessEntry() {
    return (
        <div className="mt-24 gap-2 w-sm flex flex-col justify-center items-center text-center">
            <UselessText texts={useless_message} />
            <UselessButton />
        </div>
    );
}

export default memo(UselessEntry);