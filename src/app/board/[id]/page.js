import DeleteBtn from '@/app/api/board/components/DeleteBtn';
import React from 'react'

// src/app/board/[id]/page.js
// localhost:3000/board/:id
// localhost:3000/board/1
// localhost:3000/board/2
// localhost:3000/board/3
const getBoardId = async (id) => {

  const url = `http://localhost:3000/api/board/${id}`
  const res = await fetch(url);
  const boardId = await res.json();
  // console.log(boardId);
  return boardId;
}


const BoardDetail = async ({params}) => {
  const { id } = params;
  const find = await getBoardId( id );

  return (
    <div>
      <h2>{find.id}: {find.title}</h2>
      <h2>{find.content}</h2>
      <DeleteBtn id={id} />
    </div>
  )
}

// 1. 데이터 직접 읽기
// import { boards } from '@/app/api/model/boardData';
// const BoardDetail = ({params}) => {
//   const { id } = params;
//   const find = boards.find(item => item.id === id)
//   return (
//     <div>
//       <h2>{find.id}: {find.title}</h2>
//       <h2>{find.content}</h2>

//     </div>
//   )
// }

export default BoardDetail