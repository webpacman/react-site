import React from 'react';
import { AboutMe } from '../AboutMe/AboutMe';
import { Achievements } from '../Achievements/Achievements';
import { Books } from '../Books/Books';
import { ContactMe } from '../ContactMe/ContactMe';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Interests } from '../Interests/Interests';
import { Menu } from '../Menu/Menu';
import { Skills } from '../Skills/Skills';
import { Work } from '../Work/Work';
import { YouTubeChannel } from '../YouTubeChannel/YouTubeChannel';

export function App() {
  return (
    <>
      <Menu />
      <Header />
      <AboutMe />
      <YouTubeChannel />
      <Achievements />
      <Skills />
      <Work />
      <Interests />
      <Books />
      <ContactMe />
      <Footer />
    </>
  );
}
