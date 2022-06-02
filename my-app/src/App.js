import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';

function App() {
  let MedicineData = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];
  let EmployeeData = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ]

  let medicineV = MedicineData.filter((m, i) => m.status === true && m.expiry >= 2022);
  let ans = medicineV.reduce((acc, m, i) => acc + m.price, 0);
  console.log(ans);
  let Employ = EmployeeData.filter((e, i) => e.status === true);
  let total = Employ.reduce((acc, e, i) => acc + e.salary +  e.bonus, 0);


  return (
    <div className="App">
      <table border="1">
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Quantity</td>
          <td>Price</td>
          <td>Expiry</td>
          <td>Status</td>
          <td> total price </td>
        </tr>
        {
          medicineV.map((m, i) => {
            let { id, name, quantity, price, expiry, status } = m
            return (
              <tr key={i}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{expiry}</td>
                <td>{status.toString()}</td>
                {i === 0 ? <td rowspan="2">{ans}</td> : null}
              </tr>

            )
          })
        }
      </table>
      <table border="1">
        <tr>
          <td>Name</td>
          <td>age</td>
          <td>salary</td>
          <td>bonus</td>
          <td>status</td>
          <td>total bonus</td>
          <td>total expences</td>
        </tr>

        {
          Employ.map((e, i) => {
            let { name, age, salary, bonus, status } = e
            return (
              <tr key={i}>
                <td>{name}</td>
                <td>{age}</td>
                <td>{salary}</td>
                <td>{bonus}</td>
                <td>{status.toString()}</td>
                <td>{salary + bonus}</td>
                {i === 0 ? <td rowspan="4">{total}</td> : null}
              </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default App;