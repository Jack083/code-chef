process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = "";
let inputArray = [];
let cases = 0;

process.stdin.on('data', function (chunk) {
    inputString += chunk;
});

process.stdin.on('end', function () {
    inputArray = inputString.trim().split('\n').map((string) => {
        return string.trim();
    });
    cases = parseInt(inputArray.shift())
    main()
});

function evaluateCase(n, k, a) {
    let temp = {}
    let result = 'No'
    temp[a[0]] = 1
    for (let i = 1; i < n; i++) {
        const diff = k - a[i]
        if (temp[diff]) {
            result = 'Yes'
            break;
        }
        temp[a[i]] = 1
    }
    return result
}

function main() {
    let caseIndex = 0;
    for (let index = 0; index <= cases - 1; index++) {
        const [n, k] = inputArray[caseIndex].split(" ").map(Number)
        const a = inputArray[caseIndex + 1].split(" ").map(Number)
        const result = evaluateCase(n, k, a)
        caseIndex = caseIndex += 2
        console.log(result)
    }
}
