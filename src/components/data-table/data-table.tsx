import React, { useEffect, useState } from "react";
import { DataTableTypes } from "./data-table.type";
import { Switch } from '@headlessui/react';
import Link from "next/link";

function switchClasses(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function DataTable() {
  const [data, setData] = useState<any[]>([])
  const [enabled, setEnabled] = useState(false)

  const getData = () => {
    fetch('./api/data.json', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(function (res) {
      return res.json()
    }).then(function (myData) {
      setData(myData)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  function convertDate(InputDate: Date) {
    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const date = new Date(InputDate);
    const year = date.getFullYear();
    const month = monthName[date.getMonth()];
    const dt = date.getDate();

    const fullDate = month + ' ' + dt + ' ' + year;
    return fullDate;
  }

  function getTime(InputDate: Date) {
    const date = new Date(InputDate);
    const time = date.getHours() + ":" + date.getMinutes();
    return time;
  }

  return data && data.length > 0 ? (
    <div className='m-8 rounded-md shadow-md'>
      <h3 className='text-sm font-medium pl-3 py-3'>All Schedules</h3>
      <div className="block relative py-3 pl-2 bg-slate-100">
        <input placeholder="Search for Schedule Name or ID"
          className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-300 border-b block pl-2 pr-6 py-2 w-72 rounded bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
      </div>

      <div className='overflow-x-auto relative'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-sm text-gray-700 bg-slate-100 border border-x-0'>
            <tr>
              <th scope='col' className="py-2 px-3 border border-l-0">Active</th>
              <th scope='col' className="py-2 px-3 border border-l-0">Schedule Name</th>
              <th scope='col' className="py-2 px-3 border border-l-0 hidden lg:table-cell">Date Created</th>
              <th scope='col' className="py-2 px-3 border border-l-0 hidden lg:table-cell">ID</th>
              <th scope='col' className="py-2 px-3 border border-l-0 hidden lg:table-cell">Campaign Sources</th>
              <th scope='col' className="py-2 px-3 border border-l-0">Target ACoS</th>
              <th scope='col' className="py-2 px-3 border border-l-0 hidden lg:table-cell">7 Day ACoS</th>
              <th scope='col' className="py-2 px-3 border border-l-0 hidden lg:table-cell">7 Day Sales</th>
              <th scope='col' className="py-2 px-3 border border-l-0">30 Day ACoS</th>
              <th scope='col' className="py-2 px-3 border border-l-0 hidden lg:table-cell">30 Day Sales</th>
              <th scope='col' className="py-2 px-3 border border-l-0">Last Run</th>
              <th scope='col' className="py-2 px-3 border border-l-0">Last Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: DataTableTypes) => {
              return (
                <tr key={item.id}>
                  <td className="py-2 px-3 border border-l-0 ">
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      name={item.name}
                      value={item.name}
                      className={switchClasses(
                        enabled ? 'bg-indigo-600' : 'bg-gray-200',
                        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      )}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={switchClasses(
                          enabled ? 'translate-x-5' : 'translate-x-0',
                          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                        )}
                      />
                    </Switch>
                  </td>
                  <td className="py-2 px-3 border border-l-0"> {item.name}</td>
                  <td className="py-2 px-3 border border-l-0 hidden lg:table-cell"> {convertDate(item.created)} <br /> {getTime(item.created)}</td>
                  <td className="py-2 px-3 border border-l-0 hidden lg:table-cell"> {item.id}</td>
                  <td className="py-2 px-3 border border-l-0 hidden lg:table-cell"> {item.sources}</td>
                  <td className="py-2 px-3 border border-l-0"> {item.target}</td>
                  <td className="py-2 px-3 border border-l-0 hidden lg:table-cell"> {item['7 Day ACoS']}</td>
                  <td className="py-2 px-3 border border-l-0 hidden lg:table-cell"> {item['7 Day Sales']}</td>
                  <td className="py-2 px-3 border border-l-0 hidden lg:table-cell"> {item['30 Day ACoS']}</td>
                  <td className="py-2 px-3 border border-l-0"> {item['30 Day Sales']}</td>
                  <td className="py-2 px-3 border border-l-0"> {convertDate(item.run)} <br /> {getTime(item.run)}</td>
                  <td className="py-2 px-3 border border-l-0">
                    <p>{item.status}</p>
                    <Link href='/' className='border-b-2 border-slate-300 border-dashed'>Details</Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <nav
          className="flex items-center justify-between border border-l-0 bg-white px-4 py-3 sm:px-6"
          aria-label="Pagination"
        >
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
              <span className="font-medium">20</span> results
            </p>
          </div>
          <div className="flex flex-1 justify-between sm:justify-end">
            <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </a>
            <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Next
            </a>
          </div>
        </nav>
      </div >
    </div>
  ) : <p>No data to render</p>
}

export default DataTable;