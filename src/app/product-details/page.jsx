import React from 'react'
import ProductDetails from '../_Components/ProductDetails/ProductDetails'
import ProductCard from '../_Components/ProductCard/ProductCard'
import ProductDetailsTabs from '../_Components/ProductDetailsTabs/ProductDetailsTabs'

export default function page() {
  return (
<>
<ProductDetails />
<ProductDetailsTabs />
<ProductCard text="Related product" /> 
<ProductCard text="Recently Viewed" /> 
</>
  )
}
