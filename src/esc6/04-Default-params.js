function newUser(name, age, country) {
    var name = name || 'oscar';
    var age = age || 25;
    var country = country || 'Colombia';
    console.log(name, age, country);
}

newUser();
newUser('david', 35, 'mexico');

function newAdmin(name = 'santi', age = 17, country = 'Mx') {
    console.log(name, age, country);
};

newAdmin();
newAdmin('ana', 18, 'peru');
