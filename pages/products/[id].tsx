import Header from '@/components/Header/header'
import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

type ProductDetailProps = {
  product: any
}

const ProductDetail = ({product}: ProductDetailProps) => {
  // const router = useRouter()
  // const { id } = router.query
  if(!product) return null
  return (
    <div>
      <Header />
      {product.name} {product.id}
    </div>
  )
}

// Static-Side Rendering--------------------------------

export const getStaticPaths: GetStaticPaths = async () =>{
  const data = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json()
  const paths = data.map((item: any)=>(
    {params: {id: item.id }}
  ))
  return {
    paths,
    fallback: false
  }

}

export const getStaticProps: GetStaticProps<ProductDetailProps> = async (context: GetStaticPropsContext )=>{
  const product = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params?.id}`)).json()
  return { 
    props: {product},
    revalidate: 5
  }
}

// Server-Side Rendering--------------------------------

// export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext)=>{
//   context.res.setHeader("Cache-Control", "s-maxage=10, state-while-revalidate=59")
//   const product = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params?.id}`)).json()
//   return { 
//     props: {product},
//   }

// }

export default ProductDetail