import styled from 'styled-components';

export const Wrap = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 68px;
  padding: 0 24px;
  border-bottom: 1px solid #3c3c3c;
  justify-content: space-between;
  background: var(--main-color);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

Content.Logo = styled.h1``;
Content.Text = styled.span`
  margin-left: 16px;
`;
Content.SwitchMode = styled.div``;
export const Links = styled.div`
  display: flex;
  gap: 10px;
`;

Links.Link = styled.span`
  color: var(--color-text-white);
`;
