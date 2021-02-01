import { gql } from 'apollo-boost';
import { AUTH_INFO } from './fragments';

export const USER_REGISTRATION = gql`
    mutation register($input: RegistrationInput!) {
        register(input: $input) {
            ...authInfo
        }
    }
    ${AUTH_INFO}
`

export const USER_LOGIN = gql`
    mutation login($input: LoginInput!) {
        login(input: $input) {
            ...authInfo
        }
    }
    ${AUTH_INFO}
`

export const UPDATE_POINTS = gql`
    mutation updatePoints($points: Int!) {
        updatePoints(points: $points) {
            ...authInfo
        }
    }
    ${AUTH_INFO}
`

export const ADD_COUPON = gql`
    mutation addCoupon($coupon: String!) {
        addCoupon(coupon: $coupon) 
    }
`

export const REDEEM_COUPON = gql`
    mutation redeemCoupon($coupon: String!) {
        redeemCoupon(coupon: $coupon)
    }
`