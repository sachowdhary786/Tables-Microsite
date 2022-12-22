import { useState } from "react";
import { RadioInput } from "../settings-radio/radio.type";
import { RadioGroup } from "@headlessui/react";

const radioOptions: RadioInput[] = [
  { id: 'fixed', label: 'Fixed Step', description: 'value' },
  { id: 'percentage', label: 'Percentage', description: 'percentage' }
]

export default function BidRadio() {
  const [options, setOptions] = useState(radioOptions)

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <RadioGroup value={options} onChange={setOptions} className='flex flex-col bg-white border-t-2 border-gray-200'>
      <RadioGroup.Label className="sr-only"> Bid Increase Settings </RadioGroup.Label>
      <div className="relative -space-y-px rounded-md bg-white">
        {radioOptions.map((item, itemIdx) => (
          <RadioGroup.Option
            key={item.id}
            value={item}
            className={({ checked }) =>
              classNames(
                checked ? '' : 'border-gray-200',
                'relative p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 focus:outline-none'
              )
            }
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
                    <p>{item.label} Increase</p>
                    <span className={'text-gray-900 font-normal'}>
                      Increase bids by a contant {item.description} every time the Schedule runs
                    </span>
                  </RadioGroup.Label>
                </span>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}