import { useEffect, useState } from "react";
import { recentTransactions } from "../../data/statistics/StatisticsData";
import moment from "moment";

const Transactions = () => {
    const [lastTransactions, setRecentTransactions] = useState(null);

    useEffect(() => {
        const getRecenetTrasactions = async () => {
            try {
                const result = await recentTransactions();
                setRecentTransactions(result);
            } catch (error) {
                console.log(error);
            }
        };

        getRecenetTrasactions();
    }, []);
    return (
        <div>
            <h2 className="text-xl my-2 ">Recent Transactions</h2>
            <div className="mb-5 border overflow-hidden  border-gray-200 bg-white rounded-lg">
                <table className="text-gray-700 w-full text-sm bg-white   border-gray-200">
                    <thead className="bg-gray-50">
                        <tr className="p-3">
                            <th className="p-3 font-medium text-center">
                                ID Order
                            </th>
                            <th className="p-3 font-medium text-center">
                                Date&time
                            </th>
                            <th className="p-3 font-medium text-center">
                                Amount
                            </th>
                            <th className="p-3 font-medium text-center">
                                Currency
                            </th>
                            <th className="p-3 font-medium text-center">
                                From
                            </th>
                            <th className="p-3 font-medium text-center">To</th>
                        </tr>
                    </thead>
                    <tbody className="text-black  text-center">
                        {lastTransactions &&
                            lastTransactions.length > 0 &&
                            lastTransactions?.map((transaction) => {
                                return (
                                    <Transaction
                                        id={transaction.id}
                                        datetime={transaction.created_at}
                                        amount={transaction.gig.price}
                                        currency={transaction.currency}
                                        from={transaction.client.user.name}
                                        to={transaction.gig.freelancer.user.name}
                                    />
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const Transaction = (props) => {
    return (
        <>
            <tr key={props.id} className="bg-white">
                <td className="p-4  font-normal ">{props.id}</td>
                <td className="p-4  font-normal ">{moment(props.datetime).format('YYYY-MM-DD h:mm A')}</td>
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
                <td className="p-4  font-normal ">USD</td>
                <td className="p-4  font-normal ">{props.from}</td>
                <td className="p-4  font-normal ">{props.to}</td>
            </tr>
        </>
    );
};

export default Transactions;
