import React from 'react'
import { connect } from 'react-redux'
import { incrementNumber, decrementNumber } from '../../redux/actions/counterAction'
import { ButtonDanger, ButtonPrimary, Card, CardBody, CardFooter, CardHeader, CardTitle } from '../../style/styles';

const Counter = (props) => {
  console.log('props ', props);
  return (
    <>
    <Card>
      <CardHeader>
        <CardTitle>
          Counter
        </CardTitle>
      </CardHeader>
      <CardBody>
      <h2>{props.counter}</h2>
      </CardBody>
      <CardFooter>
      <ButtonPrimary onClick={props.incrementNumber}>decrement</ButtonPrimary>
      <ButtonDanger onClick={props.decrementNumber}>increment</ButtonDanger>
      </CardFooter>
    </Card>
    </>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    counter: state.counter.count
  }
}

export default connect(mapStateToProps, {
  incrementNumber,
  decrementNumber
})(Counter) // connect is a higher order component