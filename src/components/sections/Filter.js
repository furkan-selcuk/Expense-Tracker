import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../store/slices/transactionSlice";

export default function Filter() {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.transaction.filter);
    return (
        <div className="bg-[#fafafb] w-full flex gap-2 bg-[#e8f2f2] mt-4 flex-col p-4 rounded-2xl border">
            <h1 className="text-lg font-bold">Filter</h1>
            <div className="flex flex-row items-center justify-center gap-2">
                <button
                    className={`px-4 py-1 rounded-md w-full ${filter === 'all' ? 'bg-[#377172] text-white' : 'bg-white border'}`}
                    onClick={() => dispatch(setFilter('all'))}
                >Tümü</button>
                <button
                    className={`px-4 py-1 rounded-md w-full ${filter === 'income' ? 'bg-[#377172] text-white' : 'bg-white border'}`}
                    onClick={() => dispatch(setFilter('income'))}
                >Gelir</button>
                <button
                    className={`px-4 py-1 rounded-md w-full ${filter === 'expense' ? 'bg-[#377172] text-white' : 'bg-white border'}`}
                    onClick={() => dispatch(setFilter('expense'))}
                >Gider</button>
            </div>
        </div>
    );
}