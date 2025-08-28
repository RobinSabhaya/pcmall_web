import type { TitleProps } from './Title.type'

export default function Title({ 
    className='flex items-center gap-4 py-8 mx-6',
    containerClassName='text-red-500 font-semibold',
    title,
    style={},
    containerStyle={}
}:TitleProps) {
  return (
      <>
        <div className={className} style={style}>
        <div className="w-5 h-10 bg-red-500 rounded" />
              <span className={containerClassName} style={containerStyle}>{title}</span>
      </div>
      
      </>
  )
}
