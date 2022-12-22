import type { NextPageWithLayout } from './_app';
import LayoutWithSidebar from '../src/components/layout-sidebar/layout-sidebar';
import Campaign from '../src/components/campaign-selector/campaign-selector';
import data from './api/campaignData.json';
import Link from 'next/link';
import { useEffect } from 'react';

const AdTypes: NextPageWithLayout = () => {
  useEffect(() => {
    document.body.classList.add('bg-gray-50');
  });
  const jsonData = data[0]
  return (
    <LayoutWithSidebar>
      <div className='flex flex-col justify-between p-4 lg:px-40 lg:py-10'>
        <h1 className='font-bold text-lg'>Ad Types</h1>
        <p className='text-sm'>Each ad Type will change what Ad Groups appear during the Ad Groups step</p>
        <Campaign
          header={jsonData.header}
          id={jsonData.id}
          campaignName={jsonData.campaignName}
          campaignDescription={jsonData.campaignDescription}
          campaignExtra={jsonData.campaignExtra}
          disabled={jsonData.disabled}
        />
        <div className='flex items-end flex-col '>
          <Link href='/settings'>
            <button className='bg-apolloBlue w-32 rounded text-white mt-5 px-[1.3rem] py-[0.6rem] '>Next</button>
          </Link>
        </div>
      </div>
    </LayoutWithSidebar>
  )
}

export default AdTypes