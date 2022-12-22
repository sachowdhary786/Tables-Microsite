import Image from "next/image";
import React from "react";
import { CampaignSelectorTypes } from "./campaign-selector.type";

function Campaign(data: CampaignSelectorTypes) {
  const n = 3;
  return (
    <div className='mt-5 border border-gray-200  rounded-md'>
      <h1 className='font-medium p-4'>{data.header}</h1>
      <div className='border-t-2'>
        <div className='lg:p-3'>
          <fieldset className='flex flex-col md:flex-row gap-6 mt-2 p-2'>
            {
              [...Array(n)].map((e, i) => (
                <div className={`flex-1 p-4 rounded flex flex-col items-center border border-gray-200 + ${data.disabled[i] ? 'opacity-50' : ''}`} key={i}>
                  <div className='flex w-full items-center text-left md:text-center mb-2' >
                    <h4 className='font-md flex-1 '>{data.campaignName[i]}</h4>
                    <div className="items-center">
                      <input
                        id={`campaign-${i}`}
                        name="campaign-method"
                        type="radio"
                        className="w-6 h-6 border border-gray-200 rounded-full"
                        disabled={data.disabled[i]}
                      />
                      <label
                        htmlFor={`campaign-${i}`}
                        className="ml-3 block text-sm font-medium text-gray-700"></label>
                    </div>
                  </div>
                  <Image
                    alt='Sponsored Products'
                    src='/images/campaign-1.jpg'
                    height={400}
                    width={400}
                  />
                  <p className='text-center'>
                    {data.campaignDescription[i]}
                  </p>
                  <p className='text-center'>
                    {data.campaignExtra[i]}
                  </p>
                </div>
              ))
            }
          </fieldset >
        </div >
      </div >
    </div >
  )
}

export default Campaign