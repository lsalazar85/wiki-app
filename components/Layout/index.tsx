import Head from 'next/head';

import Header from '../Header';
import Filter from '../Filter';

import { LOGO_URL } from '../../constants/urls';
import { LayoutProps } from '../../interfaces';

import { LayoutWrapper, Main, Section } from '../../styles/styles';

const Layout = ({ children }: LayoutProps) => (
  <Main>
    <Head>
      <title>Rick and Morty</title>
      <meta name="description" content="Rick and Morty App" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <LayoutWrapper>
      <Header urlLogo={LOGO_URL} text="Houm - Rick & Morty Wiki" />
      <Section>
        <Filter />
        {children}
      </Section>
    </LayoutWrapper>
  </Main>
);

export default Layout;
