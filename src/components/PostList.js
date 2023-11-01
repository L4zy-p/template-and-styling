import { Col, Row } from "antd"
import Post from "./Post"

const PostList = ({ datas }) => {
    return <Row gutter={[20, 20]}>
        {
            datas.map((data, index) => <Col span={24} key={index}>
                <Post index={index} data={data} />
            </Col>)
        }
    </Row>
}

export default PostList