import React from 'react';

function UserDataTable({ data }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">User's</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Percent</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((key, index) => (
              <tr key={index} >
                <td className="border px-4 py-2">{data[key].percent}</td>
                <td className="border px-4 py-2">{data[key].count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserDataTable;
