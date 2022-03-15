import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          My Professional Portfolio
        </SectionTitle>
        <SectionText>
          Currently the DevSecOps Engineer at Bettr, a South African FinTech Startup and part-time Ethical Hacker.
          Former Backend developer and IT Systems Engineer intresented in becomming a Cybersecurity Specialist.  
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;