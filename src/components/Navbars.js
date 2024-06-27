'use client'

import './Navbars.css'
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'

const navMenus = [
    {
        title : 'Home',
        path : '/'
    },
    {
        title : 'Todos',
        path : '/todos'
    },
    {
        title : 'Board',
        path : '/board'
    }
]

const Navbars = () => {
    const [ open, setOpen ] = useState(true);

    const user = true; // session이 있다는 이야기는 user가 있다는 의미 
    const isAdmin = true;
    // 일반사용자페이지
    // 관리자 페이지
    // 클릭해서 작업하도록 수정해야 함

  return (
    <div>
        {
            navMenus.map((menu) => (
                <Link href={menu.path}>{menu.title}</Link>
            ))
        }

        {
            user ? (
                <>
                    {
                        isAdmin && (
                            <NavLink item={{title : 'Admin', path : 'admin'}} />
                        )
                    }
                    <button>logout</button>
                </>
            ) : (<NavLink item={{title : 'login', path : '/login'}} />)

        }


        <button onClick={() => setOpen(!open)}>사이드바</button>

        {//open이 true이면
            open && <div className='mobile'>
                {
                    navMenus.map((menu) => (
                        <Link href={menu.path}>{menu.title}</Link>
                    ))
                }
            </div>
        }
        
    </div>
  )
}

export default Navbars