import React from 'react'
import Section from './Section'
import styled from 'styled-components'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="../images/model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Exisiting Inventory"
            />
            
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="../images/model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Exisiting Inventory"
            />
            
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="../images/model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Exisiting Inventory"
            />
            
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="../images/model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Exisiting Inventory"
            />

            <Section
                title="Lowest Cost Solar Panel"
                description="Money Back Guarantee"
                backgroundImg="../images/solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />

            <Section
                title="Solar roof"
                description="Produce Clean Energy From Your Roof"
                backgroundImg="../images/solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />

            <Section
                title="Accessories"
                backgroundImg="../images/accessories.jpg"
                leftBtnText="Shop Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
height:100vh;
`
