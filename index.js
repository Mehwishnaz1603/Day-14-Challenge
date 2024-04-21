// 🚀 Day 14 Challenge: Start Coding! 🚀//
//Q40: Album: Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, and it should return a
//Object containing these two pieces of information. Use the function to make three dictionaries
//representing different albums. Print each return value to show that Objects are storing the 
//album information correctly. Add an optional parameter to make_album() that allows you to store 
//the number of tracks on an album. If the calling line includes a value for the number of tracks,
//add that value to the album’s Object. Make at least one new function call that includes the number
// of tracks on an album.
function make_album(artistName, title) {
    return { artistName: artistName, title: title };
}
var album_1 = make_album("Atif Aslam", "Ao Madiney chalay");
var album_2 = make_album("NFAK", "Kamli Waly");
var album_3 = make_album("Amjad Sabri", "Bhardo Jholi Meri Ya Muhammad");
console.log(album_1);
console.log(album_2);
console.log(album_3);
//////Number Of Track////
function make_album_2(artistName, title, noOfTracks) {
    return { artistName: artistName, title: title, noOfTracks: noOfTracks };
}
var album_4 = make_album_2("Atif Aslam", "Ao Madiney chalay", 8);
var album_5 = make_album_2("NFAK", "Kamli Waly", 16);
var album_6 = make_album_2("Amjad Sabri", "Bhardo Jholi", 0);
console.log(album_4);
console.log(album_5);
console.log(album_6);
//Q41: Magicians: Make a array of magician’s names. Pass the array to a function 
//called show_magicians(), which prints the name of each magician in the array.
var magician_name = ["Jack Nelson", "Herry Brown", "Peter", "Henry"];
function show_magicians(magicin_name) {
    magician_name.forEach(function (magician_name) {
        console.log(magician_name);
    });
}
show_magicians(magician_name);
//Q42: Great Magicians: Start with a copy of your program from Exercise 39. 
//Write a function called make_great() that modifies the array of magicians
//by adding the phrase the Great to each magician’s name. Call show_magicians()
//to see that the list has actually been modified.
var magicians_name = ["Harry Houdini", "Peter nelson", "Azur russel"];
function make_Great() {
    magicians_name.splice(3, 0, "The Great");
    console.log(magicians_name);
}
make_Great();
