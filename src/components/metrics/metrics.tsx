interface Props {
  label: string;
}

export const Metrics: React.FC<Props> = ({ label }) => {
  return (
    <div className='hidden sticky md:flex top-14 sm:top-0 self-start flex-col m-4 mx-4 max-w-lg bg-white shadow rounded-lg flex-1'>
      <h1 className='text-md py-4 px-6 font-medium'>Total {label} Metrics</h1>
      <div className="flex flex-col md:flex md:flex-row justify-evenly lg:p-4 p-2 border-t-2 border-grey-500  gap-2">
        <div className="flex flex-col flex-1">
          <p>Total Ad Groups Selected</p>
          <p className='font-bold text-lg'>17</p>
        </div>
        <div className="flex flex-1 flex-col lg:border-l-2 lg:pl-4 border-grey-500">
          <p>Total Targeting Selected</p>
          <p className='font-bold text-lg'>963</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly lg:p-4 p-2 gap-2">
        <div className="flex flex-1 flex-col">
          <p>Last 7 Day Impression</p>
          <p className='font-bold text-lg'>37.13K</p>
        </div>
        <div className="flex flex-1 flex-col lg:border-l-2 lg:pl-2 border-grey-500">
          <p>Average Daily Impressions</p>
          <p className='font-bold text-lg'>5.39K</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly lg:p-4 p-2 gap-2">
        <div className="flex flex-1 flex-col">
          <p>Av. Impressions Per Targeting</p>
          <p className='font-bold text-lg'>71</p>
        </div>
        <div className="flex flex-1 flex-col lg:border-l-2 lg:pl-2 border-grey-500">
          <p>Av. Impressions Per Order</p>
          <p className='font-bold text-lg'>631</p>
        </div>
      </div>
    </div >
  )
}