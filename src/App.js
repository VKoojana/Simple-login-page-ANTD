
import './App.css';
import { Form , Input , Button } from 'antd';
import FormItem from 'antd/es/form/FormItem';



function App() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="App">
     <Form 
     onFinish={onFinish}
     onFinishFailed={onFinishFailed}
     >
      <FormItem label="UserName" name ="username">
        <Input placeholder='UserName' required></Input>
      </FormItem>

      <FormItem label="Password" name ="password">
        <Input placeholder='Password'required></Input>
      </FormItem>

      <FormItem>
      <Button type='primary' htmlType='submit' const path = '/dasboard'>LOG IN</Button>
        </FormItem>
        <FormItem>
        <Button type='primary'> EXIT</Button>
        </FormItem>
     </Form>
    </div>
  );
}
export default App;
