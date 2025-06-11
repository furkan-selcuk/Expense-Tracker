import { useSelector } from "react-redux";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Balance() {
    const transactions = useSelector(state => state.transaction.transactions);
    const totalIncome = transactions
        .filter(t => t.type === "income")
        .reduce((sum, t) => sum + Number(t.amount), 0);
    const totalExpense = transactions
        .filter(t => t.type === "expense")
        .reduce((sum, t) => sum + Number(t.amount), 0);
    const balance = totalIncome - totalExpense;

    return (
        <div className="rounded-2xl border bg-white w-full h-16 flex items-center justify-center gap-4 bg-[#e8f2f2] mt-4 ">
            <i className="bi bi-wallet2"></i>
            
            <span className="text-lg font-bold">₺{balance}</span>
            
        </div>
    );
}