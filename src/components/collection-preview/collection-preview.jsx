import React from "react";
import "./collection-preview.scss";
import { Link } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
      <div className="preview-btn-container">
        <Link className="preview-button" to={`shop/${title.toLowerCase()}`}>
          More {title}
        </Link>
      </div>
    </div>
  );
};

export default CollectionPreview;
