import React from "react";

const Image = (props: { src: string | undefined; }) => {
    if (!!props.src) {
        return <img src={props.src} />;
    }
    return null;
};

const Media = (props: { contentState: { getEntity: (arg0: any) => any; }; block: { getEntityAt: (arg0: number) => any; }; }) => {
    const entity = props.contentState.getEntity(props.block.getEntityAt(0));
    const { src } = entity.getData();
    const type = entity.getType();

    let media;

    if (type === "image") {
        media = <Image src={src} />;
    }

    return media;
};

const mediaBlockRenderer = (block: { getType: () => string; }) => {
    if (block.getType() === "atomic") {
        return {
            component: Media,
            editable: false
        };
    }
    return null;
};

export default mediaBlockRenderer;