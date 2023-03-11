import React from "react";
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";
import { Container } from "react-bootstrap";

export default function Entries() {

  const cld = new Cloudinary({
    cloud: {
      cloudname: 'demo'
    }
  });

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image('docs/models');

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(250).height(250));

  return  (
    <div className="mt-4">
      <Container>
        <div className = "cardproduct">
          <AdvancedImage cldImg={myImage} />
          <div className="cardproductinfos">
            <h2>Product name</h2>
            <p>Product description with <strong>relevant info</strong> only.</p>
          </div>
        </div>

        <div className = "cardproduct">
          <AdvancedImage cldImg={myImage} />
          <div className="cardproductinfos">
            <h2>Product name</h2>
            <p>Product description with <strong>relevant info</strong> only.</p>
          </div>
        </div>

        <div className = "cardproduct">
          <AdvancedImage cldImg={myImage} />
          <div className="cardproductinfos">
            <h2>Product name</h2>
            <p>Product description with <strong>relevant info</strong> only.</p>
          </div>
        </div>

        <div className = "cardproduct">
          <AdvancedImage cldImg={myImage} />
          <div className="cardproductinfos">
            <h2>Product name</h2>
            <p>Product description with <strong>relevant info</strong> only.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
