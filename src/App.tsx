import React from 'react';

import { GoHome, GoMail, GoSearch, GoBell, GoClock } from 'react-icons/go';
import {
  FaEarlybirds,
  FaBaby,
  FaMapMarkerAlt,
  FaLink,
  FaRegUser,
  FaImage,
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaRegEnvelope,
  FaChevronDown,
} from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

import avatar from './assets/avatar.png';

import {
  Container,
  Content,
  Header,
  Navigator,
  Logo,
  Tools,
  InputText,
  Banner,
  Bar,
  Actions,
  WrapperContent,
  Profile,
  Avatar,
  Timeline,
  NavMenu,
  Tweets,
  Tweet,
  TweetUser,
  TweetAvatar,
  TweetData,
  TweetText,
  TweetActions,
  TweetAction,
  Widgets,
  Followers,
  Images,
  Follow,
  Trends,
  Title,
  UserInfo,
  UserProfile,
} from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Header>
        <Content>
          <Navigator>
            <ul>
              <li>
                <GoHome size={18} />
                Home
              </li>
              <li>
                <GoBell size={18} />
                Notifications
              </li>
              <li>
                <GoMail size={18} />
                Messages
              </li>
            </ul>
          </Navigator>
          <Logo>
            <FaEarlybirds size={18} color="blue" />
          </Logo>
          <Tools>
            <InputText>
              <input type="text" placeholder="Seach on Twitter" />
              <GoSearch size={18} />
            </InputText>
            <img src={avatar} alt="avatar" />
            <button type="button">Tweet</button>
          </Tools>
        </Content>
      </Header>

      <Banner>
        <h1>Twitter Rocketseat</h1>
      </Banner>

      <Bar>
        <Content>
          <ul>
            <li className="active">
              <span>Tweet</span>
              <strong>1234</strong>
            </li>
            <li>
              <span>Followings</span>
              <strong>645</strong>
            </li>
            <li>
              <span>Followers</span>
              <strong>84</strong>
            </li>
            <li>
              <span>Favorites</span>
              <strong>89</strong>
            </li>
            <li>
              <span>Tweet</span>
              <strong>1234</strong>
            </li>
          </ul>
          <Actions>
            <button type="button">Follow</button>
            <BsThreeDotsVertical size={18} />
          </Actions>
        </Content>
      </Bar>

      <WrapperContent>
        <Content>
          <Profile>
            <Avatar src={avatar} alt="Username" />
            <h1>Aleck Zander</h1>
            <span>@zanderbier</span>
            <p>
              Infraestructure manager & Rock n roll Bass Player/Trying to be a
              better UI Designer
            </p>
            <ul className="list">
              <li>
                <FaMapMarkerAlt size={18} />
                Goiânia, Brasil
              </li>
              <li>
                <FaLink size={18} />
                zanderbier.com
              </li>
              <li>
                <GoClock size={18} />
                Joined Jun 2013
              </li>
              <li>
                <FaBaby size={18} />
                Born the 25th of november 1975
              </li>
            </ul>

            <Followers>
              <strong>
                <FaRegUser size={18} />
                73 Followers that you know
              </strong>

              <ul>
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
              </ul>
            </Followers>

            <Images>
              <strong>
                <FaImage size={18} />
                273 photos and videos
              </strong>

              <ul>
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
              </ul>
            </Images>
          </Profile>

          <Timeline>
            <NavMenu>
              <a href="/#" className="active">
                Tweets
              </a>
              <a href="/#">Tweets and Replies</a>
              <a href="/#">Medias</a>
            </NavMenu>

            <Tweets>
              <Tweet>
                <TweetAvatar src={avatar} alt="tweet avatar" />
                <TweetData>
                  <TweetUser>
                    Bernouli Vrins
                    <span>@Exibit</span>
                  </TweetUser>
                  <TweetText>
                    This is a tweet in a Twitter Clone React.JS application
                    using styled components.
                  </TweetText>
                  <TweetActions>
                    <TweetAction>
                      <FaRegComment />3
                    </TweetAction>
                    <TweetAction>
                      <FaRetweet />
4
</TweetAction>
                    <TweetAction>
                      <FaRegHeart />
