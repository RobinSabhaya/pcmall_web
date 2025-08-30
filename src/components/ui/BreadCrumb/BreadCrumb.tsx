
import type { BreadCrumb, BreadCrumbProps } from './BreadCrumb.type'

export default function BreadCrumb({breadCrumbList}:BreadCrumbProps){
  return (
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            {breadCrumbList.map((item : BreadCrumb, index: number) => (
              <span key={index} className="flex items-center">
                {item.href ? (
                  <a href={item.href} className="hover:text-gray-700">
                    {item.label}
                  </a>
                ) : (
                  <span className="text-gray-900">{item.label}</span>
                )}
                {index < breadCrumbList.length - 1 && <span className="mx-2">/</span>}
              </span>
            ))}
          </nav>
  )
}