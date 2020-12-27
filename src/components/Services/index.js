import React from "react";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServiceElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={"images/svg-5.svg"} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            Actually kickstarter flexitarian master cleanse la croix celiac
            jianbing post-ironic beard mustache aesthetic.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={"images/svg-6.svg"} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            Unicorn poutine blue bottle, keytar pug single-origin coffee
            cornhole forage drinking vinegar kickstarter PBR&B truffaut
            cardigan.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={"images/svg-7.svg"} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Beard yuccie la croix hell of, migas selfies sustainable banjo vegan
            microdosing disrupt bitters try-hard cronut.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
