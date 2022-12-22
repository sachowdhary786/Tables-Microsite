import Link from "next/link";
import { useRouter } from "next/router";

function SideNav() {
  const router = useRouter();

  return (
    <div className="mt-5 flex flex-grow flex-col ">
      <p className='flex-1 space-y-1 mx-3 my-3 border-b-2 w-40 border-gray-200'>New Schedule</p>
      <nav className="flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
        <Link href='/ad-types' className={'group flex items-center px-2 py-2 text-sm font-medium rounded-md'}>
          <span className={router.pathname == '/settings' ? 'w-5 h-5 ring-2 ring-blue-500 bg-blue-500 rounded-full mr-4 text-center' : 'w-5 h-5 ring-2 ring-blue-500 bg-blue-500 border-4 border-white rounded-full mr-4 text-center'}>
            &nbsp;
          </span>
          <span className="flex-1">Ad Types</span>
        </Link>
        <Link href='/settings' className={'group flex items-center px-2 py-2 text-sm font-medium rounded-md'}>
          <span className={router.pathname == '/ad-types' ? 'w-5 h-5 border border-gray-200 rounded-full mr-4 text-center' : 'w-5 h-5 ring-2 ring-blue-500 bg-blue-500 border-4 border-white rounded-full mr-4 text-center'}>
            &nbsp;
          </span>
          <span className="flex-1">Settings</span>
        </Link>
      </nav>
    </div>
  )
}

export default SideNav