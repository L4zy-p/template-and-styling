import { Avatar, Card, Col, Row } from 'antd';
import dayjs from "dayjs"
import { styled } from 'styled-components';

const Post = ({ data, index }) => {
    const CustomCard = styled(Card)`
    background: ${index % 2 === 0 ? "#fff" : "#ccecff"};
    .ant-card-head-title{
        color: #6e6e6e;
        padding: 10px 0;
    }
    .author-name{
        color: #f64610;
    }
    .post-image{
        width: 100%;
    }
    .post-title{
        margin: 0;
    }
    .post-body{
        margin: 0;
        margin-top: 5px;
    }
`
    return <CustomCard className='post' title={
        <Row gutter={[8, 8]} align="middle">
            <Col><Avatar src={data?.author?.avatar_url} /></Col>
            <Col className='author-name'>{data?.author?.name}</Col>
            <Col>post on</Col>
            <Col>{dayjs(data?.created_at).format("dddd, MMM D, YYYY, HH:mm")}</Col>
        </Row>
    }>
        <Row gutter={[10, 10]}>
            <Col xs={24} md={10}>
                <img className='post-image' src={data?.image_url} alt="post" />
            </Col>
            <Col xs={24} md={14}>
                <h2 className='post-title'>{data?.title}</h2>
                <p className='post-body'>{data?.body}</p>
            </Col>
        </Row>
    </CustomCard>
}

export default Post