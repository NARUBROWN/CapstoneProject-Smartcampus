const DBconnection = require('../common/DBConnection');

const pool = DBconnection.pool

// 게시글 작성
let write = (req, res) => {
    const table = req.body.table;
    const stu_id = req.body.stu_id;
    const title = req.body.title;
    const user = req.body.user;
    const date = req.body.date;
    const content = req.body.content;

    console.log(table, stu_id, title, user, date, content)

    let img;
    //파일이 비어있을때
    if (req.file === undefined) {
        img = "";
    } else {
        //파일이 있을때
        img = req.file['filename'];
    }
    pool.getConnection((error, connection) => {
        connection.query(`INSERT INTO ${table}
                      VALUES (null, ?, ?, ?, ?, ?, ?)`, [title, user, date, content, img, stu_id], (error, result) => {
            if (!error) {
                res.send((result))
                console.log("[POST] 알림: " + table + "에 " + stu_id + " " + user + "이 " + title + " 게시물을 등록하였습니다.");
                connection.release();
            } else {
                throw error
            }
        });
    });
}
// 게시글 리스트
let list = (req, res) => {
    const table = req.params.table;
    const page = req.params.page * 10;

    // 탑재된 총 컨텐츠의 개수를 구한다
    let contentRow = 0;
    // 탑재된 총 컨텐츠의 개수를 구하여, 페이지 수를 구한다 (반올림)
    let contentPage = 0;

    pool.getConnection((error, connection) => {
        connection.query(`SELECT count(*) as totalCount from ${table}`, (error, result) => {
            if (!error) {
                contentRow = result[0]['totalCount'];
                contentPage = Math.ceil(contentRow / 10);
            } else {
                throw error;
            }
        });
        connection.query(`SELECT id, title, user, date from ${table} order by id desc limit ?, 10`, [page], (error, result) => {
            if (!error) {
                result.push({
                    contentRow: contentRow,
                    contentPage: contentPage
                });
                res.send((result));
            } else {
                throw error;
            }
        });
        if(!error) {
            console.log(`[GET] 알림: ${table} 게시판의 ${(page / 10) + 1}번째 목록을 불러옵니다.`);
        } else {
            throw error;
        }

    });
}
// 게시글 읽기
let read = (req, res) => {
    const table = req.params.table;
    const id = req.params.id;

    pool.getConnection((error, connection) => {
        connection.query(`SELECT * from ${table} where id = ?`, [id], (error, result) => {
            if (!error) {
                const data = [{
                    title: result[0].title,
                    date: result[0].date,
                    view: "",
                    fileName: "",
                    fileLink: "https://jeiu.ac.krundefined",
                    contents: result[0].content,
                    img: result[0].image,
                    user: result[0].user,
                    stu_id: result[0].stu_id
                }];
                res.send(data);
                console.log(`[GET] 알림: ${table} 게시판의 ` + id + " 게시글을 불러왔습니다.");
            } else {
                throw error;
            }
        });
    });
}
// 게시글 수정
let update = (req, res) => {
    const table = req.body.table;
    const id = req.body.id;
    const title = req.body.title;
    const content = req.body.content;

    pool.getConnection((error, connection) => {
        connection.query(`UPDATE ${table} SET title = ?, content = ?  WHERE id = ?`, [title, content, id], (error, result) => {
            if (!error) {
                res.send((result));
                connection.release();
                console.log(`[GET] 알림: ${table} 게시판의 ` + id + " 게시글을 수정했습니다.");
            } else {
                throw error;
            }
        });
    })
}
// 게시글 사진 수정
let update_img = (req, res) => {
    console.log("요청이 들어왔습니다.");
    const table = req.body.table;
    const id = req.body.id;
    let img;

    //파일이 비어있을때
    if (req.file === undefined) {
        img = "";
        console.log("[POST] 알림: 사용자가 게시글 사진 변경을 요청하였으나, 아무런 파일이 없었습니다.");
    } else {
        img = req.file['filename'];
    }

    pool.getConnection((error, connection) => {
        connection.query(`UPDATE ${table} SET image = ?  WHERE id = ?`, [img, id], (error, result) => {
            if (!error) {
                res.send((result));
                connection.release();
                console.log(`[GET] 알림: ${table} 게시판의 ` + id + " 게시글의 이미지를 수정했습니다.");
            } else {
                throw error;
            }
        });
    });
}
// 게시글 삭제
let contents_delete = (req, res) => {
    const table = req.params.table;
    const id = req.params.id;

    pool.getConnection((error, connection) => {
        connection.query(`DELETE
                      FROM ${table}
                      WHERE id = ?`, [id], (error, result) => {
            if (!error) {
                res.send((result));
                connection.release();
                console.log(`[GET] 알림: ${table} 게시판의 ${id} 게시글을 삭제했습니다.`);
            } else {
                throw error;
            }
        });
    })


}

