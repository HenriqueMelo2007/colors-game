'use client'

import { Header } from '@/components/header'
import { Box } from '@/components/box'

export default function Home() {
  return (
    <div>
      <Header/>
      <div className='bg-blue-900 w-full flex justify-center mt-10'>
        <Box></Box>
      </div>
    </div>
  )
}
