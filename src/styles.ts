import styled from 'styled-components';

export const Container = styled.div`
  color: #000;
  min-width: 860px;
`;

export const Content = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 30px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.header`
  height: 46px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;
`;

export const Navigator = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #667580;
    font-weight: bold;
    margin-left: 32px;
  }

  li:first-child {
    margin: 0;
  }

  svg {
    margin-right: 8px;
  }
`;

export const Logo = styled.div``;

export const Tools = styled.div`
  display: flex;

  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    margin: 0 15px;
  }

  button {
    height: 34px;
    background: #3bb9e3;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 90px;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    border: 0;
    border-radius: 16px;
  }
`;

export const InputText = styled.div`
  display: flex;
  align-items: center;

  background: #f5f8fa;
  border-radius: 16px;

  width: 220px;
  height: 34px;
  color: #667581;
  font-size: 12px;

  input {
    color: #667581;
    padding: 0 30px 0 12px;
    border: 1px solid #e6ecf0;
    border-radius: 16px;
  }

  svg {
    margin-left: 200px;
    position: absolute;
  }
`;

export const Banner = styled.div`
  height: 380px;
  width: 100%;
  background: #3bb9e3;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Bar = styled.div`
  height: 59px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);

  ul {
    padding-left: 285px;
    list-style: none;
    display: flex;
    height: 100%;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    position: relative;

    &.active::after {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: 0;
      left: 0;
      background: #3bb9e3;
    }

    &.active strong {
      color: #3bb9e3;
    }
  }

  span {
    color: #667580;
    font-size: 12px;
    font-weight: bold;
  }

  strong {
    color: #667580;
    font-size: 18px;
    margin-top: 2px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  button {
    height: 34px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 90px;
    font-weight: bold;
    font-size: 14px;
    color: #3bb9e3;
    background: #fff;
    border: 1px solid #3bb9e3;
    border-radius: 16px;

    margin-right: 20px;
  }
`;

export const WrapperContent = styled.div``;

export const Profile = styled.aside`
  width: 260px;

  h1 {
    font-size: 21px;
    color: #1f2226;
    margin-top: 10px;
  }

  span {
    font-size: 14px;
    color: #53626c;
  }

  p {
    font-size: 14px;
    color: #1f2226;
    margin-top: 15px;
  }

  ul.list {
    margin-top: 20px;
    list-style: none;
  }

  .list li {
    font-size: 14px;
    color: #657786;

    display: flex;
    align-items: center;
    margin-top: 5px;

    :first-child {
      margin: 0;
    }
  }

  svg {
    margin-right: 10px;
  }
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #fff;
  margin-top: -130px;
`;

export const Followers = styled.div`
  margin-top: 20px;

  strong {
    font-size: 14px;
    font-weight: normal;
    color: #3bb9e3;
    display: flex;
    align-items: center;

    img {
      margin-right: 5px;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }

  li {
    width: 45px;
    height: 45px;
    background: #d0d5d9;
    border-radius: 50%;
    flex-shrink: 0;
    margin: 0 5px 10px 0;
  }
`;

export const Images = styled.div`
  margin-top: 20px;

  strong {
    font-size: 14px;
    font-weight: normal;
    color: #3bb9e3;
    display: flex;
    align-items: center;

    img {
      margin-right: 5px;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }

  li {
    width: 80px;
    height: 80px;
    background: #d0d5d9;
    border-radius: 8px;
    flex-shrink: 0;
    margin: 0 5px 5px 0;
  }
`;

export const Timeline = styled.section`
  flex: 1;
  align-self: flex-start;
  background: #fff;
  margin: 10px 20px 0;
`;

export const NavMenu = styled.nav`
  border-bottom: 1px solid #e6ecf0;
  padding: 10px 15px;

  a {
    text-decoration: none;
    color: #3bb9e3;
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;

    &.active {
      color: #1f2226;
    }
  }

  a:first-child {
    margin: 0;
  }
`;

export const Tweets = styled.div`
  list-style: none;
`;

export const Tweet = styled.div`
  border-bottom: 1px solid #e6ecf0;
  padding: 10px 15px;
  display: flex;

  svg {
    color: #7b8b9a;
  }
`;

export const TweetAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const TweetData = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

export const TweetUser = styled.strong`
  font-size: 14px;
  color: #1f2326;

  span {
    font-size: 14px;
    font-weight: normal;
    color: #7b8b9a;
  }
`;

export const TweetText = styled.p`
  font-size: 14px;
  color: #1f2326;
  margin-top: 5px;
`;

export const TweetActions = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const TweetAction = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #7b8b9a;
  font-weight: bold;
  font-size: 12px;
  margin-left: 30px;

  :first-child {
    margin: 0;
  }

  svg {
    margin-right: 5px;
  }
`;

export const Widgets = styled.aside`
  width: 290px;
  align-self: flex-start;
  margin-top: 10px;
`;

export const Follow = styled.div`
  background: #fff;
  padding: 15px;

  ul {
    list-style: none;
    margin-top: 10px;
  }

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #ccd6dd;
    padding-bottom: 10px;
    margin-bottom: 10px;

    > a {
      color: #ccd6dd;
      text-decoration: none;
      font-size: 14px;
    }

    :last-child {
      padding-bottom: 0;
      margin-bottom: 0;
      border: 0;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: baseline;

  strong {
    font-size: 18px;
    color: #1f2226;
  }

  a {
    color: #3bb9e3;
    font-size: 12px;
    text-decoration: none;
    position: relative;
    padding-left: 10px;

    ::before {
      content: '';
      width: 2px;
      height: 2px;
      border-radius: 50%;
      background: #222;
      position: absolute;
      left: 4px;
      top: 6px;
    }
  }
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  strong {
    font-size: 14px;
    color: #1f2326;
  }

  span {
    font-weight: normal;
    color: #9a9a9a;
    margin-left: 5px;
  }

  button {
    height: 27px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 90px;
    font-weight: bold;
    font-size: 14px;
    color: #3bb9e3;
    background: #fff;
    border: 1px solid #3bb9e3;
    border-radius: 16px;

    margin-top: 4px;
  }
`;

export const Trends = styled.div`
  background: #fff;
  padding: 15px;
`;
