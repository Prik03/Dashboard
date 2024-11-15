import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Products from './components/Products'
import Dashboard from './components/Dashboard'
import Oreders from './components/Oreders'
import Costumers from './components/Costumers'
import Transaction from './components/Transaction'
import Message from './components/Message'
import Support from './components/Support'
import Setting from './components/Setting'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="orders" element={<Oreders />} />
                    <Route path="costumers" element={<Costumers />} />
                    <Route path="transactions" element={<Transaction />} />
                    <Route path="messages" element={<Message />} />
                    <Route path="support" element={<Support />} />
                    <Route path="setting" element={<Setting />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
