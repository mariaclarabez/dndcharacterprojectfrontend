import Modal from 'react-bootstrap/Modal'
import {React, useState} from "react";
import Button from 'react-bootstrap/Button'
import '../../api/apiHelper'
import Form from "react-bootstrap/Form"


export default function RegisterModal({show, onUpdateRegister, onCancel}) {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [roleReg, setRoleReg] = useState('member');
    // const [registeredUsers, setRegisteredUsers] = useState([]);

    
    
    // async function fetchData() {
    //     const registeredUsers = await getRegisteredUsers();
    //     console.log(registeredUsers)
    //     setRegisteredUsers(registeredUsers);
    // };

    // useEffect(()=>{
    //     fetchData();
    // }, []);

    async function register() {
        onUpdateRegister(usernameReg, passwordReg, roleReg)
    }


    const handleUsernameChange = (event) => {
        setUsernameReg(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPasswordReg(event.target.value);
    };
    
    const handleRoleChange = (event) => {
        setRoleReg(event.target.value);
        console.log(event.target.value);
    }

    
    return(
        <Modal show={show} onHide={onCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={register}>
                    <p>Username:</p>
                    <Form.Control value={usernameReg} onChange={handleUsernameChange} />
                    <p>Password:</p>
                    <Form.Control value={passwordReg} onChange={handlePasswordChange} />
                    <br/>
                    <p>Choose a Role to Register Under</p>
                    <div>
                        <label>
                            <input
                                type={'radio'}
                                value={'admin'}
                                checked={roleReg == 'admin'}
                                onChange={handleRoleChange}
                            />
                            <b> Admin: </b>Admins are responsible for moderating the forums and cannot participate
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type={'radio'}
                                value={'player'}
                                checked={roleReg == 'player'}
                                onChange={handleRoleChange}
                            />
                            <b> Player: </b>Players are able to create characters and participate in forums
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type={'radio'}
                                value={'member'}
                                checked={roleReg == 'member'}
                                onChange={handleRoleChange}
                            />
                            <b> Member: </b> Members are able to participate in forums
                        </label>
                    </div>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>
                    Close
                </Button>
                <Button variant="primary" onClick={register}>
                Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}