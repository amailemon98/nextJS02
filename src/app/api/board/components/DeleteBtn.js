"use client"
// import React from 'react'


// 핸들러를 밖으로 빼거나
// fetch.then.then 처리
const deleteBoardId = async (id) => {
    const url = `http://localhost:3000/api/board/${id}`
    const res = await fetch(url, {method : 'DELETE'});
    const boardId = await res.json();
    console.log(boardId);
    return boardId;
  }

const DeleteBtn = ({id}) => {
  return (
    <button onClick={() => deleteBoardId(id) }>삭제</button>
  )
}

export default DeleteBtn