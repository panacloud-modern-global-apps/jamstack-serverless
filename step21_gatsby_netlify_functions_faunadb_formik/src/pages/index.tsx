import React, {useState, useEffect} from "react"
import { useFormik, Formik, Form, ErrorMessage, Field } from 'formik';
import TextField from '@material-ui/core/TextField';

export default function Home() {
  const [mydata, setData] = useState("");


  return <div>
    <div>Directory Addition Form</div>
    <Formik initialValues={ {
            name: "",
            age: 0
        }} 
        onSubmit={(values)=>{
            console.log(values);
            fetch(`/.netlify/functions/add`, {
              method: 'post',
              body: JSON.stringify(values)
            })
          .then(response => response.json())
          .then(data => {
            setData(data);
            console.log("Data: " + JSON.stringify(data));
            
          });
        }}  >
        {
            (formik)=>(

                <Form onSubmit={formik.handleSubmit}>
                <div>
                    <Field type="text" as={TextField} variant="outlined" label="Name::" name="name" id="name" />
                    <ErrorMessage name="name" render={(msg)=>(
                        <span style={{color:"red"}}>{msg}</span>
                    )} />
                </div>
                <div>
                    <Field type="number" as={TextField} label="Age:: " variant="filled" name="age" id="age" />
                    <ErrorMessage name="age" />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </Form>


            )
        }


    </Formik>

    <div>{mydata.id}</div>
    </div>
}
