import styled from 'styled-components';

export const Container = styled.div`
    width:70vw;
    height:50vh;
`
export const WrapperJitsi = styled.div`
    display: ${({loading})=>loading ? 'none' : 'block'};
    width: 100%;
    height: 100%;
    #jitsi-container{
        height:100%;
        width:100%;
    }
`
