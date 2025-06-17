import { useRouter } from 'next/router'

import { SearchHeaderOption } from './SearchHeaderOption'

interface SearchHeaderOptionsProps {}

export function SearchHeaderOptions({}: SearchHeaderOptionsProps) {
  const router = useRouter()

  return (
    <div className='flex w-full text-sm border-b gap-x-8 select-none text-gray-700 justify-center lg:pl-52 lg:justify-start'>
      <SearchHeaderOption
        title='All'
        selected={router.query.searchType === '' || !router.query.searchType}
      />

      <SearchHeaderOption
        title='Images'
        selected={router.query.searchType === 'image'}
      />
    </div>
  )
}
