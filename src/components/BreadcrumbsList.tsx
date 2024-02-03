import { FC} from 'react'
import { Breadcrumb } from 'antd';
import { Link, useParams } from 'react-router-dom';

const sanitizeItems = (item: string) => item && !Number(item) ? item : '';

interface BreadcrumbsListProps {
  items: string[];
}

const BreadcrumbsList: FC<BreadcrumbsListProps> = ({ items }) => {
  const { userId, albumId } = useParams()

  const navigateTo = (item: string) => {
    switch (item) {
      case 'users':
        return `/${item}`
      case 'albums':
        return `/users/${userId}/${item}`
      case 'photos':
        return `/users/${userId}/albums/${albumId}/${item}`
      default:
        return '/'
    }
  }

  const breadcrumbItems = items?.map(sanitizeItems).filter(Boolean)?.map((item: string, index: number) => ({
    title: index === items.length - 1
      ? item.toLocaleUpperCase()
      : <Link to={navigateTo(item)}>{item.toLocaleUpperCase()}</Link>,
  }))

  return (
    <Breadcrumb
      style={{ margin: '1rem 0' }}
      items={breadcrumbItems}
      separator='>'
    />
  )
}

export default BreadcrumbsList
