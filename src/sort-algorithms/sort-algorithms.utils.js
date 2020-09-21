
//Merge

export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations, ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {

            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {

            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}



//Bubble

export function getBubbleSortAnimations(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    bubbleSort(auxillaryArray, animations);

    array = auxillaryArray;
    return [animations, array];
}

function bubbleSort(auxillaryArray, animations) {
    const N = auxillaryArray.length;
    let iters = N - 1;
    while(iters > 0) {
        let swapped = false;
        for(let i = 0; i < iters; ++i) {
            animations.push(["comp1", i, i + 1]);
            animations.push(["comp2", i, i + 1]);
            if(auxillaryArray[i] > auxillaryArray[i + 1]) {
                swapped = true;
                animations.push(["cambio", i, auxillaryArray[i + 1]]);
                animations.push(["cambio", i + 1, auxillaryArray[i]]);
                swap(auxillaryArray, i, i + 1);
            }
        }
        if(swapped === false) break;
        iters--;
    }
}


// Insertion
export function getInsertionSortAnimations(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    insertionSort(auxillaryArray, animations);
    array = auxillaryArray;
    return [animations, array];
}

function insertionSort(auxillaryArray, animations) {
    const N = auxillaryArray.length;
    for (let i = 1; i < N; i++) {
        let key = auxillaryArray[i];
        let j = i - 1;
        animations.push(["comp1", j, i]);
        animations.push(["comp2", j, i]);
        while(j >= 0 && auxillaryArray[j] > key) {
            animations.push(["camb", j + 1, auxillaryArray[j]]);
            auxillaryArray[j + 1] = auxillaryArray[j];
            j = j - 1;
            if(j >= 0) {
                animations.push(["comp1", j, i]);
                animations.push(["comp2", j, i]);
            }     
        }
        animations.push(["camb", j + 1, key]);
        auxillaryArray[j + 1] = key;
    }
}


//Selection

export function getSelectionSortAnimations(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    selectionSort(auxillaryArray, animations);
    array = auxillaryArray;
    return [animations, array];
}

function selectionSort(auxillaryArray, animations) {
    const N = auxillaryArray.length;
    for (let i = 0; i < N - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < N; j++) {
            animations.push(["comp1", j, minIndex]);
            animations.push(["comp2", j, minIndex]);
            if (auxillaryArray[j] < auxillaryArray[minIndex]) {
                minIndex = j;
            }
        }
        animations.push(["cambio", minIndex, auxillaryArray[i]]);
        animations.push(["cambio", i, auxillaryArray[minIndex]]);
        swap(auxillaryArray, minIndex, i);
    }
}


//shared-swap
function swap(auxillaryArray, firstIndex, secondIndex) {
    let temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
}