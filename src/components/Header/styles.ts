import styled from "styled-components";

export const Container = styled.header`
  background: var(--orange);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img{
    width: 4rem;
  }

  button{
    font-size: 1rem;
    color: #fff;
    background-color: var(--orange-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;