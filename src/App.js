import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Compnay's Budget Allocation Page</h1>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <Budget/>
                        </div>
                        <div className='col-sm'>
                            <RemainingBudget/>
                        </div>
                        <div className='col-sm'>
                            <ExpenseTotal/>
                        </div>
                    </div>
                    <h3 className='mt-3'>Allocation</h3>
                    <div className='mt-3'>
                        <ExpenseList/>
                    </div>
                    <h3 className='mt-3'>
                        Change Allocation
                    </h3>
                    <div className='col-sm'> 
                        <AllocationForm/>
                    </div>
            </div>
        </AppProvider>

    );
};
export default App;