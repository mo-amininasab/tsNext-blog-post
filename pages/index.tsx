import { GetStaticProps, NextPage } from 'next'
import Layout from '../components/Layout'

interface Props {

}

const HomePage: NextPage<Props> = () => {


  return (
    <Layout>
      <h1 className="text-blue-500 font-ssp">hhllle</h1>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {


  return {
    props: {}
  }
}

export default HomePage
