import React from "react";
function Student(){
    return (
        <table className="table">
            <thead >
                <tr className="up">
                    <th>Tên</th>
                    <th>Tuổi</th>
                    <th>SĐT</th>
                    <th>Email</th>
                    <th>Ảnh đại diện</th>
                    <th>Xoá</th>
                </tr>   
            </thead>
            <tbody className="down">
                    <tr>
                        <td>Ông A</td>
                        <td>10</td>
                        <td>01023012</td>
                        <td>thailaph15128@gmail.com</td>
                        <td><img src="https://picsum.photos/200" alt="" /></td>
                        <td><button>Xoá</button></td>
                    </tr>
                    <tr>
                        <td>Ông A</td>
                        <td>10</td>
                        <td>01023012</td>
                        <td>thailaph15128@gmail.com</td>
                        <td><img src="https://picsum.photos/200" alt="" /></td>
                        <td><button>Xoá</button></td>
                    </tr>
            </tbody>
        </table>

    )
}
export default Student;