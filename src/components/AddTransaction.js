import Button from 'react-bootstrap/Button'
import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { GlobalContext } from '../context/AppContext'


function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [validated, setValidated] = useState(false);
    const { addTransaction } = useContext(GlobalContext);

    // add transaction function  && validate inputs
    const addFunction = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            setValidated(true);
        } else {
            addTransaction(text, amount);
            setText('');
            setAmount('');
            setValidated(false);
        }
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <Form noValidate validated={validated} onSubmit={addFunction}>
                <Form.Group className="mb-3 d-flex flex-column " controlId="formBasicEmail">
                    <div className='d-flex align-items-center'>
                        <Form.Label className='px-2 fw-bold'>Text</Form.Label>
                        <Form.Control type="text" placeholder="Enter text" value={text} onChange={(e) => setText(e.target.value)} required />
                    </div>
                    <Form.Text className="text-muted ">
                        We'll never share your info with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicEmail">
                    <Form.Label className='px-2 fw-bold'>Amount</Form.Label>
                    <Form.Control type="number" placeholder="Enter Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                </Form.Group>
                <Button variant="success" type="submit" className='btn w-100' >
                    Add transaction
                </Button>
            </Form>

        </div>

    )
}

export default AddTransaction