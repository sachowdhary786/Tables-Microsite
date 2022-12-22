import { CurrencyInput } from "../input/currency-input";
import BidRadio from "./bid-radio";


export default function BidSettings() {
  return (
    <div className='flex flex-col bg-white shadow rounded-lg mt-10'>
      <h1 className='text-md py-4 px-6'>Bid Increase Settings</h1>
      <BidRadio />
      <CurrencyInput
        label='Fixed Step Increase'
      />
    </div>
  )
}