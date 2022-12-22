import Layout from '../src/components/layout/layout';
import type { NextPageWithLayout } from './_app';
import DataTable from '../src/components/data-table/data-table';
import { useEffect } from 'react';

const Page: NextPageWithLayout = () => {
  useEffect(() => {
    document.body.classList.add('bg-gray-50');
  });
  return (
    <Layout>
      <div className='pl-4 py-2 flex justify-between border-b-2 border-slate-200 flex-wrap items-center'>
        <h3 className='text-xl font-bold'>Bid Optimization</h3>
        <button className='bg-apolloBlue text-white text-sm px-[1.3rem] py-[0.6rem] mx-4 my-1 rounded'>Add New Schedule</button>
      </div>
      <DataTable />
    </Layout>
  )
}





export default Page