
import { Col, Row } from "antd"
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import PostList from './components/PostList';

import posts from "./mock/posts.json"
import authors from "./mock/authors.json"

import './App.css';

const DivApp = styled.div`
  padding: 20px;
  .app-title{
    margin-bottom: 30px;
  }
`

function App() {
  const [datas, setDatas] = useState([])

  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

  const getData = () => {
    let values = []
    posts.forEach((post) => {
      let author = authors.filter((author) => author.id === post.author_id)?.[0]
      values.push({
        ...post,
        author
      })
    })
    setDatas(values)
  }
  useEffect(() => { getData() }, [])

  return (
    <DivApp>
      <Row justify={'center'}>
        <Col xs={24} lg={16}>
          <h1 className='app-title'>MAQE Forum</h1>
          <h3>You current time {timeZone}</h3>
          <PostList datas={datas} />
        </Col>
      </Row>
    </DivApp>
  );
}

export default App;
