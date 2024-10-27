import styled from 'styled-components'

export const Container = styled.div`
    width: 100;
    height: 100vh;
    background-color: #FAFAFA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    width: 60%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    flex: 1;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
`