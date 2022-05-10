class Food {
  // 定义一个元素对应的属性
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById("food")!;
  }
  // 定义一个获取食物X轴的坐标的方法
  get X () {
    return this.element.offsetLeft;
  }
  get Y() {
    return this.element.offsetTop;
  }
  change () {
    //  生成一个随机的位置 min: 0, max: 290 蛇移动一次10px 食物的坐标是整10
    const top: number = Math.round(Math.random() * 29) * 10;
    const left: number = Math.round(Math.random() * 29) * 10;
    this.element.style.left = left + "px";
    this.element.style.top = top + "px";
  }
}

export default Food;