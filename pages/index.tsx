import { GetStaticProps, NextPage } from 'next'

interface Props {

}

const HomePage: NextPage<Props> = () => {


  return (
    <div>
      
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {


  return {
    props: {}
  }
}

export default HomePage
