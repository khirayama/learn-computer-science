// https://ksnctf.sweetduet.info/problem/2
const strings = 'EBG KVVV vf n fvzcyr yrggre fhofgvghgvba pvcure gung ercynprf n yrggre jvgu gur yrggre KVVV yrggref nsgre vg va gur nycunorg. EBG KVVV vf na rknzcyr bs gur Pnrfne pvcure, qrirybcrq va napvrag Ebzr. Synt vf SYNTFjmtkOWFNZdjkkNH. Vafreg na haqrefpber vzzrqvngryl nsgre SYNT.';
// vf -> is
// v - i = 22 - 9 = 13 -> 22 - 13 = 9
// f - s = 6 - 19 = -13 -> 6 - 13 = -7
const offset = 13;
const alphabetLength = 26;
let ACharCode = 'A'.charCodeAt(); // 65
let ZCharCode = 'Z'.charCodeAt(); // 90
let aCharCode = 'a'.charCodeAt(); // 97
let zCharCode = 'z'.charCodeAt(); // 122
console.log(ACharCode, ZCharCode, aCharCode, zCharCode);

let newStrings = '';
for (let i = 0; i < strings.length; i += 1) {
  let charCode = strings[i].charCodeAt();

  console.log('before', strings[i], charCode);
  if (ACharCode <= charCode && charCode <= ZCharCode) {
    charCode = charCode + offset;
    if (ZCharCode < charCode) {
      charCode = charCode - alphabetLength;
    }
  } else if (aCharCode <= charCode && charCode <= zCharCode) {
    charCode = charCode + offset;
    if (zCharCode < charCode) {
      charCode = charCode - alphabetLength;
    }
  }
  console.log('after', String.fromCharCode(charCode), charCode);

  newStrings += String.fromCharCode(charCode);
}
console.log(strings);
console.log(newStrings);
