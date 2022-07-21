import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TabMenu } from 'primereact/tabmenu';

const Menu: React.FC<{active: number}> = ({active=0}) => {

  const navigate = useNavigate();

  const onTabChange = (ev: any) => {
    navigate(ev.path)
  }

  const items = [
    {label: 'Home', icon: 'pi pi-fw pi-home', path: '/'},
    {label: 'Blog', icon: 'pi pi-fw pi-file', path: '/blog'}
  ]


  return (
    <div>
      <TabMenu model={items} activeIndex={active} onTabChange={(e) => onTabChange(e.value)}/>
    </div>
  )
}

export default Menu