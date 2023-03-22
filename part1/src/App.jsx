import './App.css'
import Mensaje from './Mensaje.jsx'

// const Company = () => {
//   return (
//     <div className="containerCompany">
//       <div className="containerTitle">
//         <h3>Nombre Company</h3>
//       </div>
//       <DescriptionCompany />
//     </div>
//   )
// }

// const DescriptionCompany = () => {
//   return (
//     <div className="containerDescriptionCompany">
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, porro!</p>
//     </div>
//   ) 
// }


const App = () => {
  const mensaje = "Hola Mundo!/!"
  return (
    <div className="App">
      {/* <Company />
      <Company />
      <Company /> */}
      <Mensaje color='green' message='Estamos trabajando'/>
      <Mensaje color='yellow' message='En un curso'/>
      <Mensaje color='red' message='De React'/>
    </div>
  );
}

export default App
