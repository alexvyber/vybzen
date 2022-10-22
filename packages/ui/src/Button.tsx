import * as React from "react"

export const Button = () => {
  return (
    <div className="rounded-xl">
      <a href="https://github.com/alexvyber/katzen">
        <div className="flex w-full items-center justify-center rounded-md border border-transparent bg-zinc-900 py-3 px-8 text-xl font-medium text-white no-underline hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-4 md:px-10 md:text-2xl md:leading-6">
          Open Github
        </div>
      </a>
    </div>
  )
}
