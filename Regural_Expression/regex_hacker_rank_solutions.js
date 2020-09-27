/*
HackerRank : Regular Expression
Programming Language -> JavaScript
*/

//1.Matching a string
var Regex_Pattern = 'hackerrank';

//2.Matching Anything But a Newline
var Regex_Pattern = /^(.)(.)(.)\.(.)(.)(.)\.(.)(.)(.)\.(.)(.)(.)$/gi;

//3.Matching Digits & Non-Digit Characters
var Regex_Pattern = /^(\d{2})\D(\d{2})\D(\d{4}\d*)$/;

//4.Matching Whitespace & Non-Whitespace Character
var Regex_Pattern = /\S{2}\s\S{2}\s\S{2}/;

//5.Matching Word & Non-Word Character
var Regex_Pattern = /\w{3}\W\w{10}\W\w{3}/;

//6.Matching Start & End
