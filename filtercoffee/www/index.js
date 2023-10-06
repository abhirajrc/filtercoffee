



let imagefile = new FormData();
imagefile.append('file_url', 
        'https://i.gadgets360cdn.com/large/agnikul_cosmos_2_1635943291219.jpg');

imagefile.append('doctype', 'Employee');
imagefile.append('docname', 'HR-EMP-00002');

fetch('/api/method/upload_file', {
    headers: {
        'X-Frappe-CSRF-Token': frappe.csrf_token
    },
    method: 'POST',
    body: imagefile
})
.then(res=>res.json())
