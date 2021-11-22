import React from "react";
import Header from '../SubPage/Header/Header'
import Faq from '../SubPage/FAQ/Faq'
import Member from '../SubPage/Members/Members'
import SpotlightnoImage from '../SubPage/SpotligtnoImage/Spotlight'

export const BlockSubComponent = ({ blocks }) => {
  const blockComponents = {
    ContentfulIntroHeaderMulti:Header,
    ContentfulTeam:Member,
    ContentfulSpotlightNoImage:SpotlightnoImage,
    ContentfulFaq:Faq,
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

export default BlockSubComponent;