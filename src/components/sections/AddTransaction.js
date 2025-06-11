import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransactionAsync } from "../../store/slices/transactionSlice";

export default function AddTransaction() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !amount || !type) return;

        const newTransaction = {
            id: Date.now(),
            name,
            amount: Number(amount),
            type,
            date: new Date().toISOString().slice(0, 10),
        };

        await dispatch(addTransactionAsync(newTransaction));
        setName("");
        setAmount("");
        setType("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-2xl border bg-[#fafafb] w-full flex items-center justify-center gap-2 bg-[#e8f2f2] mt-4 flex-row p-4"
        >
            <div className="flex flex-col items-center justify-center gap-2">
                <input
                    type="text"
                    placeholder="Harcama Adı"
                    className="border rounded px-4 py-0.5"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Harcama Tutarı"
                    className="border rounded px-4 py-0.5"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <select
                    className="border rounded px-4 py-1"
                    name="type"
                    required
                    value={type}
                    onChange={e => setType(e.target.value)}
                >
                    <option value="">Tür Seçiniz</option>
                    <option value="income">Gelir</option>
                    <option value="expense">Gider</option>
                </select>
                <button
                    type="submit"
                    className="bg-[#377172] text-white px-4 py-1 rounded-md w-full"
                >
                    Ekle
                </button>
            </div>
        </form>
    );
}