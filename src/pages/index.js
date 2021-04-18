import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';
import GallerySection from '../sections/GallerySection';
import MainSection from '../sections/MainSection';
import SkillsSection from '../sections/SkillsSection';

const IndexPage = ({ location }) => {
  const _home = useRef(null);
  const _about = useRef(null);
  const _skills = useRef(null);
  const _gallery = useRef(null);
  const _contact = useRef(null);

  const executeScroll = (ref) => ref.current.scrollIntoView();
  useEffect(() => {
    const hashes = [
      { name: '#home', ref: _home },
      { name: '#about', ref: _about },
      { name: '#skills', ref: _skills },
      { name: '#gallery', ref: _gallery },
      { name: '#contact', ref: _contact },
    ];

    const ref = hashes.find((hash) => hash.name === location.hash)?.ref;
    if (ref) executeScroll(ref);
  }, [location]);

  return (
    <Container>
      <Navbar location={location} />
      <MainSection location={location} ref={_home} />
      <AboutSection location={location} ref={_about} />
      <SkillsSection location={location} ref={_skills} />
      <GallerySection location={location} ref={_gallery} />
      <ContactSection location={location} ref={_contact} />
      <Footer />
    </Container>
  );
};

export default IndexPage;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
