import Header from '@/components/Header/header'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const ProductDetail = (props: Props) => {
    const router = useRouter()
    const {id} = router.query 
  return (
    <div>
      <Header />
      ProductDetail {id}
    </div>
  )
}

export default ProductDetail