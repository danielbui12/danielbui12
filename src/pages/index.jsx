import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import About from '../components/About'
import Resume from '../components/Resume'
import TechStack from '../components/TechStack'
import ExtraSection from '../components/ExtraSection'
import DocumentMeta from 'react-document-meta'
import { useEffect, useState } from 'react'
import { BASE_FILE_URL, BASE_WEBSITE_URL } from '../utils/constant'

function Home() {
  const [tags, setTags] = useState([])

  const meta = {
    title: 'Daniel',
    description: 'Blockchain developer with more than 2 years of working experience in Ethereum-based blockchain and Solana blockchain combined with 3 years in software development. My ambition is to offer customers high-quality software with the most convenient and good product.',
    canonical: BASE_WEBSITE_URL,
    meta: {
      charset: 'utf-8',
      name: {
        keywords: tags.join(',')
      }
    }
  };

  useEffect(() => {
    fetch(BASE_FILE_URL + 'tag.json')
      .then(response => response.text())
      .then(response => setTags(JSON.parse(response)))
      .catch(err => console.log(err))
  }, [])

  return (
    <DocumentMeta {...meta}>
      <Header /> 
      <Nav />
      <About />
      <Resume />
      <TechStack />
      <ExtraSection />
      <Footer />
    </DocumentMeta>
  )
}

export default Home