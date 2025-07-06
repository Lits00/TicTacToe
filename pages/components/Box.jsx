import React from 'react'
import { Button } from '@/components/ui/button'

const Box = ({className, value, onClick}) => {
  return (
    <Button variant="outline" className={`w-20 h-20 text-2xl ${className}`} onClick={onClick}>
      {value}</Button>
  )
}

export default Box