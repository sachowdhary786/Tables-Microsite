interface Props {
  label: string;
}

export const CurrencyInput: React.FC<Props> = ({ label }) => {
  return (
    <fieldset className='mx-6 pb-6 border-t-2 border-gray-100'>
      <label htmlFor="price" className="block text-sm mb-4 font-normal text-gray-700 border-b-2 mt-4 border-dashed w-fit">
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm w-full md:max-w-sm ">
        <div className="pointer-events-none absolute inset-y-0 flex items-center px-2 bg-gray-100 border-r-2 rounded-l-md">
          <span className="text-xs text-gray-500">$</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full md:max-w-sm rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="0.00"
          aria-describedby="price-currency"
        />
      </div>
    </fieldset>
  )
}