// 댓글 작성
let write_comment = (req, res) => {
    const table = req.body.table;
    const content = req.body.content;
    const stu_id = req.body.stu_id;
    const user = req.body.user;
    const page_id = req.body.page_id;
    let comment_table = table + "_Comment";

    pool.getConnection((error, connection) => {
        connection.query(`INSERT INTO ${comment_table}
                      VALUES (null, ?, ?, ?, ?)`, [content, stu_id, user, page_id], (error) => {
            if (error) throw error;
            connection.release();
        });
        connection.query(`select b.id, b.content, b.stu_id, b.user
                      from ${table} a,
                           ${comment_table} b
                      where a.id = b.page_id
                        and b.page_id like ?
                      order by b.page_id desc`, [page_id], (error, result) => {
            if (!error) {
                res.send((result));
                connection.release();
                console.log("[POST] 알림: " + comment_table + "에 " + stu_id + " " + user + "이 댓글을 등록하였습니다.");
            } else {
                throw error;
            }
        });
    })
}
// 댓글 불러오기
let load_comment = (req, res) => {
    const table = req.params.table;
    const content_id = req.params.id;
    let comment_table = table + "_Comment";

    pool.getConnection((error, connection) => {
        connection.query(`select b.id, b.content, b.stu_id, b.user
                      from ${table} a,
                           ${comment_table} b
                      where a.id = b.page_id
                        and b.page_id like ?
                      order by b.page_id desc`, [content_id], (error, result) => {
            if (!error) {
                res.send((result));
                connection.release();
                console.log(`[GET] 알림:  ${table} 테이블에서 ${content_id}번 게시글의 댓글을 불러왔습니다.`);
            } else {
                throw error;
            }
        });
    })
}
// 댓글 수정
let update_comment = (req, res) => {
    // 미완성
}
// 댓글 삭제
let delete_comment = (req, res) => {
    const table = req.params.table;
    const comment_id = req.params.comment_id;
    const content_id = req.params.content_id;
    let comment_table = table + "_Comment";

    pool.getConnection((error, connection) => {
        connection.query(`DELETE
                      FROM ${comment_table}
                      WHERE id = ?`, [comment_id], (error) => {
            if (error) throw error;
            connection.release();
        });
        connection.query(`select b.id, b.content, b.stu_id, b.user
                      from ${table} a,
                           ${comment_table} b
                      where a.id = b.page_id
                        and b.page_id like ?
                      order by b.page_id desc`, [content_id], (error, result) => {
            if (!error) {
                res.send((result));
                connection.release();
                console.log(`[GET] 알림: ${comment_table} 게시판에서 ${content_id}번 게시글의 ${comment_id}번 댓글을 삭제했습니다.`);
            } else {
                throw error;
            }
        });
    })
}

module.exports = {
    write: write,
    list: list,
    read: read,
    update: update,
    update_img: update_img,
    contents_delete: contents_delete,
    write_comment: write_comment,
    load_comment: load_comment,
    update_comment: update_comment,
    delete_comment: delete_comment
};