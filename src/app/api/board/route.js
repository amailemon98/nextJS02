// src/app/api/board/route.js
// localhost:3000/api/board
import { boards } from '../model/boardData'
import datas from '../model/boardData.json' 
// javascript로 자동 parse

export async function GET(){
    console.log('datas: ' , datas);
    // javascript 자동 parse
    return Response.json(boards) // json으로 리턴 끝 
}

// 1.
export async function POST(request){
    // const body = await request.json()
    // // {
    // //     "title" : "html",
    // //     "content" : "html content ..."
    // // },
    // console.log(body);
    
    const { title, content } = await request.json(); 
    console.log(title, content);
    // 
    return Response.json(title) 
}

// 2.
// export async function POST(request){
//     const body = await request.json()
    
//     console.log(body);
    
//     return Response.json(body) 
// }
// 출력 형식
// {
//     "title" : "html",
//     "content" : "html content ..."
// },