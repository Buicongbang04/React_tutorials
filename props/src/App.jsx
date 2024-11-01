import Student from './Student.jsx'


function App() {
  return (
    <>
      <Student name="BangBui" age={20} isStudent={false}/>
      <Student name="PhuTrac" age={19} isStudent={true}/>
      <Student name="BangBui" age={20} isStudent={true}/>
      <Student />
    </>
  );
}

export default App;
