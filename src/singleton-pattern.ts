"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2022-03-31
 * @modified
 *
 * @description Singleton Pattern
 * @augments
 * @example
 * @link
 *
 */

const log = console.log;

class Person {
  // public name: string;
  name: string
  constructor(name: string) {
    this.name = name;
  }
}

// 可以创建多个不同的类的实例
const p1 = new Person('abc');
const p2 = new Person('xyz');


// singleton pattern 单例模式
// 只能创建单个类的实例

class Human {
  private static isExist: boolean = false;
  private static instance: Human;
  // public name: string
  name: string
  // 私有构造器函数，不可以通过 new 创建类的实例
  private constructor(name: string) {
    this.name = name;
  }
  // public static createInstance() {
  static createInstance(name: string) {
    if (!Human.isExist) {
      Human.isExist = true;
      Human.instance = new Human(name);
    } else {
      // ignore
    }
    return Human.instance;
  }
}

// const human = new Human('eric');
// Constructor of class 'Human' is private and only accessible within the class declaration.ts(2673)

const h1 = Human.createInstance('abc');
const h2 = Human.createInstance('xyz');

log('h1 name', h1.name);
log('h2 name', h2.name);

export {}

