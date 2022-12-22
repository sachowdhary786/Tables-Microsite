import { useEffect, useState } from "react";
import { RadioInput } from "./radio.type";
import { RadioGroup } from "@headlessui/react";

const radioOptions: RadioInput[] = [
  { id: 'impressions', label: 'Impressions' },
  { id: 'clicks', label: 'Clicks' }
]

export default function BidRadio() {
  const [options, setOptions] = useState(radioOptions[0])

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="bg-white mt-10 border-gray-200 text-md shadow rounded-lg">
      <h1 className='border-b-2 border-gray-200 px-6 py-4'>Target to Increase</h1>
      <RadioGroup value={options} onChange={setOptions} className='flex flex-col bg-white'>
        <RadioGroup.Label className="sr-only"> Target to Increase </RadioGroup.Label>
        <div className="relative -space-y-px bg-white">
          {radioOptions.map((item, itemIdx) => (
            <RadioGroup.Option
              key={item.id}
              value={item}
              className='relative p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 focus:outline-none'
            >
              {({ active, checked }) => (
                <>
                  <span className="flex items-center text-sm">
                    <span
                      className={classNames(checked ? 'bg-blue-400 border-transparent' : 'bg-white border-gray-300',
                        active ? 'ring-2 ring-offset-2 ring-blue-400' : '', 'h-4 w-4 rounded-full border flex items-center justify-center')}
                      aria-hidden="true">
                      <span className="rounded-full bg-white w-1.5 h-1.5" />
                    </span>
                    <RadioGroup.Label as="span" className="ml-3 font-medium text-gray-900">
                      <p>{item.label}</p>
                      <span className={'text-gray-900 font-normal'}>
                        Enter a target for the number of {item.description} you would like to achieve per Targeting
                      </span>
                    </RadioGroup.Label>
                  </span>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}

