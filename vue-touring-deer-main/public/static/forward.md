### 原型、原型链
   ```
   - 原型：对象固有的 __proto__ 属性，该属性指向对象的 prototype 原型属性。
   - 原型链：当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是  Object.prototype 所以这就是我们新建的对象为什么能够使用  toString() 等方法的原因。
   - 特点：JavaScript对象是通过引用来传递的，我们创建的每个新对象实体并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变
   ```

---
### this指向、new关键字
  ```
  1. 以函数的形式调用时，this永远都是window
  2. 以方法的形式调用时，this就是调用方法的对象
  3. 以构造函数的形式调用时，this就是新创建的对象
  4. 使用call和apply调用时，this就是指定的那个对象
  5. 在全局作用域中this代表window
  ```
#### new 
```
1. 首先创建了一个新的空对象
2. 设置原型，将对象的原型设置为函数的prototype对象
3. 让函数的this指向这个对象，执行构造函数的代码（为这个新对象添加属性）
4. 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象
```
### 继承