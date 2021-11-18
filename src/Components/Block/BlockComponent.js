import React from "react";
import Header from '../Home/Header/Header'
import HeroContent from '../Home/HeroContent/HeroContent'
import Body from '../Home/Body/Body'
import Banner from '../Home/Banner/Banner'

export const BlockCoponent = ({ blocks }) => {
  const blockComponents = {
    ContentfulIntroHeaderComponent:Header,
    ContentfulThreeColumnComponent:HeroContent,
    ContentfulSpotlightNoImage:Banner,
    ContentfulSpotlight:Body,
  };
  const blocksContent = blocks.map((block, index) => {
    const BlockComponents = blockComponents[block.__typename];
    if (BlockComponents) {
      return <BlockComponents block={block} key={index} />;
    }
    return null;
  });

  return <section>{blocksContent}</section>;
};

export default BlockCoponent;