// src/app/api/board/[id]/route.js
// localhost:3000/api/board/1
// localhost:3000/api/board/2
// localhost:3000/api/board/3
import { boards } from '../../model/boardData' // {} 속성이라 이름을 같이 해야 한다.

export async function GET(request, {params}){
    const { id } = params;
    const find = boards.find(item => item.id === id)
    return Response.json(find);
}

import fs from 'fs';
import path from 'path';
// src/app/api/board/[id]/route.js
export async function PUT(request, {params}){
    // const body = await request.json()
    // {
    //     "title" : "html",
    //     "content" : "html content ..."
    // },
    const { id } = params;
    const { title, content } = await request.json()
    // process 가 돌아가고 있음
    const index = boards.findIndex(item => item.id === id);
    const updateBoard = { id, title, content }
    boards[index] = updateBoard // 새 데이터 덮어쓰기
    boards.splice(index, 1, updateBoard);

    // pwd : 파워쉘에서 경로 가져오기
    console.log(process.cwd()); // 경로가져오기
    const filePath = path.join(process.cwd(), 'src/app/api/model', 'boardData.js') // 현재경로(최상위경로) ,  
    // fs.writeFileSync(path, data, charset) // 기본문법
    fs.writeFileSync(filePath, `export const boards = ${JSON.stringify(boards, null, 4)}`, 'utf-8') // 기본문법

    return Response.json(updateBoard);
}


// DELETE 삭제
export async function DELETE(request, {params}){
    const { id } = params;

    const index = boards.findIndex(item => item.id === id);
    const deleted = boards.splice(index, 1); // 하나 지우고 splice는 배열로 리턴한다.
    // 지운 데이터를 배열로 리턴

    const filePath = path.join(process.cwd(), 'src/app/api/model', 'boardData.js')

    fs.writeFileSync(filePath, `export const boards = ${JSON.stringify(boards, null, 4)}`, 'utf-8') // 기본문법

    return Response.json(deleted[0]); // 배열이라 안보일 수 있으니 [0]
}

