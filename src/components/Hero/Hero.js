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
        Conscientious cyber security engineer with almost seven years of IT experience in multiple industries.
        </SectionText>
        <SectionText>
        CCNA certified and working towards CompTIA Security+ accreditation, aspiring to become a Security Architect.
        </SectionText>
        <SectionText>
        Received the top student award for the classes of 2019 and 2020 and was assigned as class representative for two consecutive years in a row, is generally in the top 4% globally on TryHackMe.        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;