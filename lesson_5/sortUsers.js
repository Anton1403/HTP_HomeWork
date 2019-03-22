let users = [
    {
        id: '1',
        name: 'c756d82sw88q',
        dob: '1998-03-14'
}, {
        id: '2',
        name: 'f854d855s85q',
        dob: '1996-01-03'
}, {
        id: '3',
        name: 'a864dsa5aww1',
        dob: '1997-01-28'
}
];

function sortUsers(param1, param2, param3) {

    param1.sort(function (a, b) {
        if (a[param2] > b[param2]) return 1;
        else if (a[param2] < b[param2]) return -1;
        else return 0;
    });
    if (param3 == 'asc') {
        console.log(param1);
    } else {
        console.log(param1.reverse());
    }
}

sortUsers(users, 'name', 'desc');
