import Head from "next/head"
import Image from "next/image"

// --

import katzen from "@img/katzen.png"
import { Button, SubTitle, Title } from "ui"

// --

import { graphql } from "@/gql/gql"
import { useQuery } from "urql"

const homeQueryDocument = graphql(`
  query Home {
    home {
      data {
        attributes {
          title
          subtitle
          techs {
            name
          }
        }
      }
    }
  }
`)

// --

export default function Home() {
  const [result] = useQuery({ query: homeQueryDocument })

  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-800 p-4 pt-2">
      <Head>
        <title className="mx-auto">
          {data?.home?.data?.attributes?.title} -
          {data?.home?.data?.attributes?.techs
            ?.map(item => item?.name)
            .toString()}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <Image
          className="mx-auto"
          width={250}
          height={250}
          alt="katzen"
          src={katzen}
        />
        <Title>{data?.home?.data?.attributes?.title}</Title>

        <SubTitle>{data?.home?.data?.attributes?.subtitle}</SubTitle>

        <SubTitle>
          {data?.home?.data?.attributes?.techs?.map((item, index) => (
            <span key={index}>{item?.name}</span>
          ))}
        </SubTitle>

        <div className="my-4 flex flex-col gap-4">
          <Button href="https://github.com/alexvyber/katzen">GitHub</Button>

          <Button href="https://github.com/alexvyber/katzen" intent="secondary">
            GitHub
          </Button>

          <Button href="https://github.com/alexvyber/katzen">GitHub</Button>

          <Button
            href="https://github.com/alexvyber/katzen"
            rounded="full"
            intent="secondary"
          >
            GitHub
          </Button>
        </div>
      </main>
    </div>
  )
}
