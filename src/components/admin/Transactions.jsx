const Transactions = () => {
    const transactions = [
        {
            id: 1,
            datetime: "2024-03-28 10:30 AM",
            amount: 100.0,
            currency: "USD",
            type: "Deposit",
            from: "John Doe",
            to: "Jane Doe",
        },
        {
            id: 2,
            datetime: "2024-03-27 3:45 PM",
            amount: 50.0,
            currency: "USD",
            type: "Withdrawal",
            from: "Jane Doe",
            to: "John Doe",
        },
        {
            id: 3,
            datetime: "2024-03-26 9:15 AM",
            amount: -75.0,
            currency: "USD",
            type: "Transfer",
            from: "Alice Smith",
            to: "Bob Johnson",
        },
        {
            id: 4,
            datetime: "2024-03-25 2:30 PM",
            amount: 150.0,
            currency: "USD",
            type: "Withdrawal",
            from: "Bob Johnson",
            to: "Alice Smith",
        },
        {
            id: 5,
            datetime: "2024-03-24 11:00 AM",
            amount: -200.0,
            currency: "BIT",
            type: "Deposit",
            from: "Jane Doe",
            to: "John Doe",
        },
    ];

    return (
        <div className="mb-5 border overflow-hidden  border-gray-200 bg-white rounded-lg">
            <table className="text-gray-700 w-full text-sm   border-gray-200">
                <thead className="bg-gray-50">
                    <tr className="p-3">
                        <th className="p-3 font-medium text-center">
                            ID Transaction
                        </th>
                        <th className="p-3 font-medium text-center">
                            Date&time
                        </th>
                        <th className="p-3 font-medium text-center">Amount</th>
                        <th className="p-3 font-medium text-center">
                            Currency
                        </th>
                        <th className="p-3 font-medium text-center">Type</th>
                        <th className="p-3 font-medium text-center">From</th>
                        <th className="p-3 font-medium text-center">To</th>
                    </tr>
                </thead>
                <tbody className="text-black  text-center">
                    {transactions.slice(0, 3).map((transaction) => {
                        return (
                            <Transaction
                                id={transaction.id}
                                datetime={transaction.datetime}
                                amount={transaction.amount}
                                currency={transaction.currency}
                                type={transaction.type}
                                from={transaction.from}
                                to={transaction.to}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

const Transaction = (props) => {
    return (
        <>
            <tr key={props.id} className="">
                <td className="p-4  font-normal ">{props.id}</td>
                <td className="p-4  font-normal ">{props.datetime}</td>
                <td className="p-4  font-normal">
                    <span
                        className={` border-2 rounded-full text-sm font-medium
                        px-6 py-1  ${
                            props.amount >= 0
                                ? "text-green-400 border-green-400 bg-green-50"
                                : "text-red-400 border-red-400 bg-red-50"
                        }`}
                    >
                        ${props.amount}
                    </span>
                </td>
                <td className="p-4  font-normal ">{props.currency}</td>
                <td className="p-4  font-normal ">{props.type}</td>
                <td className="p-4  font-normal ">{props.from}</td>
                <td className="p-4  font-normal ">{props.to}</td>
            </tr>
        </>
    );
};

export default Transactions;
