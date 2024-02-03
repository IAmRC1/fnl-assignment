import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, Spin, Image } from 'antd';
import { getPhotos } from '../baseService';

type Photo = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

interface PhotosProps {}

const Photos: React.FC<PhotosProps> = () => {
  const { albumId } = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['PHOTOS'],
    queryFn: () => getPhotos(albumId ?? '1'),
  })

  return (
    <Spin spinning={isLoading}>
      <Row gutter={[16, 16]}>
        {data?.map((photo: Photo) => (
          <Col key={photo.id} xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
            <Card
              hoverable
              loading={isLoading}
              onClick={() => window.open(photo.url, '_blank')}
              cover={<Image alt={photo.title} src={photo.thumbnailUrl} preview={false} />}
            >
              <Card.Meta title={photo.title} />
            </Card>
          </Col>
        ))}
      </Row>
    </Spin>
  );
};

export default Photos;