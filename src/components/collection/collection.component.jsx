import { getByTitle } from "@testing-library/dom";
import React from "react";
import CollectionItem from "../collection-items/collection-item.component";

import './collection.styles.scss'

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...OtherItemProps }) => (
                    <CollectionItem key={id} {...OtherItemProps} />
                ))}
        </div>
    </div>
);

export default CollectionPreview;