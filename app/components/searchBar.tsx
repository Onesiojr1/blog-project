"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { usePathname, useSearchParams, useRouter } from "next/navigation"

export function SearchBar() {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()

  const handleSearch = (searchTerm: string) => {
    const params = new URLSearchParams(searchParams)

    if (searchTerm) {
      params.set('query', searchTerm)
    } else {
      params.delete('query')
    }
    replace(`${pathName}?${params.toString()}`)
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Buscar
      </label>
      <input
      className="peer block w-full lg:w-1/2 rounded-md border border-gray-200 py-[9px] pl-10 outline-2 text-gray-900 bg-white placeholder:text-gray-500"
        placeholder="Buscar..."
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) =>{
          handleSearch(e.target.value)
        }}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  )
}
