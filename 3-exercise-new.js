var yesterday = new Date("2019-01-01");
yesterday.toUTCString();

console.log(yesterday.toUTCString());

anotherDAy = new Date("September 8, 2022");//this i wrote in IST time zone
anotherDAy.toUTCString();

console.log(anotherDAy.toUTCString()); // since UTC is 5.5 hours behind IST

