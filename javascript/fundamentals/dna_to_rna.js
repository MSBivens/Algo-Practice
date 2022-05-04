// DNA to RNA Conversion
// EX "GCAT"  =>  "GCAU"
function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}