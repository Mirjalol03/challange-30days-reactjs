import styled from "styled-components";



const Card = styled.div`
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    margin: 0 0 1rem 0;
    padding: 1rem;
`

const CardHeader = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`
const CardTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
`
const CardBody = styled.div`
    margin: 1rem 0;
`

const CardFooter = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    gap: 15px;
`



const Button = styled.button`
    /* border: 1px solid #000; */
    border: none;
    border-radius: 3px;
    color: #000;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 0.71rem;
    transition: all 0.2s ease-in-out;
`

const ButtonPrimary = styled(Button)`
    background: #4961e6;
    color: #fff;
    &:hover {
        background: #3a4db7;
    }
`

const ButtonDanger = styled(Button)`
    background: #e64961;
    color: #fff;
    &:hover {
        background: #b73a4d;
    }
`


export {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardFooter,
    Button,
    ButtonPrimary,
    ButtonDanger
}