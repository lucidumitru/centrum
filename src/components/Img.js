import useBaseUrl from "@docusaurus/useBaseUrl";
import cn from "classnames";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Img = ({ className, src, alt = "", lazy = true, ...attrs }) => {
    const [ isOpen, setOpen ] = useState(false);
    const url = useBaseUrl(src);

    return (
        <>
            <picture
                onClick={() => setOpen(true)}
            >
                <source srcSet={`${url}.webp`} type="image/webp"/>
                <img
                    className={cn(className, "img-responsive", "gallery")}
                    src={url}
                    alt={alt}
                    {...attrs}
                    loading={lazy ? "lazy" : undefined}
                />
            </picture>
            <Lightbox
                open={isOpen}
                close={() => setOpen(false)}
                controller={{ closeOnBackdropClick: true }}
                render={{
                    buttonPrev: () => null,
                    buttonNext: () => null,
                }}
                slides={[
                    { src: url },
                ]}
            />
        </>
    );
};

export default Img;