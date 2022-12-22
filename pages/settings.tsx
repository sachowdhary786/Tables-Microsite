import type { NextPageWithLayout } from './_app';
import LayoutWithSidebar from '../src/components/layout-sidebar/layout-sidebar';
import Link from 'next/link';
import InputField from '../src/components/action-panels/input/input';
import TargetRadio from '../src/components/action-panels/settings-radio/target-radio';
import { useEffect, useState } from 'react';
import BidSettings from '../src/components/action-panels/bid-settings/bid-settings';
import { Metrics } from '../src/components/metrics/metrics';

const AdTypes: NextPageWithLayout = () => {
  const [metric, setMetric] = useState<string>('Impressions')
  useEffect(() => {
    document.body.classList.add('bg-gray-50');
  });
  return (
    <LayoutWithSidebar>
      <div className='flex flex-col justify-between p-4 lg:px-24 lg:py-10'>
        <h1 className='font-bold text-lg'>Settings</h1>
        <p className='text-sm'>Enter the Settings to complete the Schedule Setup in order to run the Schedule</p>
        <div className='flex'>
          <form className='m-4 mx-0 flex-1'>
            <InputField
              header='Name your Bid Optimization Schedule'
              placeholder='Enter Schedule Name'
            />
            <TargetRadio />
            <BidSettings />
            <div className='flex items-end flex-col '>
              <Link href='/'>
                <button className='bg-apolloBlue w-32 rounded text-white mt-5 px-[1.3rem] py-[0.6rem] '>Publish</button>
              </Link>
            </div>
          </form>
          <Metrics label={metric} />
        </div>
      </div>
    </LayoutWithSidebar>
  )
}

export default AdTypes