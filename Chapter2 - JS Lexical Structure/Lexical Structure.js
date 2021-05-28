// 1. Comments

// This is a single line comment.

/* Java Script also supports multi-line comment like this one.
   You can just go on typing here and all of it will be ignored by the compiler. */


// 2. Literals

/*  A literal is a data value that appears directly in a program.
    Below are some of the valid literals in JavaScript */

12                  // The number twelve
1.2                 // The number one point two
"hello world"       // A string of text
'Hi'                // Another string
true                // A boolean value
false               // The other boolean value
null                // Absence of an object


// 3. Identifiers and Reserved Words

/* Identifiers are basically a name, they are used to name the constants, variables, properties, functions, and classes, etc. 

They have similar rules as to that of any other programming language like:
    1. Start with a lteer, underscore or a dollar sign
    2. Subsequent letters can be numbers, alphabets, underscores, or dollar signs.
    
Some legal identifiers are: */

i
my_variable_name
v13
_dummy
$str

/* Like every programming language, Java Script also has some reserved keywords which are for restricted use only. 

Some examples are shown below: */

as
async
const
export
get
null
import
if

// And many more


// 4. Unicode

/* Java script programs are written using the UNICODE character set. It allows non-ASCII characters also although they are not used that much to maintain uniformity with other programming languages */

/* Some systems are not able to display the Unicode character set, for them Java Script has escape sequences which can be used to write the Unicode characters. */

console.log("\u{1F600}");  // Prints a smiley face emoji


