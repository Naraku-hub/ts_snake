class ScorePanel {
  // 记录计分板数据
  score: number = 0;
  level: number = 1;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  upScore: number;

  maxLevel: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {
    // 初始化
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  addScore() {
    this.scoreEle.innerHTML = ++this.score + "";
    if(this.score % this.upScore === 0) {
      this.levelUp();
    }
  }

  levelUp() {
    if(this.level < this.maxLevel){
      this.levelEle.innerHTML = ++this.level + "";
    }
  }
}

export default ScorePanel