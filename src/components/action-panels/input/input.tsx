import { InputPropTypes } from "./input.types";

export default function InputField(data: InputPropTypes) {
  return (
    <div className="flex flex-col bg-white shadow rounded-lg">
      <h1 className="text-md py-4 px-6 font-medium">{data.header}</h1>
      <fieldset className="border-t-2 border-grey-500 sm:flex sm:items-center">
        <div className="w-full md:max-w-sm px-4 py-5 sm:p-6 flex-flex-col">
          <input
            type="text"
            name="schedule"
            id="schedule"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder={data.placeholder}
          />
        </div>
      </fieldset>
    </div>
  )
}
