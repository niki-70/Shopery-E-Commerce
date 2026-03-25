function OrderHistory() {

    return(
        <>
        <div className="bg-white rounded-lg shadow p-6">

            {/* Title */}

            <h2 className="text-xl font-semibold mb-4">Order History</h2>

            {/* Table */}

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">

                    {/* Head */}

                    <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                        <tr>
                            <th className="p-3"> Order ID</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Total</th>
                            <th className="p-3">Status</th>
                            <th className="p-3"></th>
                        </tr>
                    </thead>

                    {/* Body */}

                    <tbody>
                        <tr>
                            <td className="p-3">#3933</td>
                            <td className="p-3"> 4 April, 2021</td>
                            <td className="p-3">$135.00 (5 Products)</td>
                            <td className="p-3">Processing</td>
                            <td className="p-3 text-green-600 cursor-pointer"> View Details</td>
                        </tr>

                         <tr>
                            <td className="p-3">#5045</td>
                            <td className="p-3"> 27 Mar, 2021</td>
                            <td className="p-3">$25.00 (1 Products)</td>
                            <td className="p-3">On the way</td>
                            <td className="p-3 text-green-600 cursor-pointer"> View Details</td>
                        </tr>

                         <tr>
                            <td className="p-3">#5028</td>
                            <td className="p-3">20 Mar, 2021</td>
                            <td className="p-3">$250.00 (4 Products)</td>
                            <td className="p-3">Completed</td>
                            <td className="p-3 text-green-600 cursor-pointer"> View Details</td>
                        </tr>

                         <tr>
                            <td className="p-3">#4600</td>
                            <td className="p-3">19 Mar, 2021</td>
                            <td className="p-3">$35.00 (1 Products)</td>
                            <td className="p-3">Completed</td>
                            <td className="p-3 text-green-600 cursor-pointer"> View Details</td>
                        </tr>

                         <tr>
                            <td className="p-3">#4152</td>
                            <td className="p-3">18 Mar, 2021</td>
                            <td className="p-3">$578.00 (13 Products)</td>
                            <td className="p-3">Completed</td>
                            <td className="p-3 text-green-600 cursor-pointer"> View Details</td>
                        </tr>

                         <tr>
                            <td className="p-3">#8811</td>
                            <td className="p-3">10 Mar, 2021</td>
                            <td className="p-3">$345.00 (7 Products)</td>
                            <td className="p-3">Completed</td>
                            <td className="p-3 text-green-600 cursor-pointer"> View Details</td>
                        </tr>

                         <tr>
                            <td className="p-3">#3536</td>
                            <td className="p-3">5 Mar, 2021</td>
                            <td className="p-3">$560.00 (2 Products)</td>
                            <td className="p-3">Completed</td>
                            <td className="p-3 text-green-600 cursor-pointer"> View Details</td>
                        </tr>

                        <tr>
                            <td className="p-3">#1374</td>
                            <td className="p-3">27 Feb, 2021</td>
                            <td className="p-3">$250.00 (2 Products)</td>
                            <td className="p-3">Completed</td>
                            <td className="p-3 text-green-600 cursor-pointer"> View Details</td>
                        </tr>

                         <tr>
                            <td className="p-3">#7791</td>
                            <td className="p-3"> 25 Feb, 2021</td>
                            <td className="p-3">$560.00 (2 Products)</td>
                            <td className="p-3">Completed</td>
                            <td className="p-3 text-green-600 cursor-pointer"> View Details</td>
                        </tr>

                         <tr>
                            <td className="p-3">#4846</td>
                            <td className="p-3">24 Feb, 2021</td>
                            <td className="p-3">$23.00 (1 Products)</td>
                            <td className="p-3">Completed</td>
                            <td className="p-3 text-green-600 cursor-pointer"> View Details</td>
                        </tr>

                         <tr>
                            <td className="p-3">#5948</td>
                            <td className="p-3">20 Feb, 2021</td>
                            <td className="p-3">$23.00 (1 Products)</td>
                            <td className="p-3">Completed</td>
                            <td className="p-3 text-green-600 cursor-pointer"> View Details</td>
                        </tr>

                         <tr>
                            <td className="p-3">#1577</td>
                            <td className="p-3">12 Oct, 20201</td>
                            <td className="p-3">$23.00 (1 Products)</td>
                            <td className="p-3">Completed</td>
                            <td className="p-3 text-green-600 cursor-pointer"> View Details</td>
                        </tr>

                    </tbody>

                </table>
            </div>

        </div>
        </>
    )
    
}

export default OrderHistory;