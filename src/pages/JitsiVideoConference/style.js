import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    height:100vh;
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
export const LoadingWrapper = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`