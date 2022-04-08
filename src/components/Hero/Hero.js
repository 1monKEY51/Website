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
        I am the Cyber Security Engineer at Bettr, a previous Backend Developer, in charge of Vulnerability Management and Cloud Security.</SectionText>
        <SectionText>
        Tolerant of change and uncertainty, with prior experience working under pressure in startups in finance, computer vision, and agricultural technology.</SectionText>
        <SectionText>
        CCNA, MCSA and CompTIA N+ Certified.</SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;