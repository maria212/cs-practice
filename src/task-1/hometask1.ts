function createBitAccessor(array: Uint8Array) {
    const checkArrIndex = (arrIndex: number) => {
        if (array.length <= arrIndex) {
            throw Error(`arrIndex must be less then ${array.length}`);
        }
    }

    function checkBitsOrder(bitsOrder) {
        if (bitsOrder > 8) {
            throw Error('Number must be less then 8');
        }
    }

    const getBitsValue = (arrIndex: number, bitsOrder: number): number => {
        const mask = 1 << (bitsOrder - 1);
        return +((array[arrIndex] & mask) !== 0);
    }

    const getResultBits = (result: number): string => Number(result).toString(2);

    return {
        get: (arrIndex: number, bitsOrder: number) => {
            checkArrIndex(arrIndex);
            checkBitsOrder(bitsOrder);
            return getBitsValue(arrIndex, bitsOrder);
        },
        set: (arrIndex: number, bitsOrder: number, newValue: 0 | 1) => {
            checkArrIndex(arrIndex);
            checkBitsOrder(bitsOrder);
            if (newValue !== 1 && newValue !== 0) {
                throw Error('newValue must be 0 or 1');
            }

            const targetBitValue = getBitsValue(arrIndex, bitsOrder);
            const mask = 1 << (bitsOrder - 1);

            // specific ways for each case
            /*  if (targetBitValue === 0 && newValue === 1) {
                const result = array[arrIndex] | mask;
                return getResultBits(result);
            } else if (targetBitValue === 1 && newValue === 0) {
                const result = array[arrIndex] & ~mask;
                return getResultBits(result);
            } else {
                console.log('Nothing to change')
            } */

            // invert value
            if (targetBitValue !== newValue) {
                const result = array[arrIndex] ^ mask;
                return getResultBits(result);
            } else {
                console.log('Nothing to change')
            }

        }
    }
}


const bitAccessor = createBitAccessor(new Uint8Array([0b1110, 0b1101]));

// Второй параметр это порядок бита "справа-налево"
console.log(bitAccessor.set(0, 1, 0));
console.log(bitAccessor.get(0, 1));    // 0
