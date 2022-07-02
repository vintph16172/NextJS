import Header from '@/components/Header/header'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'

type ProductsProps = {
  products: any[]
}

const Products = ({ products }: ProductsProps) => {
  console.log("Client",products);
  if (!products) return null
  return (
    <div>
      <Header />
      <div>
        {products.map(item => (
          <div key={item.id}>
            <Link href={`/products/${item.id}`} >{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ProductsProps> = async (context) => {
  console.log("getStaticProps");

  const products = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json()
 

  return {
    props:{
      products
    },
    revalidate: 5
  }
}



export default Products