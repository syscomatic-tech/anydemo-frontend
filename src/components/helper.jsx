import Image from "next/image"

export const NoDataFound = ({ width, height }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}><Image src='/img/no__data.png' width={width || 300} height={height || 300} alt='empty' /></div>
  )
}