import { LayoutProps } from '@/models/layout'
import React from 'react'

type Props = {}

const LayoutWebsite = ({children}: LayoutProps) => {
  return (
    <div>
        LayoutWebsite
        {children}
    </div>
  )
}

export default LayoutWebsite