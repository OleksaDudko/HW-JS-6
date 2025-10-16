let a = 0;
while (a < 10) {
    a += 1
    console.log(a);
}

// =========================================================

for (let index = 0; index < 20; index += 1) {
    if (index % 2 !== 0) {
        continue
    }
    console.log(index);
}

// ======================================================================

for (let index = 0; index <= 10; index += 1) {
    console.log(`7 x ${index} = ${7 * index}`);
}

// =============================================================

const n = 10;
for (let index = 0; index < n; index += 1) {
    if (index === n) {
        break
    }
    console.log(index);
    
}

// =============================================================

let b = 0;
while (b < 20) {
    b += 1
    if (b%3 === 0) {
        continue
    }
    console.log(b);
}