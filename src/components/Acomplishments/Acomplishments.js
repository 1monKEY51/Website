import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Cisco CCNA', },
  { number: 2, text: 'Top Student of class at CTU [2019 & 2020]', },
  { number: 2, text: 'Class representative at CTU [2019 & 2020]', },
  { number: 3, text: 'Udemy certficates of completion', },
  { number: 10, text: 'Cybary certficates of completion', },
  { number: 2, text: 'TryHackMe Career paths', },
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
