import React from "react";
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";

export default function Entries() {

  const cld = new Cloudinary({
    cloud: {
      cloudname: 'demo'
    }
  });

  const myImage = cld.image('docs/models');

  myImage.resize(fill().width(250).height(250));

  return  (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>

  );
}
