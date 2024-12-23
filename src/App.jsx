import { useState, useEffect } from 'react'

function App({ supabase }) {
  const [clients, setClients] = useState([])
  const [plans, setPlans] = useState([])
  const [orders, setOrders] = useState([])

  // Загрузка данных из Supabase при монтировании компонента
  useEffect(() => {
    fetchClients()
    fetchPlans()
    fetchOrders()
  }, [])

  // Функции для работы с клиентами
  const fetchClients = async () => {
    const { data } = await supabase.from('clients').select()
    setClients(data)
  }

  const createClient = async (client) => {
    const { data, error } = await supabase.from('clients').insert([client])
    if (error) console.error('Ошибка создания клиента:', error)
    else fetchClients()
  }

  const deleteClient = async (id) => {
    const { error } = await supabase.from('clients').delete().eq('id', id)
    if (error) console.error('Ошибка удаления клиента:', error)
    else fetchClients()
  }

  // Функции для работы с тарифами
  const fetchPlans = async () => {
    const { data } = await supabase.from('plans').select()
    setPlans(data)
  }

  const createPlan = async (plan) => {
    const { data, error } = await supabase.from('plans').insert([plan])
    if (error) console.error('Ошибка создания тарифа:', error)
    else fetchPlans()
  }

  const deletePlan = async (id) => {
    const { error } = await supabase.from('plans').delete().eq('id', id)
    if (error) console.error('Ошибка удаления тарифа:', error)
    else fetchPlans()
  }

  // Функции для работы с заказами
  const fetchOrders = async () => {
    const { data } = await supabase.from('orders').select()
    setOrders(data)
  }

  const createOrder = async (order) => {
    const { data, error } = await supabase.from('orders').insert([order])
    if (error) console.error('Ошибка создания заказа:', error)
    else fetchOrders()
  }

  const deleteOrder = async (id) => {
    const { error } = await supabase.from('orders').delete().eq('id', id)
    if (error) console.error('Ошибка удаления заказа:', error)
    else fetchOrders()
  }

  return (
    <div>
      <h1>Биллинг для хостинга игровых серверов</h1>

      <ClientsSection
        clients={clients}
        createClient={createClient}
        deleteClient={deleteClient}
      />

      <PlansSection
        plans={plans}
        createPlan={createPlan}
        deletePlan={deletePlan}
      />

      <OrdersSection
        orders={orders}
        clients={clients}
        plans={plans}
        createOrder={createOrder}
        deleteOrder={deleteOrder}
      />
    </div>
  )
}

// Компоненты для каждого раздела
const ClientsSection = ({ clients, createClient, deleteClient }) => {
  // ...
}

const PlansSection = ({ plans, createPlan, deletePlan }) => {
  // ...
}

const OrdersSection = ({ orders, clients, plans, createOrder, deleteOrder }) => {
  // ...
}

export default App
