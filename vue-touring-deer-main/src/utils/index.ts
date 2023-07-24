/*
 * @Author: your name
 * @Date: 2022-03-19 17:00:32
 * @LastEditTime: 2022-04-24 16:33:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\utils\index.ts
 */
// import { saveAs } from 'file-saver';

// import { useProcessStore } from '@/store';
// const useProcess = useProcessStore();
//
// export function downloadFile(url: any, name?: any, opts?: any) {
//   useProcess.UPDATE_PROCESS('0');
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', url);
//   xhr.responseType = 'blob';
//
//   xhr.onprogress = function (e) {
//     const { total, loaded } = e;
//     const percentage = (loaded / total).toFixed(2);
//     useProcess.UPDATE_PROCESS(percentage);
//   };
//
//   xhr.onload = function () {
//     console.log('xhr', xhr);
//     saveAs(xhr.response, name, opts);
//   };
//   xhr.onerror = function () {
//     console.error('could not download file');
//   };
//   xhr.send();
// }

/**
 * 快速排序
 * 「时间复杂度：O(nlogn)」
 */

export function quickSort(arr: Array<number>): any {
  if (arr.length <= 1) return arr;
  const len = arr.length;
  const middle = Math.floor(len / 2);
  const pivot = arr.splice(middle, 1)[0];
  const left = [],
    right = [];
  for (let i = 0; i < arr.length; i++) {
    //
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

/**
 * 冒泡排序
 * 时间复杂度O(n*n)
 */
export function bubbleSort(arr: Array<number>) {
  if (arr.length <= 1) return arr;
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

/**
 * 三路快排
 * @param arr 需要进行三路快排的数组
 * @param L 数组的起始位置
 * @param R 数组的末尾位置
 * @returns {{lt: *, gt: *}}
 */
export function threeWayQuickWay(arr: Array<number>, L: number, R: number) {
  // 对于小规模数组, 使用插入排序
  // if (R - L < 15) {
  //   //
  //   return;
  // }
  if (L > R) return;
  const p = arr[L];
  let lt = L;
  let gt = R + 1;
  for (let i = L + 1; i < gt; ) {
    if (arr[i] === p) {
      i++;
    } else if (arr[i] > p) {
      [arr[gt - 1], arr[i]] = [arr[i], arr[gt - 1]];
      gt--;
    } else {
      [arr[lt + 1], arr[i]] = [arr[i], arr[lt + 1]];
      lt++;
      i++;
    }
  }
  [arr[L], arr[lt]] = [arr[lt], arr[L]];
  threeWayQuickWay(arr, L, lt - 1);
  threeWayQuickWay(arr, gt, R);
}
