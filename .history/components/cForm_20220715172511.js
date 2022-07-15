import { Col, Row, Form, Button, Accordion } from 'react-bootstrap';
import consumerStyles from "../styles/consumer.module.css";
import Share from "./cshare";
import SearchBar from "./csearch";
import { useState,useEffect } from "react";
const cForm = ({comp,setst,st}) => {
    // const [name, setName] = useState('');
    // const [mobile, setMobile] = useState('');
    // const [email, setEmail] = useState('');
    // const [problem, setProblem] = useState('');
    // const [error, seterror] = useState('');
    
    const [Data,setData] =useState({});
    const [isSubmit,setsub] =useState(false);
    const [cnam,setcnam]=useState('');
    const [cid,setcid] = useState('');
    const [cad,setcad] = useState('');
  const onChangeHandler =(e)=>{
   setData((state)=>{
    return{
        ...state,
        [e.target.name]: e.target.value,
    }
   })
  }
  useEffect(() => {
    if(isSubmit){
   async function fun(){ 
     try {
        const response = await fetch("/api/consumersheet", {
            method: "POST",
            body: JSON.stringify(Data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (await response.status == 201) {
            setst(false);
        } else {
            throw response.json()
        }
        setsub(false);


    } catch (e) {
        console.log(e)
        alert("There was an error in submitting\nPlease try again")
        setsub(false);
        // setName('');
        // setMobile('');
        // setEmail('');
        // setProblem('');
        // setst(false);
    }
   }
   fun();
}
    },[isSubmit])
  
  async function onSubmitHandler(e){
    e.preventDefault();
    setData((state)=>{
    return{
    ...state,
    cnam:cnam,
    cid:cid,
    cad:cad  } });
    setsub(true);
  }
  
  return (
    <>
    {st ? 
    <Form className={consumerStyles.frm} method="post" onSubmit={onSubmitHandler}>
    <div className={consumerStyles.grev}>
        Submit your Grievance
    </div>
    <div className={consumerStyles.details}>
        {/* <Accordion>
            <Accordion.Item eventKey="0" style={{ background: "#424242" }}>
                <Accordion.Header><div className={consumerStyles.id}>Consumer Details</div></Accordion.Header>
                <Accordion.Body className={consumerStyles.cbd}>
                    
                </Accordion.Body>
            </Accordion.Item>
        </Accordion> */}
        <Form.Group className={consumerStyles.det} >
                        {/* <Form.Label className={consumerStyles.nam}>Name</Form.Label> */}
                        <Form.Control className={consumerStyles.plc} name="name" type="text" placeholder="Name" required onChange={onChangeHandler} />
                    </Form.Group>

                    <Form.Group className={consumerStyles.det} >
                        {/* <Form.Label className={consumerStyles.nam}>Mobile No.</Form.Label> */}
                        <Form.Control className={consumerStyles.plc} name="mobnum" type="Mobile No." pattern="[0-9]{10}" placeholder="Mobile No." onChange={onChangeHandler} />
                    </Form.Group>

                    <Form.Group className={consumerStyles.det} >
                        {/* <Form.Label className={consumerStyles.nam}>Email Id.</Form.Label> */}
                        <Form.Control className={consumerStyles.plc} name="email" type="email" placeholder="Email Id." required onChange={onChangeHandler} />
                    </Form.Group>
                    <Form.Group className={consumerStyles.det} >
                        {/* <Form.Label className={consumerStyles.nam}>Address of Consumer</Form.Label> */}
                        <Form.Control className={consumerStyles.plc} name="address" placeholder="Address of Consumer" required onChange={onChangeHandler}/>
                    </Form.Group>
        <Accordion >
            <Accordion.Item eventKey="0" style={{ background: "#424242", borderRadius:"20px" }}>
                <Accordion.Header><div className={consumerStyles.id}>Product Details</div></Accordion.Header>
                <Accordion.Body className={consumerStyles.cbd}>

                <SearchBar comp={comp} setCompany={setcnam} setData={setData} setCId ={setcid} setcad={setcad}/>
                    <Form.Group className={consumerStyles.det} >
                        {/* <Form.Label className={consumerStyles.nam}>Name</Form.Label> */}
                        <Form.Control className={consumerStyles.plc} type="tel" name="cost"  required placeholder="Cost of Product" onChange={onChangeHandler}/>
                    </Form.Group>
                    <Form.Group className={consumerStyles.det} >
                        {/* <Form.Label className={consumerStyles.nam}>Name</Form.Label> */}
                        <Form.Control className={consumerStyles.plc} type="tel" name="order"  required placeholder="Invoice ID" onChange={onChangeHandler}/>
                    </Form.Group>
                    <Form.Group className={consumerStyles.det}>
                        {/* <Form.Label className={consumerStyles.nam}>Problem Faced</Form.Label> */}
                        <Form.Select className={consumerStyles.pot} name="problem" onChange={onChangeHandler} required>
                            <option value="" disabled selected>Problem faced</option>
                            <option >Received defective product</option>
                            <option >Received an empty box</option>
                            <option >Late delivery</option>
                            <option >Not satisfied with the service</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className={consumerStyles.det}>
                        {/* <Form.Label className={consumerStyles.nam}>Demand from the company</Form.Label> */}

                        <Form.Select className={consumerStyles.pot} required name="demand" onChange={onChangeHandler}>
                            <option value="" disabled selected>Demand from the company</option>
                            <option>Refund of my money</option>
                            <option>Replacement of the product</option>

                        </Form.Select>
                    </Form.Group>
                    {/* <Form.Group controlId="formFile">
                        <Form.Label className={consumerStyles.nam}>Proof</Form.Label>
                        <Form.Control className={consumerStyles.plc}  type="file" />
                    </Form.Group> */}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>


        <Form.Group className={consumerStyles.terms} >
            <Form.Check type="checkbox" label="I consent to take legal action against the company & demand my compensation." required/>

        </Form.Group>
        <Button variant="primary" type="submit" className={consumerStyles.sub} >
            Send
        </Button>
    </div>

</Form> : <Share cnam={cnam}/>}
</>
  );
};

export default cForm;
