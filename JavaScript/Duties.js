window.addEventListener('load', Loaded, false);
var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]; // list of days

var people = [
    'Undefined',
    'Maxim Basov',
    'Josh Bonner',
    'John Briggs',
    'Archie Haines-Moss',
    'Jaden Hall',
    'Felix Liesching',
    'Aj Male',
    'Max O\'Donahue',
    'Tom Sharps', // 4thth
    'Jack Chiu', // 10
    'Oscar Davsion',
    'Luke Good',
    'Tom Heap',
    'Alex Hicks',
    'Henry Howeson',
    'Ollie Kirwan',
    'Joe Lee',
    'Tom Leeds',
    'Vishwas Mishra',
    'Pat Ongvasith', // 20
    '',
    'Jack Snell',
    'Louis Tarvin',
    'Tom Taylor',
    'Ollie Thompson',
    'Max Young', // L5th
    'Felix Charlesworth',
    'Isaac Evans',
    'Heywood Ng',
    'Luke Parker', // 30
    'Henry Stitt',
    'Max Sutton',
    'Andrey Svetakov',
    'John Wheaton',
    'Brendan Yam', // U5th
    'Myles Burrows',
    'Nikos Cheng',
    'Jeffrey Cheung',
    'Ethan Dias',
    'Louis Frost', // 40
    'Joe Haines-Moss',
    'Toby Harries',
    'Theo Lloyd',
    'Michael Lui',
    'Jamie Nicholson',
    'Charlie Pilcher',
    'Chris Schumacher',
    'Ollie Viner', // L6th
    'Mo\'aiyed Al-Shukairi',
    'Stephen Chen', // 50
    'Marc Di Lucia',
    'Sam Jones',
    'Dan Kovalenko',
    'Keiyu Lin',
    'Jack Low',
    'Sam Reynolds',
    'Viktor Stanchev',
    'Yan Stayetski',
    'Sasha Tsymbalov', // U6
    'Mr. Savage', // House Master // 60
    'Mr. Williams', // Deputy House Master and 4th
    'Mr. Loosmore', // L5th
    'Mr. Smethurst and Mr. Nicholson', // U5th
    'Mr. Jenks', // L6th
    'Dr. Baragwanath' // U6th
]; // list of Pupils and Staff in the house

var MondayOdd = [
    people[63], // Staff
    people[59], // Prefect
    people[55],  // Settler’s
    people[40], // Settler’s
    people[3],
    people[22],
    people[11]
];
    
var TuesdayOdd = [
    people[64], // Staff
    people[56], // Prefect
    people[48],  // Settler’s
    people[39], // Settler’s
    people[30],
    people[9]
];
        
var WednesdayOdd = [
    people[62], // Staff
    people[52], // Prefect
    people[47],  // Settler’s
    people[38], // Settler’s
    people[28],
    people[18],
    people[6]
];
        
var ThursdayOdd = [
    people[65], // Staff
    people[54], // Prefect
    people[46],  // Settler’s
    people[38], // Settler’s
    people[27],
    people[16],
    people[5]
];
        
var FridaySaturdayOdd = [
    people[60], // Staff
    people[54], // Prefect
    people[58],  // Settler’s
    people[35],
    people[17],
    people[1]
];

var SundayOdd = [
    people[61], // Staff
    people[56], // Prefect
    people[57],  // Settler’s
    people[29],
    people[10]
];
    
var MondayEven = [
    people[63], // Staff
    people[53], // Prefect
    people[45], // Settler’s
    people[36], // Settler’s
    people[26],
    people[15],
    people[4]
];
        
var TuesdayEven = [
    people[64], // Staff
    people[49], // Prefect
    people[43], // Settler’s
    people[34],
    people[25],
    people[14],
    people[3]
];
        
var WednesdayEven = [
    people[62], // Staff
    people[51], // Prefect
    people[42],  // Settler’s
    people[33],
    people[24],
    people[13],
    people[2]
];
        
var ThursdayEven = [
    people[65], // Staff
    people[58], // Prefect
    people[41],  // Settler’s
    people[32],
    people[23],
    people[12] // up to here
];
        
var FridaySaturdayEven = [
    people[60], // Staff
    people[59], // Prefect
    people[50],  // Settler’s
    people[20],
    people[8]
];
        
