import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container } from 'react-bootstrap';
import Bg from '../assets/images/bg22.jpg';
import { useHistory } from "react-router-dom";
import Bounce from "react-reveal/Bounce";


const HeroArea = () => {
    const history = useHistory();
    function GoServices() {
        history.push("/items");
    }
    return (
        <div
            style={{
                background: `url(${Bg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
            }}
        >
            <Container>
                <div
                    style={{ height: "90vh" }}
                    className="d-flex justify-content-center align-items-center"
                >
                    <div className="text-center my-5 py-5">
                        <Bounce left cascade>
                            <h1 className="text-white">Welcome to carMax.com</h1>
                        </Bounce>

                        <Bounce right cascade>
                            <p className="my-4 text-white fs-5">
                                Lead a speedy life.We are here,whenever you need us.Let us help you to choose a car of your life!!
                            </p>
                        </Bounce>

                        <Bounce>
                            <Button
                                onClick={GoServices}
                                className="rounded-pill fs-5 py-2 px-4 btn-primary"
                            >
                                View Items
                            </Button>
                        </Bounce>
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default HeroArea;