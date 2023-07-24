/*
 * @Author: your name
 * @Date: 2022-04-20 16:20:31
 * @LastEditTime: 2022-04-21 17:06:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\views\dashboard\utils.ts
 */
export class SortType {
  constructor() {
    //
  }
  /**
   * 快速排序
   * 「时间复杂度：O(nlogn)」
   */
  quickSort(arr: Array<number>): any {
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
    return [...this.quickSort(left), pivot, ...this.quickSort(right)];
  }
}

export class Sort extends SortType {
  public arr: Array<number>;
  constructor(arr: Array<number>) {
    //
    super();
    this.arr = arr;
  }
  quick() {
    return super.quickSort(this.arr);
  }
  quickWay3(arr: Array<number>, L: number, R: number) {
    //
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
  }
}
