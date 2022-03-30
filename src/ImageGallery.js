
import * as React from 'react';
import { ImageList, ImageListItem } from '@mui/material/';

//import images
import JPG1 from "./assets/1.JPG";
import JPG2 from "./assets/2.JPG";
import JPG3 from "./assets/3.JPG";
import JPG4 from "./assets/4.JPG";
import JPG5 from "./assets/5.JPG";
import JPG6 from "./assets/6.JPG";
import JPG7 from "./assets/7.JPG";
import JPG8 from "./assets/8.JPG";
import JPG9 from "./assets/9.JPG";

import JPG10 from "./assets/10.JPG";
import JPG11 from "./assets/11.JPG";
import JPG12 from "./assets/12.JPG";
import JPG13 from "./assets/13.JPG";
import JPG14 from "./assets/14.JPG";
import JPG15 from "./assets/15.JPG";
import JPG16 from "./assets/16.JPG";
import JPG17 from "./assets/17.JPG";
import JPG18 from "./assets/18.JPG";
import JPG19 from "./assets/19.JPG";

import JPG20 from "./assets/20.JPG";
import JPG21 from "./assets/21.JPG";
import JPG22 from "./assets/22.JPG";
import JPG23 from "./assets/23.JPG";
import JPG24 from "./assets/24.JPG";
import JPG25 from "./assets/25.JPG";
import JPG26 from "./assets/26.JPG";
import JPG27 from "./assets/27.JPG";
import JPG28 from "./assets/28.JPG";
import JPG29 from "./assets/29.JPG";

import JPG30 from "./assets/30.JPG";
import JPG31 from "./assets/31.JPG";
import JPG32 from "./assets/32.JPG";
import JPG33 from "./assets/33.JPG";
import JPG34 from "./assets/34.JPG";
import JPG35 from "./assets/35.JPG";
import JPG36 from "./assets/36.JPG";
import JPG37 from "./assets/37.JPG";
import JPG38 from "./assets/38.JPG";
import JPG39 from "./assets/39.JPG";

import JPG40 from "./assets/40.JPG";
import JPG41 from "./assets/41.JPG";
import JPG42 from "./assets/42.JPG";
import JPG43 from "./assets/43.JPG";
import JPG44 from "./assets/44.JPG";
import JPG45 from "./assets/45.JPG";
import JPG46 from "./assets/46.JPG";
import JPG47 from "./assets/47.JPG";
import JPG48 from "./assets/48.JPG";
import JPG49 from "./assets/49.JPG";

import JPG50 from "./assets/50.JPG";
import JPG51 from "./assets/51.JPG";
import JPG52 from "./assets/52.JPG";
import JPG53 from "./assets/53.JPG";
import JPG54 from "./assets/54.JPG";
import JPG55 from "./assets/55.JPG";
import JPG56 from "./assets/56.JPG";
import JPG57 from "./assets/57.JPG";
import JPG58 from "./assets/58.JPG";
import JPG59 from "./assets/59.JPG";

import JPG60 from "./assets/60.JPG";
import JPG61 from "./assets/61.JPG";
import JPG62 from "./assets/62.JPG";
import JPG63 from "./assets/63.JPG";
import JPG64 from "./assets/64.JPG";
import JPG65 from "./assets/65.JPG";
import JPG66 from "./assets/66.JPG";
import JPG67 from "./assets/67.JPG";
import JPG68 from "./assets/68.JPG";
import JPG69 from "./assets/69.JPG";


import JPG70 from "./assets/70.JPG";
import JPG71 from "./assets/71.JPG";
import JPG72 from "./assets/72.JPG";
import JPG73 from "./assets/73.JPG";
import JPG74 from "./assets/74.JPG";
import JPG75 from "./assets/75.JPG";
import JPG76 from "./assets/76.JPG";

export default function ImageGallery() {
  return (
    <div>
      <ImageList variant="masonry" cols={3} gap={8}>
        {photos.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const photos = [
  {
    img: JPG1
  },
  {
    img: JPG2
  },
  {
    img: JPG3
  },
  {
    img: JPG4
  },
  {
    img: JPG5
  },
  {
    img: JPG6
  },
  {
    img: JPG7
  },
  {
    img: JPG8
  },
  {
    img: JPG9
  },
  {
    img: JPG10
  },
  {
    img: JPG11
  },
  {
    img: JPG12
  },
  {
    img: JPG13
  },
  {
    img: JPG14
  },
  {
    img: JPG15
  },
  {
    img: JPG16
  },
  {
    img: JPG17
  },
  {
    img: JPG18
  },
  {
    img: JPG19
  },
  {
    img: JPG29
  },
  {
    img: JPG21
  },
  {
    img: JPG22
  },
  {
    img: JPG23
  },
  {
    img: JPG24
  },
  {
    img: JPG25
  },
  {
    img: JPG26
  },
  {
    img: JPG27
  },
  {
    img: JPG28
  },
  {
    img: JPG29
  },
  {
    img: JPG30
  },
  {
    img: JPG31
  },
  {
    img: JPG32
  },
  {
    img: JPG33
  },
  {
    img: JPG34
  },
  {
    img: JPG35
  },
  {
    img: JPG36
  },
  {
    img: JPG37
  },
  {
    img: JPG38
  },
  {
    img: JPG39
  },
  {
    img: JPG40
  },
  {
    img: JPG41
  },
  {
    img: JPG42
  },
  {
    img: JPG43
  },
  {
    img: JPG44
  },
  {
    img: JPG45,
  },
  {
    img: JPG46
  },
  {
    img: JPG47
  },
  {
    img: JPG48
  },
  {
    img: JPG49
  },
  {
    img: JPG50
  },
  {
    img: JPG51
  },
  {
    img: JPG52
  },
  {
    img: JPG53
  },
  {
    img: JPG54
  },
  {
    img: JPG55
  },
  {
    img: JPG56
  },
  {
    img: JPG57
  },
  {
    img: JPG58
  },
  {
    img: JPG59  
  },
  {
    img: JPG60
  },
  {
    img: JPG61
  },
  {
    img: JPG62
  },
  {
    img: JPG63
  },
  {
    img: JPG64
  },
  {
    img: JPG65
  },
  {
    img: JPG66
  },
  {
    img: JPG67
  },
  {
    img: JPG68
  },
  {
    img: JPG69
  },
  {
    img: JPG70
  },
  {
    img: JPG71
  },
  {
    img: JPG72
  },
  {
    img: JPG73
  },
  {
    img: JPG74
  },
  {
    img: JPG75
  },
  {
    img: JPG76
  }
];
