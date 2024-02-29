import Label from '.././elements/Label.jsx'
import Input from '.././elements/Input.jsx';

export default ({type, globalName, children, opsional, change}) => {
  return (
    <div className={`w-full my-3 flex flex-col ${opsional}`}>
      <Label globalFor={globalName}/>
      <Input type={type} change={change} globalName={globalName}>{children}</Input>
    </div>
  )
}