import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Row, Col, Card, Spin, Descriptions } from 'antd'
import { getUsers } from '../baseService'
import { useNavigate } from 'react-router-dom'

type User = {
  address: {
    city: string,
    geo: {
      lat: string,
      lng: string,
    },
    street: string,
    suite: string,
    zipcode: string,
  },
  company: unknown,
  email: string,
  id: number,
  name: string,
  phone: string,
  username: string,
  website: string,
}

const Users: FC = () => {
  const navigate = useNavigate()

  const { data, isLoading } = useQuery({
    queryKey: ['USERS'],
    queryFn: getUsers,
  })

  return (
    <Spin spinning={isLoading} data-cy='loader'>
      <Row gutter={[16, 16]}>
        {data?.map((user: User) => (
          <Col key={user.id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card
              hoverable
              loading={isLoading}
              onClick={() => navigate(`${user.id}/albums`)}
              data-cy='user-card'
            >
              <Card.Meta
                description={(
                  <Descriptions
                    size='small'
                    title={<h2 style={{textAlign: 'center', margin: 0}}>{user.name}</h2>}
                    column={1}
                    items={[
                      {
                        key: '1',
                        label: 'Username',
                        children: user.username,
                      },
                      {
                        key: '2',
                        label: 'Email',
                        children: user.email,
                      },
                      {
                        key: '3',
                        label: 'Phone',
                        children: user.phone,
                      },
                      {
                        key: '4',
                        label: 'Website',
                        children: user.website,
                      },
                      {
                        key: '5',
                        label: 'Address',
                        children: `${user.address.suite}, ${user.address.street}, ${user.address.city} - ${user.address.zipcode}`,
                      },
                    ]} 
                  />
                )}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Spin>
  )
}

export default Users