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
        Conscientious Cyber Security Engineer with +6 years of experience in IT and engineering, working in the fintech, computer vision, and agriculture/mining sectors. 
        </SectionText>
        <SectionText>
        CCNA certified and am currently working toward my CompTIA Security+ accreditation. Aspiring to become a Security Architect.
        </SectionText>
        <SectionText>
        Generally in the Top 5% international on TryHackMe.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;