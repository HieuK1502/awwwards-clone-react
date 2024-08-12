import React from "react";
import { tableData } from "../../assets/assets";

const TableUser = () => {
  return (
    <div className="relative overflow-x-auto mt-10 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <table className="table-auto w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="w-3/6 p-4 text-start">Name</th>
            <th className="w-1/6 p-4 text-start">Profile</th>
            <th className="w-1/6 p-4 text-start">Awards</th>
            <th className="w-2/6 p-4 text-start">Categories</th>
            <th className="p-4 text-start">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((table) => (
            <tr key={table.id} className="bg-white border-b">
              <td className="p-4 flex items-center space-x-2">
                <img
                  src={table.avatar}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <p className="pr-10 md:pr-0 font-semibold">
                  {table.name}
                </p>
              </td>
              <td className="p-4">{table.profile}</td>
              <td className="p-4">{table.awards}</td>
              <td className="p-4">{table.categories}</td>
              <td className="p-4 text-center">
                <a
                  href="#"
                  className="px-3 py-2 text-sm rounded-md bg-[#222222] font-medium text-white"
                >
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUser;
