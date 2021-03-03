import React from 'react'
import {Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import {containLg,fm} from "./StyleAtt";

function EnterMarks() {

    const InputForm = (props) => {
        return (
            <Form style={containLg}>
                <FormGroup row>
                    <Label for = "rollno" sm={2} >Roll No.</Label>
                    <Col sm={10}>
                        <Input type="number" name="rollno" id="rollno" placeholder="Enter Roll No."/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="Name" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Input type="text" name="name" id="name" placeholder="Enter Name Here."/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="math" sm={2} style={{alignContent:"Left"}}>Math Marks</Label>
                    <Col sm={10}>
                        <Input type="number" name="math" id="math" placeholder="Marks in Maths"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="phy" sm={2}>Physics Marks</Label>
                    <Col sm={10}>
                        <Input type="number" name="phy" id="phy" placeholder="Marks in Physics"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="chem" sm={2}>Chemistry Marks</Label>
                    <Col sm={10}>
                        <Input type="number" name="chem" id="chem" placeholder="Marks in chemistry"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={9}>
                        <FormText color="muted">
                            This is the form to enter marks of student and their details. Click submit after entering Marks.
                        </FormText>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{size: 6}}>
                        <Button>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }

    return (
        <div style={fm}>
            <InputForm/>
        </div>
    )
}

export default EnterMarks
