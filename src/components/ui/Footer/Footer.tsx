import Link from 'next/link';

import { APP_NAME } from '../../../config';

import { footerSections } from './utils';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 pb-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* PCMall Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">{APP_NAME ?? 'App Name'}</h3>
            <p className="mb-4">Subscribe</p>
            <p className="text-sm text-gray-400 mb-4">
              Get 10% off your first order
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-transparent border border-gray-600 rounded-l-md focus:outline-none focus:border-white"
              />
              <button className="px-4 py-2 border border-gray-600 border-l-0 rounded-r-md hover:bg-gray-800">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Download App Section */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <p className="text-xs text-gray-400 mb-4">
              Save $3 with App New User Only
            </p>
            <div className="flex gap-2 mb-4">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 bg-black rounded grid grid-cols-3 gap-px p-2">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="bg-white rounded-sm" />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                <Link
                  key={social}
                  href={`#${social}`}
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
              ))}
            </div>
          </div> */}
        </div>

        <div className="border-t border-gray-800 mt-5 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © Copyright ${APP_NAME ?? 'App Name'} {new Date().getFullYear()}.
            All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
