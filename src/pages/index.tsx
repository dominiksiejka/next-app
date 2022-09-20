import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { InfoCard } from '../components/InfoCard'
import { SearchBar } from '../components/SearchBar'

import { ResponseData } from '../types/responseData.types'

import { fetchCharacters } from '../api/fetchCharacters'
import { GridLayout } from '../layouts/GridLayout'

const Main: NextPage<ResponseData> = (props) => {
  const characterList = props.results?.map(
    ({ id, name, status, gender, image }) => (
      <InfoCard
        key={id}
        name={name}
        status={status}
        gender={gender}
        img={image}
      />
    )
  )

  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <GridLayout>
        <SearchBar />
        {characterList}
      </GridLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { results, info } = await fetchCharacters()

  return {
    props: { results, info },
    revalidate: 10,
  }
}
export default Main
