import Head from "next/head"

import { SimpleLayout } from "@/components/simple-layout"
import { Octokit } from "octokit"
import { getAllArticles } from "@/lib/get-all-articles"

function Commits({ commits }) {
  return (
    <ul role="list">
      {commits.map(commit => (
        <li
          key={commit.sha}
          className="relative rounded-xl bg-white py-5 px-4  focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600 hover:bg-orange-50 dark:bg-zinc-900 dark:hover:bg-zinc-50/5"
        >
          <div className="flex justify-between space-x-3">
            <div className="min-w-0 flex-1">
              <a href={commit.html_url} className="block focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900 dark:text-zinc-200">
                  {commit.commit.message}
                </p>
                <p className="mt-1 truncate text-sm text-orange-500">
                  {commit.sha.slice(0, 8)}
                </p>
              </a>
            </div>
            <time
              dateTime={commit.commit.committer.date}
              className="flex-shrink-0 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-300"
            >
              {new Date(commit.commit.committer.date).toLocaleDateString(
                "ru-RU",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
              )}
            </time>
          </div>
        </li>
      ))}
    </ul>
  )
}

function Articles({ articles }) {
  return (
    <ul role="list">
      {articles.map(article => (
        <li
          key={article.slug}
          className="relative rounded-xl bg-white py-5 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600 hover:bg-orange-50 dark:bg-zinc-900 dark:hover:bg-zinc-50/5"
        >
          <div className="flex justify-between space-x-3">
            <div className="min-w-0 flex-1">
              <a
                href={"/articles/" + article.slug}
                className="block focus:outline-none"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                <h3 className="flex justify-between text-sm font-medium text-gray-900 dark:text-zinc-200">
                  {article.title}
                  <time
                    dateTime={article.date}
                    className="flex-shrink-0 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-300"
                  >
                    {new Date(article.date).toLocaleDateString("ru-RU", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  {article.description}
                </p>
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function Days({ commits, articles }) {
  console.log("🚀 ~ Days ~ articles", articles)
  return (
    <>
      <Head>
        <title>1000 дней кода - челлендж такой...</title>
        <meta name="description" content="1000 дней кода - челлендж такой..." />
      </Head>
      <SimpleLayout
        title="1000 дней кода - челлендж такой..."
        intro="Идея в том, чтобы почти 3 года подряд писать год и учиться писать код."
      >
        <main className="flex flex-col-reverse gap-10 md:flex-row">
          <div className="w-full">
            <h2 className="px-4 pb-3  text-xl font-medium dark:text-white">
              1000 days of coding
            </h2>
            <Commits commits={commits} />
          </div>
          <div className="w-full">
            <h2 className="px-4 pb-3  text-xl font-medium dark:text-white">
              1000 days of posting
            </h2>
            <Articles articles={articles} />
          </div>
        </main>
      </SimpleLayout>
    </>
  )
}

const TOKEN = process.env.GH_TOKEN

async function getCommits() {
  const octokit = new Octokit({ auth: TOKEN })

  const { data } = await octokit.request("GET /repos/{owner}/{repo}/commits", {
    owner: "alexvyber",
    repo: "1000DaysOfCode",
  })

  // const repo = "https://github.com/alexvyber/1000daysofcode.git";
  // // Aray for dev purposes
  // const testArray: Commit[] = [];
  // for (let i = 0; i < 10; i++) {
  //   const commit = {
  //     commitId: "29bc7c1",
  //     comment: "Day 21(React | 1.5 hours): React and TypeScript...",
  //     time: "1d ago",
  //     datetime: "2021-01-27T16:35",
  //     README: `
  //     Learned more about React and TypeScript.
  //     - Higher-Order Components
  //     - Function Overloading
  //     - React built-in types`,
  //   };
  //   testArray.push(commit);
  // }

  return data
}

export const getStaticProps = async () => {
  const commits = await getCommits()

  return {
    revalidate: 60 * 60 * 2,
    props: {
      commits,
      articles: (await getAllArticles())
        .map(({ component, ...meta }) => meta)
        .slice(0, 30),
    },
  }
}
