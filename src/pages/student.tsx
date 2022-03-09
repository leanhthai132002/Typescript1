import React from "react";
function Student(){
    return (
        <table>
            <thead className="up">
                <tr>
                    <th>Tên</th>
                    <th>Tuổi</th>
                    <th>SĐT</th>
                    <th>Email</th>
                    <th>Ảnh đại diện</th>
                    <th>Xoá</th>
                </tr>   
            </thead>
            <tbody>
                <tbody>
                    <tr>
                        <td>Ông A</td>
                        <td>10</td>
                        <td>01023012</td>
                        <td>thailaph15128@gmail.com</td>
                        <td>Xoá</td>
                    </tr>
                    <tr>
                        <td>Ông A</td>
                        <td>10</td>
                        <td>01023012</td>
                        <td>thailaph15128@gmail.com</td>
                        <td>Xoá</td>
                    </tr>
                </tbody>
            </tbody>
        </table>
    )
}
export default Student;