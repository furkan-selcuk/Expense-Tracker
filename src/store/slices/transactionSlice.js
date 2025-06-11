import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// localStorage'dan veriyi oku
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('transactions');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return [];
  }
};

// localStorage'a veriyi yaz
const saveToLocalStorage = (transactions) => {
  try {
    const serializedState = JSON.stringify(transactions);
    localStorage.setItem('transactions', serializedState);
  } catch (e) {
    // hata yönetimi
  }
};

// Asenkron ekleme örneği (şu an local, ileride API'ye kolayca uyarlanabilir)
export const addTransactionAsync = createAsyncThunk(
  'transaction/addTransactionAsync',
  async (transaction, thunkAPI) => {
    // Burada API isteği yapılabilir, şimdilik direkt döndürüyoruz
    return transaction;
  }
);

const initialState = {
  transactions: loadFromLocalStorage(),
  filter: 'all', // 'all', 'income', 'expense'
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        t => t.id !== action.payload
      );
      saveToLocalStorage(state.transactions);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setTransactions: (state, action) => {
      state.transactions = action.payload;
      saveToLocalStorage(state.transactions);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTransactionAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTransactionAsync.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
        state.status = 'succeeded';
        saveToLocalStorage(state.transactions);
      })
      .addCase(addTransactionAsync.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export const { deleteTransaction, setFilter, setTransactions } = transactionSlice.actions;
export default transactionSlice.reducer;
