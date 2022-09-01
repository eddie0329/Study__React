import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import styled from 'styled-components'

const Styled = {
  link: styled(Link)`
    margin-right: 10px;
    color: black;
    text-decoration: none;
    font-weight: bold;
    &.active {
      color: palevioletred;
      text-decoration: underline
    }
  `,
}

export default function NavItem({to, name}: { to: string, name: string }) {
  const {pathname} = useLocation()
  return <Styled.link to={to} className={pathname === to ? 'active' : ''}>{name}</Styled.link>
}