
import Header from '@/components/Header/header'
import useProduct from '@/hooks/use-product'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

type ProductsProps = {
  products: any[]
}

const Products = ({ products }: ProductsProps) => {
  // const fetcher =async (url: string) => {
  //   const {data} = await getListProduct(url)
  //   return data
  // }
  
  
  // const {data, error} = useSWR("/products", fetcher, { dedupingInterval: 5000 })

  const {data, error, mutate, add, edit, remove} = useProduct()
  
  
  if(!data) return <div>Loading...</div>
  if(error) return <div>Fail to Load</div>
  return (
    <div>
      <Header />
      <div>
        {data.map((item: any) => (
          <div key={item.id}>
            <Link href={`/products/${item.id}`} >{item.name}</Link>
          </div>
        ))}
      </div>
      <button onClick={()=>{ mutate(add({ name: "Product G" })) }}>Thêm</button>
      <button onClick={()=>{ mutate(edit({ id: 1,name: "Product edit 2" })) }}>Sửa</button>
      <button onClick={()=>{ mutate(remove(13)) }}>Xóa</button>
    </div>
  )
}

// export const getStaticProps: GetStaticProps<ProductsProps> = async (context) => {
//   console.log("getStaticProps");

//   const products = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json()
 

//   return {
//     props:{
//       products
//     },
//     revalidate: 5
//   }
// }



export default Products