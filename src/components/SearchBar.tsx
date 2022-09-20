import { FC } from 'react'
import { GoSearch } from 'react-icons/go'

export const SearchBar: FC = () => {
  return (
    <form className="col-span-full place-self-stretch mb-20">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-white sr-only dark:text-gray-300"
      >
        Search
      </label>
      <div className="relative w-3/4 mx-auto mt-10">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3">
          <GoSearch className="text-lg" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-lg text-gray-900 bg-gray-200 rounded-lg border-0 focus:outline-dotted focus:outline-blue-500 focus:ring-0"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-80 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  )
}