5
</TweetAction>
                    <TweetAction>
                      <FaRegEnvelope />3
                    </TweetAction>
                  </TweetActions>
                </TweetData>
                <FaChevronDown />
              </Tweet>

              <Tweet>
                <TweetAvatar src={avatar} alt="tweet avatar" />
                <TweetData>
                  <TweetUser>
                    Bernouli Vrins
                    <span>@Exibit</span>
                  </TweetUser>
                  <TweetText>
                    This is a tweet in a Twitter Clone React.JS application
                    using styled components.
                  </TweetText>
                  <TweetActions>
                    <TweetAction>
                      <FaRegComment />3
                    </TweetAction>
                    <TweetAction>
                      <FaRetweet />
4
</TweetAction>
                    <TweetAction>
                      <FaRegHeart />
5
</TweetAction>
                    <TweetAction>
                      <FaRegEnvelope />3
                    </TweetAction>
                  </TweetActions>
                </TweetData>
                <FaChevronDown />
              </Tweet>

              <Tweet>
                <TweetAvatar src={avatar} alt="tweet avatar" />
                <TweetData>
                  <TweetUser>
                    Bernouli Vrins
                    <span>@Exibit</span>
                  </TweetUser>
                  <TweetText>
                    This is a tweet in a Twitter Clone React.JS application
                    using styled components.
                  </TweetText>
                  <TweetActions>
                    <TweetAction>
                      <FaRegComment />3
                    </TweetAction>
                    <TweetAction>
                      <FaRetweet />
4
</TweetAction>
                    <TweetAction>
                      <FaRegHeart />
5
</TweetAction>
                    <TweetAction>
                      <FaRegEnvelope />3
                    </TweetAction>
                  </TweetActions>
                </TweetData>
                <FaChevronDown />
              </Tweet>

              <Tweet>
                <TweetAvatar src={avatar} alt="tweet avatar" />
                <TweetData>
                  <TweetUser>
                    Bernouli Vrins
                    <span>@Exibit</span>
                  </TweetUser>
                  <TweetText>
                    This is a tweet in a Twitter Clone React.JS application
                    using styled components.
                  </TweetText>
                  <TweetActions>
                    <TweetAction>
                      <FaRegComment />3
                    </TweetAction>
                    <TweetAction>
                      <FaRetweet />
4
</TweetAction>
                    <TweetAction>
                      <FaRegHeart />
5
</TweetAction>
                    <TweetAction>
                      <FaRegEnvelope />3
                    </TweetAction>
                  </TweetActions>
                </TweetData>
                <FaChevronDown />
              </Tweet>

              <Tweet>
                <TweetAvatar src={avatar} alt="tweet avatar" />
                <TweetData>
                  <TweetUser>
                    Bernouli Vrins
                    <span>@Exibit</span>
                  </TweetUser>
                  <TweetText>
                    This is a tweet in a Twitter Clone React.JS application
                    using styled components.
                  </TweetText>
                  <TweetActions>
                    <TweetAction>
                      <FaRegComment />3
                    </TweetAction>
                    <TweetAction>
                      <FaRetweet />
4
</TweetAction>
                    <TweetAction>
                      <FaRegHeart />
5
</TweetAction>
                    <TweetAction>
                      <FaRegEnvelope />3
                    </TweetAction>
                  </TweetActions>
                </TweetData>
                <FaChevronDown />
              </Tweet>
            </Tweets>
          </Timeline>

          <Widgets>
            <Follow>
              <Title>
                <strong>Who to follow</strong>
                <a href="/#">Refresh</a>
                <a href="/#">View all</a>
              </Title>

              <ul>
                <li>
                  <UserProfile>
                    <img src={avatar} alt="avatar" />
                    <UserInfo>
                      <strong>
                        Spade
                        <span>@spade_be</span>
                      </strong>
                      <button type="button">Follow</button>
                    </UserInfo>
                  </UserProfile>
                  <a href="/#">x</a>
                </li>
                <li>
                  <UserProfile>
                    <img src={avatar} alt="avatar" />
                    <UserInfo>
                      <strong>
                        Spade
                        <span>@spade_be</span>
                      </strong>
                      <button type="button">Follow</button>
                    </UserInfo>
                  </UserProfile>
                  <a href="/#">x</a>
                </li>
                <li>
                  <UserProfile>
                    <img src={avatar} alt="avatar" />
                    <UserInfo>
                      <strong>
                        Spade
                        <span>@spade_be</span>
                      </strong>
                      <button type="button">Follow</button>
                    </UserInfo>
                  </UserProfile>
                  <a href="/#">x</a>
                </li>
              </ul>
            </Follow>

            <Trends />
          </Widgets>
        </Content>
      </WrapperContent>
    </Container>
  );
};

export default Menu;
