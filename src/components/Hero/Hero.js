import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Anthonie Immelman
        </SectionTitle>
        <SectionText>
        I am currently the Cyber Security Engineer and Backend Developer at Bettr, responsible for Vulnerability Management and Cloud Security.        </SectionText>
        <SectionText>
        Tolerant to change and uncertainty, with experience working under pressure in the financial, computer vision, and agriculture technology startup sectors.        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;