import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Cisco Certfication', },
  { number: 1, text: 'Microsoft Certification', },
  { number: 1, text: 'CompTIA Certification'},
  { number: 3, text: 'Udemy certficates of completion', },
  { number: 22, text: 'Cybary certficates of completion', },
  { number: 2, text: 'Class Top Student at CTU', },
  { number: 3, text: 'TryHackMe Career paths', },
  { number: 287, text: 'TryHackMe Ranking South Africa', },
  { number: 48821, text: 'TryHackMe Ranking International', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
