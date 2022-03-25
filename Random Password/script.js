// Database قاعدة البيانات

const chars = [
    {1: "abcdefghijklmnopqrstuvwxyz"},
    {2: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
    {3: "0123456789"},
    {4: "!@#$%^&*()_+=-}{><?/;:~`\|,."}
]

// دالة generate

function generate() {
    let randomPassword = ""
    let collection_one = chars[0][1];
    let collection_two  = chars[1][2];
    let collection_three = chars[2][3];
    let collection_four = chars[3][4];

    randomPassword = randomPassword + collection_one.charAt(Math.floor(Math.random() * collection_one.length));
    randomPassword = randomPassword + collection_two.charAt(Math.floor(Math.random() * collection_two.length));
    randomPassword = randomPassword + collection_three.charAt(Math.floor(Math.random() * collection_three.length));
    randomPassword = randomPassword + collection_four.charAt(Math.floor(Math.random() * collection_four.length));
    randomPassword = randomPassword + collection_one.charAt(Math.floor(Math.random() * collection_one.length));
    randomPassword = randomPassword + collection_two.charAt(Math.floor(Math.random() * collection_two.length));
    randomPassword = randomPassword + collection_three.charAt(Math.floor(Math.random() * collection_three.length));
    randomPassword = randomPassword + collection_four.charAt(Math.floor(Math.random() * collection_four.length));
    randomPassword = randomPassword + collection_one.charAt(Math.floor(Math.random() * collection_one.length));
    randomPassword = randomPassword + collection_two.charAt(Math.floor(Math.random() * collection_two.length));
    randomPassword = randomPassword + collection_three.charAt(Math.floor(Math.random() * collection_three.length));
    randomPassword = randomPassword + collection_four.charAt(Math.floor(Math.random() * collection_four.length));
    randomPassword = randomPassword + collection_one.charAt(Math.floor(Math.random() * collection_one.length));
    randomPassword = randomPassword + collection_two.charAt(Math.floor(Math.random() * collection_two.length));
    randomPassword = randomPassword + collection_three.charAt(Math.floor(Math.random() * collection_three.length));
    randomPassword = randomPassword + collection_four.charAt(Math.floor(Math.random() * collection_four.length));

    display.value = randomPassword;
}