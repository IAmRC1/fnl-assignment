import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Card, Spin, Image } from 'antd';
import { getAlbums } from '../baseService';

type Album = {
    userId: number;
    id: number;
    title: string;
};

interface AlbumsProps {}

const Albums: React.FC<AlbumsProps> = () => {
  const navigate = useNavigate()
  const { userId } = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['ALBUMS'],
    queryFn: () => getAlbums(userId ?? '1'),
  })

  return (
    <Spin spinning={isLoading}>
      <Row gutter={[16, 16]}>
        {data?.map((album: Album) => (
          <Col key={album.id} xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
            <Card
              hoverable
              loading={isLoading}
              onClick={() => navigate(`${album.id}/photos`)}
              cover={<Image alt={album.title} src={`https://picsum.photos/id/${album.id}/200`} preview={false} />}
            >
              <Card.Meta
                title={album.title}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Spin>
  );
};

export default Albums;