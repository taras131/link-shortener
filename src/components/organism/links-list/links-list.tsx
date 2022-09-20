import React, {FC} from "react";
import Link from "../../molecules/link/link";
import {ILink} from "../../../models/i-link";

interface ILinksList {
    links: ILink[],
    offset: number
}

const LinksList: FC<ILinksList> = ({links, offset}) => {
    return (
        <>
            {links.map((item, index) => <Link index={index} {...item}
                                              key={item.id} offset={offset}/>)}
        </>
    );
};

export default LinksList;