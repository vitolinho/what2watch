"use client"

import Input from "@/components/inputs/input"
import { FiSearch } from "react-icons/fi"
import film from "@/data/film.json"
import { useState } from "react"
import ResultCard from "@/components/cards/resultCard"

const getFilteredTitles = (query: string, titles: any) => {
  if (!query) return []
  query = query.toLowerCase()
  return titles.filter((movie: any) => {
    const title = movie.title.toLowerCase()
    return title.includes(query)
  })
}

const SearchInput = () => {
  const [query, setQuery] = useState("")
  const titles = film.map(item => item)
  const filteredTitles = getFilteredTitles(query, titles)
  const noResults = query && filteredTitles.length === 0
  return (
    <div className="flex flex-col gap-y-10 w-full h-fit px-5 py-10 lg:px-20 lg:py-20">
      <p className="button-lg lg:h6-hind-d">Recherche</p>
      <Input
        id={"search-input"}
        variant="default"
        size="lg"
        placeholder="Tapez votre recherche..."
        icon={<FiSearch/>}
        value={query}
        iconPosition="right"
        className="text-xl"
        onChange={event => setQuery(event.target.value)}/>
      <div>
        {noResults ? (
          <p className="text-center button-lg text-text-500">Aucun résultat trouvé :C</p>
        ) : (
          <div className="grid grid-cols-2 gap-5 gap-y-20 lg:grid-cols-6">
            {filteredTitles.map((movie: any) => (
              <ResultCard
                key={movie.id}
                image_path={movie.image_path}
                id={movie.id}
                showTitle={true}
                title={movie.title}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchInput