import React from 'react'

import { NextPage } from 'next'
import Head from 'next/head'
import Header from './Header'


interface Props {
  title?: string;
  keywords?: string;
  description?: string;
}

const Layout: React.FC<Props> = ({title, description, keywords, children}) => {
  return (
    <div className="font-ssp">
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title: 'Welcome to DevSpace',
  keywords: 'development, coding, programming',
  description: 'The best info and news in development',
}