var SundayEven = [
    people[61], // Staff
    people[53], // Prefect 
    people[44],  // Settler’s
    people[19],
    people[7]
];
function Loaded() {
    "use strict";
    var  d, now, out_string, start, lastMonday, oneDay, diffDays; // creates all other variables
    now = new Date(); // sets now to the date now
    start = new Date('4 Jan, 2016 12:00:00'); // sets start to a particular date (must be a Monday)
    d = now.getDay(); // sets d to the day of the week (0—6, Sun—Sat)
    out_string = days[d]; // sets out_string to the name of the day corresponding with the day of the week
    document.getElementById('Day').innerHTML = out_string; // prints the day on the page in the element with id = day
    oneDay = 24 * 60 * 60 * 1000; // calculates a day in milliseconds

    if (d === 0) {
        lastMonday = (now.getTime() - (6 * oneDay));
    } else {
        lastMonday = (now.getTime() - ((d - 1) * oneDay));
    } // finds the time of last Monday

    diffDays = Math.round(Math.abs((lastMonday - start.getTime()) / (oneDay))); // finds the number of days since last Monday and the start Monday
    if ((d === 0) && ((diffDays % 28) === 0)) {
        out_string = SundayOdd[1] + ', ' + SundayOdd[2] + ', ' + SundayOdd[3] + ' and ' + SundayOdd[4];
        document.getElementById("Team").innerHTML = out_string;
    } else if ((d === 0) && (((diffDays - 7) % 28) === 0)) {
        out_string = SundayEven[1] + ', ' + SundayEven[2] + ', ' + SundayEven[3] + ' and ' + SundayEven[4];
        document.getElementById("Team").innerHTML = out_string;
    } else if ((d === 0) && (((diffDays - 14) % 28) === 0)) {
        out_string = SundayOdd[1] + ', ' + SundayOdd[2] + ', ' + SundayOdd[3] + ' and ' + SundayOdd[4];
        document.getElementById("Team").innerHTML = out_string;
    } else if ((d === 0) && (((diffDays - 21) % 28) === 0)) {
        out_string = SundayEven[1] + ', ' + SundayEven[2] + ', ' + SundayEven[3] + ' and ' + SundayEven[4];
        document.getElementById("Team").innerHTML = out_string;
    } else if ((d === 1) && ((diffDays % 14) === 0)) {
        out_string = MondayOdd[1] + ', ' + MondayOdd[2] + ', ' + MondayOdd[3] + ', ' + MondayOdd[4] + ', ' + MondayOdd[5] + ' and ' + MondayOdd[6];
        document.getElementById("Team").innerHTML = out_string;
    } else if ((d === 1) && (((diffDays - 7) % 14) === 0)) {
        out_string = MondayEven[1] + ', ' + MondayEven[2] + ', ' + MondayEven[3] + ', ' + MondayEven[4] + ', ' + MondayEven[5] + ' and ' + MondayEven[6];
        document.getElementById("Team").innerHTML = out_string;
    } else if ((d === 2) && ((diffDays % 14) === 0)) {
        out_string = TuesdayOdd[1] + ', ' + TuesdayOdd[2] + ', ' + TuesdayOdd[3] + ', ' + TuesdayOdd[4] + ', ' + TuesdayOdd[5] + ' and ' + TuesdayOdd[6];
        document.getElementById("Team").innerHTML = out_string;
    } else if ((d === 2) && (((diffDays - 7) % 14) === 0)) {
        out_string = TuesdayEven[1] + ', ' + TuesdayEven[2] + ', ' + TuesdayEven[3] + ', ' + TuesdayEven[4] + ', ' + TuesdayEven[5] + ' and ' + TuesdayEven[6];
        document.getElementById("Team").innerHTML = out_string;
    } else if ((d === 3) && ((diffDays % 14) === 0)) {
        out_string = WednesdayOdd[1] + ', ' + WednesdayOdd[2] + ', ' + WednesdayOdd[3] + ', ' + WednesdayOdd[4] + ', ' + WednesdayOdd[5] + ' and ' + WednesdayOdd[6];
        document.getElementById("Team").innerHTML = out_string;
    } else if ((d === 3) && (((diffDays - 7) % 14) === 0)) {
        out_string = WednesdayEven[1] + ', ' + WednesdayEven[2] + ', ' + WednesdayEven[3] + ', ' + WednesdayEven[4] + ', ' + WednesdayEven[5] + ' and ' + WednesdayEven[6];
        document.getElementById("Team").innerHTML = out_string;
    } else if ((d === 4) && ((diffDays % 14) === 0)) {
        out_string = ThursdayOdd[1] + ', ' + ThursdayOdd[2] + ', ' + ThursdayOdd[3] + ', ' + ThursdayOdd[4] + ', ' + ThursdayOdd[5] + ' and ' + ThursdayOdd[6];
        document.getElementById("Team").innerHTML = out_string;
    } else if ((d === 4) && (((diffDays - 7) % 14) === 0)) {
        out_string = ThursdayEven[1] + ', ' + ThursdayEven[2] + ', ' + ThursdayEven[3] + ', ' + ThursdayEven[4] + ' and ' + ThursdayEven[5];
        document.getElementById("Team").innerHTML = out_string;
    } else if ((d === 5 || 6) && ((diffDays % 28) === 0)) {
        out_string = FridaySaturdayOdd[1] + ', ' + FridaySaturdayOdd[2] + ', ' + FridaySaturdayOdd[3] + ', ' + FridaySaturdayOdd[4] + ' and ' + FridaySaturdayOdd[5];
        document.getElementById("Team").innerHTML = out_string;
    } else if ((d === 5 || 6) && (((diffDays - 7) % 28) === 0)) {
        out_string = FridaySaturdayEven[1] + ', ' + FridaySaturdayEven[2] + ', ' + FridaySaturdayEven[3] + ' and ' + FridaySaturdayEven[4];
        document.getElementById("Team").innerHTML = out_string;
    } else if ((d === 5 || 6) && (((diffDays - 14) % 28) === 0)) {
        out_string = FridaySaturdayOdd[1] + ', ' + FridaySaturdayOdd[2] + ', ' + FridaySaturdayOdd[3] + ' and ' + FridaySaturdayOdd[4] + ' and ' + FridaySaturdayOdd[5];
        document.getElementById("Team").innerHTML = out_string;
    } else if ((d === 5 || 6) && (((diffDays - 21) % 28) === 0)) {
        out_string = FridaySaturdayEven[1] + ', ' + FridaySaturdayEven[2] + ', ' + FridaySaturdayEven[3] + ' and ' + FridaySaturdayEven[4];
        document.getElementById("Team").innerHTML = out_string;
    } else {
        document.getElementById("Team").innerHTML = 'error';
    }

    if ((d === 0) && ((diffDays % 28) === 0)) {
        out_string = 'Duty Tutor is ' + SundayOdd[0];
        document.getElementById("Tutor").innerHTML = out_string;
    } else if ((d === 0) && (((diffDays - 7) % 28) === 0)) {
        out_string = 'Duty Tutor is ' + SundayEven[0];
        document.getElementById("Tutor").innerHTML = out_string;
    } else if ((d === 0) && (((diffDays - 14) % 28) === 0)) {
        out_string = 'Duty Tutor is ' + SundayOdd[0];
        document.getElementById("Tutor").innerHTML = out_string;
    } else if ((d === 0) && (((diffDays - 21) % 28) === 0)) {
        out_string = 'Duty Tutor is ' + SundayEven[0];
        document.getElementById("Tutor").innerHTML = out_string;
    } else if ((d === 1) && ((diffDays % 14) === 0)) {
        out_string = 'Duty Tutors are ' + MondayOdd[0];
        document.getElementById("Tutor").innerHTML = out_string;
    } else if ((d === 1) && (((diffDays - 7) % 14) === 0)) {
        out_string = 'Duty Tutors are ' + MondayEven[0];
        document.getElementById("Tutor").innerHTML = out_string;
    } else if ((d === 2) && ((diffDays % 14) === 0)) {
        out_string = 'Duty Tutor is ' + TuesdayOdd[0];
        document.getElementById("Tutor").innerHTML = out_string;
    } else if ((d === 2) && (((diffDays - 7) % 14) === 0)) {
        out_string = 'Duty Tutor is ' + TuesdayEven[0];
        document.getElementById("Tutor").innerHTML = out_string;
    } else if ((d === 3) && ((diffDays % 14) === 0)) {
        out_string = 'Duty Tutor is ' + WednesdayOdd[0];
        document.getElementById("Tutor").innerHTML = out_string;
    } else if ((d === 3) && (((diffDays - 7) % 14) === 0)) {
        out_string = 'Duty Tutor is ' + WednesdayEven[0];
        document.getElementById("Tutor").innerHTML = out_string;
    } else if ((d === 4) && ((diffDays % 14) === 0)) {
        out_string = 'Duty Tutor is ' + ThursdayOdd[0];
        document.getElementById("Tutor").innerHTML = out_string;
    } else if ((d === 4) && (((diffDays - 7) % 14) === 0)) {
        out_string = 'Duty Tutor is ' + ThursdayEven[0];
        document.getElementById("Tutor").innerHTML = out_string;
    } else if ((d === 5 || 6) && ((diffDays % 28) === 0)) {
        out_string = 'Duty Tutor is ' + FridaySaturdayOdd[0];
        document.getElementById("Tutor").innerHTML = out_string;
    } else if ((d === 5 || 6) && (((diffDays - 7) % 28) === 0)) {
        out_string = 'Duty Tutor is ' + FridaySaturdayEven[0];
        document.getElementById("Tutor").innerHTML = out_string;
    } else if ((d === 5 || 6) && (((diffDays - 14) % 28) === 0)) {
        out_string = 'Duty Tutor is ' + FridaySaturdayOdd[0];
        document.getElementById("Tutor").innerHTML = out_string;
    } else if ((d === 5 || 6) && (((diffDays - 21) % 28) === 0)) {
        out_string = 'Duty Tutor is ' + FridaySaturdayEven[0];
        document.getElementById("Tutor").innerHTML = out_string;
    } else {
        document.getElementById("Tutor").innerHTML = 'error';
    }

    if ((d === 2) && ((diffDays % 14) === 0)) {
        out_string = 'Beaware that Bed Change is Today!';
        document.getElementById("Extra").innerHTML = out_string;
    } else if ((d === 4) && (((diffDays - 7) % 14) === 0)) {
        out_string = 'Beaware that Room Inspections are Today!';
        document.getElementById("Extra").innerHTML = out_string;
    }
    
    document.getElementById("MT").innerHTML = MondayOdd[0];
    document.getElementById("TT").innerHTML = TuesdayOdd[0];
    document.getElementById("WT").innerHTML = WednesdayOdd[0];
    document.getElementById("TRT").innerHTML = ThursdayOdd[0];
    document.getElementById("FSOT").innerHTML = FridaySaturdayOdd[0];
    document.getElementById("SOT").innerHTML = SundayOdd[0];
    /*document.getElementById("FSET").innerHTML = FridaySaturdayEven[0];
    document.getElementById("SET").innerHTML = SundayEven[0];*/
    document.getElementById("MOP").innerHTML = MondayOdd[1];
    document.getElementById("MOS1").innerHTML = MondayOdd[2];
    document.getElementById("MOS2").innerHTML = MondayOdd[3];
    document.getElementById("MO1").innerHTML = MondayOdd[4];
    document.getElementById("MO2").innerHTML = MondayOdd[5];
    document.getElementById("MO3").innerHTML = MondayOdd[6];
    document.getElementById("TOP").innerHTML = TuesdayOdd[1];
    document.getElementById("TOS1").innerHTML = TuesdayOdd[2];
    document.getElementById("TOS2").innerHTML = TuesdayOdd[3];
    document.getElementById("TO1").innerHTML = TuesdayOdd[4];
    document.getElementById("TO2").innerHTML = TuesdayOdd[5];
    document.getElementById("TO3").innerHTML = TuesdayOdd[6];
    document.getElementById("WOP").innerHTML = WednesdayOdd[1];
    document.getElementById("WOS1").innerHTML = WednesdayOdd[2];
    document.getElementById("WOS2").innerHTML = WednesdayOdd[3];
    document.getElementById("WO1").innerHTML = WednesdayOdd[4];
    document.getElementById("WO2").innerHTML = WednesdayOdd[5];
    document.getElementById("WO3").innerHTML = WednesdayOdd[6];
    document.getElementById("TROP").innerHTML = ThursdayOdd[1];
    document.getElementById("TROS1").innerHTML = ThursdayOdd[2];
    document.getElementById("TROS2").innerHTML = ThursdayOdd[3];
    document.getElementById("TRO1").innerHTML = ThursdayOdd[4];
    document.getElementById("TRO2").innerHTML = ThursdayOdd[5];
    document.getElementById("TRO3").innerHTML = ThursdayOdd[6];
    document.getElementById("FSOP").innerHTML = FridaySaturdayOdd[1];
    document.getElementById("FSOS1").innerHTML = FridaySaturdayOdd[2];
    document.getElementById("FSO1").innerHTML = FridaySaturdayOdd[3];
    document.getElementById("FSO2").innerHTML = FridaySaturdayOdd[4];
    document.getElementById("FSO3").innerHTML = FridaySaturdayOdd[5];
    document.getElementById("SOP").innerHTML = SundayOdd[1];
    document.getElementById("SOS1").innerHTML = SundayOdd[2];
    document.getElementById("SO1").innerHTML = SundayOdd[3];
    document.getElementById("SO2").innerHTML = SundayOdd[4];
    document.getElementById("MEP").innerHTML = MondayEven[1];
    document.getElementById("MES1").innerHTML = MondayEven[2];
    document.getElementById("MES2").innerHTML = MondayEven[3];
    document.getElementById("ME1").innerHTML = MondayEven[4];
    document.getElementById("ME2").innerHTML = MondayEven[5];
    document.getElementById("ME3").innerHTML = MondayEven[6];
    document.getElementById("TEP").innerHTML = TuesdayEven[1];
    document.getElementById("TES1").innerHTML = TuesdayEven[2];
    document.getElementById("TE1").innerHTML = TuesdayEven[3];
    document.getElementById("TE2").innerHTML = TuesdayEven[4];
    document.getElementById("TE3").innerHTML = TuesdayEven[5];
    document.getElementById("TE4").innerHTML = TuesdayEven[6];
    document.getElementById("WEP").innerHTML = WednesdayEven[1];
    document.getElementById("WES1").innerHTML = WednesdayEven[2];
    document.getElementById("WE1").innerHTML = WednesdayEven[3];
    document.getElementById("WE2").innerHTML = WednesdayEven[4];
    document.getElementById("WE3").innerHTML = WednesdayEven[5];
    document.getElementById("WE4").innerHTML = WednesdayEven[6];
    document.getElementById("TREP").innerHTML = ThursdayEven[1];
    document.getElementById("TRES1").innerHTML = ThursdayEven[2];
    document.getElementById("TRE1").innerHTML = ThursdayEven[3];
    document.getElementById("TRE2").innerHTML = ThursdayEven[4];
    document.getElementById("TRE3").innerHTML = ThursdayEven[5];
    document.getElementById("FSEP").innerHTML = FridaySaturdayEven[1];
    document.getElementById("FSES1").innerHTML = FridaySaturdayEven[2];
    document.getElementById("FSE1").innerHTML = FridaySaturdayEven[3];
    document.getElementById("FSE2").innerHTML = FridaySaturdayEven[4];
    document.getElementById("SEP").innerHTML = SundayEven[1];
    document.getElementById("SES1").innerHTML = SundayEven[2];
    document.getElementById("SE1").innerHTML = SundayEven[3];
    document.getElementById("SE2").innerHTML = SundayEven[4];
    
    if ((d === 2) && ((diffDays % 14) === 0)) {
        out_string = ', ';
        document.getElementById("Punctuation").innerHTML = out_string;
    } else if ((d === 4) && (((diffDays - 7) % 14) === 0)) {
        out_string = ', ';
        document.getElementById("Punctuation").innerHTML = out_string;
    } else {
        document.getElementById("Punctuation").innerHTML = '.';
    }
}

function showStuff(id) {
    "use strict";
    if (document.getElementById(id).style.display === 'block') {
        document.getElementById(id).style.display = 'none';
    } else {
        document.getElementById(id).style.display = 'block';
    }
}
function hideStuff(id) {
    "use strict";
    document.getElementById(id).style.display = 'none';
}
