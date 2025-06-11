import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction } from "../../store/slices/transactionSlice";

export default function TransactionList() {
    const dispatch = useDispatch();
    const transactions = useSelector(state => state.transaction.transactions);
    const filter = useSelector(state => state.transaction.filter);

    const filteredTransactions =
        filter === "all"
            ? transactions
            : transactions.filter(t => t.type === filter);

    return (
        <div className="rounded-2xl border bg-white w-full mt-4 p-0 overflow-x-auto">
            <table className="min-w-full text-sm text-center">
                <thead>
                    <tr className="bg-[#e8f2f2]">
                        <th className="px-4 py-2">Tarih</th>
                        <th className="px-4 py-2">Tür</th>
                        <th className="px-4 py-2">Ad</th>
                        <th className="px-4 py-2">Miktar</th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTransactions.map((t) => (
                        <tr key={t.id} className="border-b">
                            <td className="px-4 py-2">{t.date}</td>
                            <td className="px-4 py-2">{t.type === "income" ? "Gelir" : "Gider"}</td>
                            <td className="px-4 py-2">{t.name}</td>
                            <td className="px-4 py-2">₺{t.amount}</td>
                            <td className="px-4 py-2">
                                <button
                                    onClick={() => dispatch(deleteTransaction(t.id))}
                                    className="text-[#377172] hover:text-red-500"
                                    title="Sil"
                                >
                                    <i className="bi bi-trash" />
                                </button>
                            </td>
                        </tr>
                    ))}
                    {filteredTransactions.length === 0 && (
                        <tr>
                            <td colSpan={5} className="py-4 text-gray-400">Kayıt yok</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}