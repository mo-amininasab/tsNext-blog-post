import { GetStaticProps, NextPage } from 'next'
import Layout from '../components/Layout'

interface Props {

}

const HomePage: NextPage<Props> = () => {


  return (
    <Layout>
      <h1 className="text-gray-800 text-6xl font-semibold mx-auto w-min whitespace-nowrap">Welcome to DevSpace</h1>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {


  return {
    props: {}
  }
}

export default HomePage
