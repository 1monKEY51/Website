import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Cisco CCNA', },
  { number: 1, text: 'Microsoft MCSA', },
  { number: 1, text: 'CompTIA N+'},
  { number: 2, text: 'Top Student of class at CTU [2019 & 2020]', },
  { number: 2, text: 'Class Repeceitive at CTU [2019 & 2020]', },
  { number: 3, text: 'Udemy certficates of completion', },
  { number: 16, text: 'Cybary certficates of completion', },
  { number: 3, text: 'TryHackMe Career paths', },
  { number: 287, text: 'Ranking for TryHackMe in South Africa', },
  { number: 48821, text: 'Ranking for TryHackMe Internationally', },
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
